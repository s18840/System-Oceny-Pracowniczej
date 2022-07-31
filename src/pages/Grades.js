import React, {useCallback, useContext, useEffect, useState} from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
  ContentWrapper,
  GlobalButton, HighlightText,
  PageWrapper,
  SubTitle,
} from "../styles/GlobalStyle";
import getCurrentQuarter from "../Utils/QuarterUtils";
import axios from "axios";
import CompetenceGradeDetails
  from "../components/CompetenceGrade/CompetenceGradeDetails";
import {Context} from "./Context";
import {useForm} from "react-hook-form";
import {ErrorLabel, QuarterSelect, TargetsAvgElement} from "../styles/CompetencesGradeStyles";
import {useHistory, useParams} from "react-router-dom";
import {
  TargetContainer, TargetImportance,
  TargetListTitlesWrapper, TargetName,
  TargetNameTitle, TargetsListWrapper, TargetTitle,
} from "../styles/TargetsStyles";
import { log } from "loglevel";
function Grades() {
  const {id} = useParams()
  const currentEmp = id ? id : localStorage.getItem("employeeId");

  const [competenceGrades, setCompetenceGrades] = useState([]);
  const [targetGrades, setTargetGrades] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const addUniqueQuarters = useCallback((quarters) => {
    setAvailableQuarters(prev => {
      const mergedArray = [...prev, ...quarters];
      return mergedArray.filter((value, index) =>
        mergedArray.indexOf(value) === index,
      );
    });
  }, []);

  const defaultQuarter = getCurrentQuarter().label || "";
  const [currentQuarter, setCurrentQuarter] = useState(defaultQuarter);
  const [availableQuarters, setAvailableQuarters] = useState([defaultQuarter]);
  const [loading, setLoading] = useState(true);
  const [context] = useContext(Context);
  const {register,
    watch,
  } = useForm();
  const history = useHistory()

  useEffect(() => {
    const quarterSubscription = watch((value) => setCurrentQuarter(value.quarterSelect));
    return () => quarterSubscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if(currentEmp !== localStorage.getItem("employeeId")) {
      context &&
      axios
        .get(
          `${process.env.REACT_APP_API_ADDRESS}Employee/${currentEmp}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({data}) => {
          setFirstName(data.firstName);
          setSurname(data.lastName);
        }).catch(err => log.warn(err));
    }
  }, [context, currentEmp]);

  useEffect(() => {
    setLoading(true);
    context && axios.get(
      `https://localhost:5001/api/Dto/grades/${currentEmp}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res => {
        setCompetenceGrades(res.data);
        let quarters = res.data.map(grade => grade.quarter);
        addUniqueQuarters(quarters);
        return axios.get(
          `https://localhost:5001/api/Goal/emp/${currentEmp}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(res => {
            setTargetGrades(res.data);
            setLoading(false);
            let quarters = res.data.map(grade => grade.quarter);
            addUniqueQuarters(quarters);
            return res;
          })
          .catch(err => log.warn(err));
      }))
      .catch(err => log.warn(err));

  }, [context, addUniqueQuarters, currentEmp]);

  const calcWeightedAvg = useCallback((quarterGrade)=>{
    let total = 0
    let data = quarterGrade.map(target => {
      total += target.importance
      return {importance: target.importance,
        grade: target.realisationGrade < 1 ? target.realisationGrade * 100 : target.realisationGrade}
    })
    let weightedAvg = 0.0
    data.forEach(data => weightedAvg += data.importance / total * data.grade)

    return weightedAvg.toFixed(2)
  },[])

  const getCompGrade = (quarter) => {
    let quarterGrade = competenceGrades.find(grade => grade.quarter === quarter);
    if (quarterGrade && quarterGrade.competenceGrades.length !== 0) {
      return <CompetenceGradeDetails grade={quarterGrade}/>;
    } else if (currentQuarter === getCurrentQuarter().label && currentEmp !== localStorage.getItem("employeeId")) {
      return <GlobalButton onClick={()=>history.push(`/grade/${id}`)}>Grade</GlobalButton>;
    } else {
      return <ErrorLabel>No grades!</ErrorLabel>;
    }
  };

  const getTargetsGrade = (quarter) => {
    let quarterGrade = targetGrades.filter(target => target.quarter === quarter);
    if (quarterGrade && quarterGrade.length !== 0) {
      if(quarterGrade.filter(grade => grade.realisationGrade).length === quarterGrade.length) {
        return (
          <>
            <TargetListTitlesWrapper>
              <TargetNameTitle>Name</TargetNameTitle>
              <TargetTitle>Importance</TargetTitle>
              <TargetTitle>Realisation grade</TargetTitle>
            </TargetListTitlesWrapper>
            <TargetsListWrapper>
              {
                quarterGrade.map((target) => (
                  <TargetContainer key={target.goalID} style={{cursor: "default"}}>
                    <TargetName>{target.name}</TargetName>
                    <TargetImportance>{target.importance}</TargetImportance>
                    <TargetImportance>{target.realisationGrade < 1 ? target.realisationGrade * 100 : target.realisationGrade}%</TargetImportance>
                  </TargetContainer>
                ),
                )
              }
            </TargetsListWrapper>
            <TargetsAvgElement>
            Weighted average: <HighlightText fontSize="1.5rem">{calcWeightedAvg(quarterGrade)}% </HighlightText>
            </TargetsAvgElement>
          </>
        )
      } else if (currentQuarter === getCurrentQuarter().label && currentEmp !== localStorage.getItem("employeeId")){
        return <GlobalButton onClick={()=>history.push(`/targets/${id}`)}>Grade</GlobalButton>;
      } else return <ErrorLabel>No grades!</ErrorLabel>;
    } else {
      return <ErrorLabel>No targets!</ErrorLabel>;
    }};


    if(loading){
      return(<></>)
    }
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PageWrapper>
        <ContentWrapper>
          <SubTitle>
            {firstName.length != 0 ? firstName + " " + surname + "'s " :"My "}grades
          </SubTitle>
          <QuarterSelect
            {...register("quarterSelect")}
            defaultValue={defaultQuarter}
          >
            {
              availableQuarters.map(value => (
                <option
                  key={value}
                  value={value}
                  selected={value === defaultQuarter}
                >
                  {value}
                </option>
              ))
            }
          </QuarterSelect>
          <ContentWrapper>
            <SubTitle>Competence grade</SubTitle>
            {getCompGrade(currentQuarter)}
            <SubTitle>Targets grade</SubTitle>
            {getTargetsGrade(currentQuarter)}
          </ContentWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Grades;
