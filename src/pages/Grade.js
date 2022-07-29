import React, {useContext, useEffect, useState} from "react";
import {
  ContentWrapper,
  PageWrapper,
  Span,
  SubTitle,
  TextField,
} from "../styles/GlobalStyle";
import NavBar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  AcceptButtonWrapper,
  CompetentGradesWrapper,
  GradeDescWrapper,
} from "../styles/CompetencesGradeStyles";
import CompetenceGradeElement
  from "../components/CompetenceGrade/CompetenceGradeElement";
import {useForm} from "react-hook-form";
import {AcceptButton} from "../styles/ProfilePageStyle";
import {Context} from "./Context";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import getCurrentQuarter from "../Utils/QuarterUtils";

//TODO employee can be graded only be his MANAGER (and HR/ADMIN)

function Grade() {
  const {id} = useParams();
  const history = useHistory();

  const [competences, setCompetences] = useState([]);
  const [exists, setExists] = useState(false);
  const [context] = useContext(Context);
  const currentQuarter = getCurrentQuarter().label;

  useEffect(() => {
    context && axios.get(
      `${process.env.REACT_APP_API_ADDRESS}Dto/grades/quarter/${id}/${currentQuarter}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(res => {
        if (res.data.compGradeId !== 0) {
          setExists(true);
        }
      });
  });

  useEffect(() => {
    if (!exists) {
      context && axios.get(
        `${process.env.REACT_APP_API_ADDRESS}Dto/comps/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
        .then(res => setCompetences(res.data))
        .catch(err => console.log("GET emp comps err", err));
    }
  }, [context, id]);

  const {
    register,
    getValues,
    formState: {errors}
  } = useForm({mode: "onChange"});

  const handleSubmit = () => {
    const values = getValues();
    const competenceGrades = [];
    values.compGrade.map((value) => {
      let total = 0;
      let count = 0;
      value.values.forEach((value) => {
        total += parseInt(value);
        count++;
      });
      let avg = total / count;
      competenceGrades.push({
        competenceId: value.competenceId,
        grade: avg,
        description: value.comment,
      });
    });
    let empGrade = {
      quarter: currentQuarter,
      conclusion: values.gradeConclusion,
      competenceGrades: competenceGrades,
    };
    console.log("empGrade", empGrade);

    axios.post(
      `${process.env.REACT_APP_API_ADDRESS}Dto/grades/add/${id}`,
      empGrade,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    ).then(res => {
      console.log(res);
      history.push("/grades");
    })
      .catch(err => console.log("POST emp grade err", err));
  };

  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PageWrapper>
        <ContentWrapper>
          {exists ?
            <SubTitle>This user has already been graded in this
              quarter</SubTitle> :
            <>
              <SubTitle>
                Competence grade
              </SubTitle>
              <GradeDescWrapper>
                poniżej znajduje sie opis kompetencji istatnych dla wykonywanej
                pracy,
                zgodny z przyjętymi przez firmę wartościami. Zastanów się w
                jakim
                stopniu pracownik ...
              </GradeDescWrapper>
              <CompetentGradesWrapper>
                {competences.map((value, index) => (
                  <CompetenceGradeElement
                    key={value.competenceId}
                    competence={value}
                    index={index}
                    register={register}
                  />
                ))}
              </CompetentGradesWrapper>
              <Span>Grade conclusion</Span>
              <TextField
                {...register("gradeConclusion", ({required: true}))}
                width="100%"
              />
              <AcceptButtonWrapper>
                {errors && <Span>All fields required</Span>}
                <AcceptButton onClick={handleSubmit}>Accept</AcceptButton>
              </AcceptButtonWrapper>
            </>}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Grade;
