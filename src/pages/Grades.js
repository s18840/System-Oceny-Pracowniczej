import React, {useContext, useEffect, useState} from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {ContentWrapper, PageWrapper, SubTitle} from "../styles/GlobalStyle";
import getCurrentQuarter from "../Utils/QuarterUtils";
import axios from "axios";
import CompetenceGradeDetails
  from "../components/CompetenceGrade/CompetenceGradeDetails";
import {Context} from "./Context";
import {useForm} from "react-hook-form";

function Grades() {

  const [competenceComponent, setCompetenceComponent] = useState(<></>);
  const [context] = useContext(Context)
  const {register} = useForm()

  //different view based on role
  //emp -> your grades
  //manager -> your grades + grades of team
  //HR -> all grades
  // const {register} = useForm();

  const currentEmp = localStorage.getItem("employeeId");
  // const roles = localStorage.getItem("roles");
  const defaultQuarter = getCurrentQuarter().label

  useEffect(()=>{
    context && axios.get(
      `https://localhost:5001/api/Dto/grades/quarter/${17}/${defaultQuarter}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res => {
        console.log(res.data);
        setCompetenceComponent(
          <CompetenceGradeDetails grade={res.data}/>
        );
        return res;
      }))
      .catch(err => console.log("GET comp. details err", err));
  }, [context, currentEmp, defaultQuarter])

  console.log(competenceComponent);
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PageWrapper>
        <ContentWrapper>
          <SubTitle>Grades</SubTitle>
          <select
            {...register("quarterSelect")}
          >
            <option value={defaultQuarter}>{defaultQuarter}</option>
          </select>
          {competenceComponent}
          <ContentWrapper>
            <SubTitle>Targets grade</SubTitle>
            {/* target component */}
          </ContentWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Grades;
