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
import { log } from "loglevel";
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
      }).catch(err => log.warn(err));
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
        .catch(err => log.warn(err));
    }
  }, [context, id]);

  const {
    register,
    getValues,
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

    axios.post(
      `${process.env.REACT_APP_API_ADDRESS}Dto/grades/add/${id}`,
      empGrade,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    ).then(res => {
      history.push(`/grades/${id}`);
    })
    .catch(err => log.warn(err));
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
                On this page there are descriptions of competences that are relevant in this employee's team and are compatible with company's values.
                Consider how employee is working according to these values. What is easy or hard for him/her? How much these competences are visible in employee's behaviour?
                Please provide examples supporting your decision.
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
              <Span>Conclusion</Span>
              <TextField
                {...register("gradeConclusion", ({required: true}))}
                width="100%"
              />
              <AcceptButtonWrapper>

                <AcceptButton onClick={handleSubmit}>Accept</AcceptButton>
              </AcceptButtonWrapper>
            </>}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Grade;
