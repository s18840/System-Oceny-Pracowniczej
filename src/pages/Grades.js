import React, {useCallback, useContext, useEffect, useState} from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
  ContentWrapper,
  GlobalButton,
  PageWrapper,
  SubTitle,
} from "../styles/GlobalStyle";
import getCurrentQuarter from "../Utils/QuarterUtils";
import axios from "axios";
import CompetenceGradeDetails
  from "../components/CompetenceGrade/CompetenceGradeDetails";
import {Context} from "./Context";
import {useForm} from "react-hook-form";
import TargetList from "../components/Targets/TargetList";
import {ErrorLabel, QuarterSelect} from "../styles/CompetencesGradeStyles";
import {useParams} from "react-router-dom";

function Grades() {
  const {id} = useParams()
  const currentEmp = id ? id : localStorage.getItem("employeeId");
  const roles = localStorage.getItem("roles");

  const [competenceGrades, setCompetenceGrades] = useState([]);
  const [targetGrades, setTargetGrades] = useState([]);

  const [availableQuarters, setAvailableQuarters] = useState([]);

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

  const [context] = useContext(Context);
  const {register, watch} = useForm();

  const getCompGrade = (quarter) => {
    let quarterGrade = competenceGrades.find(grade => grade.quarter === quarter);
    if (quarterGrade && quarterGrade.competenceGrades.length !== 0) {
      return <CompetenceGradeDetails grade={quarterGrade}/>;
    } else if (currentQuarter === getCurrentQuarter().label) {
      return <GlobalButton>Grade</GlobalButton>;
    } else {
      return <ErrorLabel>No grades!</ErrorLabel>;
    }
  };

  const getTargetsGrade = (quarter) => {
    let quarterGrade = targetGrades.filter(target => target.quarter === quarter);
    if (quarterGrade && quarterGrade.length !== 0) {
      return <TargetList
        targetList={quarterGrade}
      />;
    } else if (currentQuarter === getCurrentQuarter().label) {
      return <GlobalButton>Grade</GlobalButton>;
    } else {
      return <ErrorLabel>No Grades!</ErrorLabel>;
    }
  };

  //only targets that have been graded



  useEffect(() => {
    const quarterSubscription = watch((value) => setCurrentQuarter(value.quarterSelect));
    return () => quarterSubscription.unsubscribe();
  }, [watch]);


  useEffect(() => {

    context && axios.get(
      `https://localhost:5001/api/Dto/grades/${currentEmp}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res => {
        console.log(res);
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
            console.log(res);
            setTargetGrades(res.data);
            let quarters = res.data.map(grade => grade.quarter);
            addUniqueQuarters(quarters);
            return res;
          })
          .catch(err => {
            console.log("GET targets details err", err);
          });
      }))
      .catch(err => {
        console.log("GET comp. details err", err);
      });

  }, [context, addUniqueQuarters]);

  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PageWrapper>
        <ContentWrapper>
          <SubTitle>Grades</SubTitle>
          <QuarterSelect
            {...register("quarterSelect")}
            defaultValue={defaultQuarter}
          >
            {availableQuarters.map(value => (
              <option
                value={value}
                selected={value === defaultQuarter}
              >
                {value}
              </option>
            ))}
          </QuarterSelect>
          <ContentWrapper>
            <SubTitle>Competence Grade</SubTitle>
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
