import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import {DateWrapper, EmploymentTableDateLine, Row, TableDetailsDate, TableInfo,} from "../../styles/ProfilePageStyle";
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
import { Context } from '../../pages/Context';
//const today = new Date();

const dataJson = ["Graduation Date", "Institution", "Degree",];
function EducationInformation () {
  const [context, setContext] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [graduationDate, setGraduationDate] = useState(" ");
  const [degree, setDegree] = useState(" ");
  const [placeOfEducation, setPlaceOfEducation] = useState(" ");
  const { t } = useTranslation();
  useEffect (()=>{
    context && axios.get(`https://localhost:5001/api/Dto/emp/${context.employeeId}`, {headers: {Authorization: `Bearer ${context.token}` }}).then(({data}) => 
    {setEmployee(data); 
      setPlaceOfEducation(data.educations.placeOfEducation);
      setDegree(data.educations.degree);
      setGraduationDate(data.educations.graduationDate);
    });
  },[context]);

  let dArr;
  function reformatDate(dateStr){
    dArr = dateStr.split("-");
    return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
  }

  return(
  <>
    <TableInfo className="table">
      <thead>
      <tr>
        {dataJson.map((title) => (
          <th>{t(title)}</th>
        ))}
      </tr>
      </thead>
      {employee?.educations?.map((content) => (
        <Row>
          <td>{reformatDate(content?.graduationDate.split('T')[0] ? content?.graduationDate.split('T')[0] :'')}</td>
          <td>{content.placeOfEducation ? content.placeOfEducation : "-"}</td>
          <td>{content.degree}</td>
        </Row>
      ))}
    </TableInfo>
  </>
  )};

export default EducationInformation;
