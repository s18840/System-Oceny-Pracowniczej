import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import {DateWrapper, EmploymentTableDateLine, Row, TableDetailsDate, TableInfo,} from "../../styles/ProfilePageStyle";
import {useTranslation} from 'react-i18next';
import useApi from "../../api/useApi";
import { Context } from '../../pages/Context';

const dataJson = ["Start date", "End date", "Job", "Time basis"];

function EmploymentTable () {
  const [context, setContext] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [hireDate, sethireDate] = useState(" ");
  const [expirationDate, setExpirationDate] = useState(" ");
  const [timeBasis, setTimeBasis] = useState(" ");
  const [job, setJob] = useState(" ");
  const {t} = useTranslation();
  useEffect (()=>{
    context && axios.get(`https://localhost:5001/api/Dto/emp/${localStorage.getItem("employeeId")}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }}).then(({data}) => 
    {setEmployee(data); 
      sethireDate(data.employmentsJobs.hireDate);
      setExpirationDate(data.employmentsJobs.contractExpirationDate);
      setJob(data.employmentsJobs.jobName);
      setTimeBasis(data.employmentsJobs.timeBasis);
    });
  },[context]);

  let dataArray;
  function reformatDate(dateStr){
    dataArray = dateStr.split("-");
    return dataArray[2]+ "-" +dataArray[1]+ "-" +dataArray[0];
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
      {employee?.employmentsJobs?.map((content) => (
        <Row>
          <td>{reformatDate(content?.hireDate.split('T')[0] ? content?.hireDate.split('T')[0] :'')}</td>
          <td>{reformatDate(content?.contractExpirationDate.split('T')[0] ? content?.contractExpirationDate.split('T')[0] :'')}</td>
          <td>{content.jobName}</td>
          <td>{content.timeBasis}</td>
        </Row>
      ))}
    </TableInfo>
  </>
  )
};
export default EmploymentTable;
