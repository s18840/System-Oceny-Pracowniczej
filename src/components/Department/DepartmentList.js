import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow,  
  NewButton,
  EditButton,
} from '../../styles/GlobalStyle';
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
import { Context } from '../../pages/Context';

const dataJson =["Department name:", "Department Teams:","Director:"];

function DepartmentList() {
  const { t } = useTranslation();
  const [context, setContext] = useContext(Context);
  const [departments, setDepartments] = useState();
  useEffect (()=>{
    context && axios.get(`https://localhost:5001/api/Dto/deps`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }}).then(({data}) => 
    {setDepartments(data)
      console.log(data)
    });
  },[context]);
  return (
    <>
      <PersonalDataHeadingText>{t("Department List")}</PersonalDataHeadingText>
      {/*<EditButton>{t("Edit")}</EditButton>*/}
      <NewButton onClick={event =>  window.location.href='/newDepartment'}>{t("New")}</NewButton>
      <TableInfo className="table">
        <thead>
        <tr>
          {dataJson.map((title) => (
            <th>{t(title)}</th>
          ))}
        </tr>
        </thead>
        {departments?.map((content) => (
          <Row>
            <TableDetailsDate>{content.departmentName}</TableDetailsDate>
            <TableDetailsMarker>
              <MarkersTable>
                {content?.teams?.map(team =>(
                  <MarkersRow>
                    {team.teamName}
                  </MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>
            <TableDetails>
              {content.directorName + " "+ content.directorSurname}
            </TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default DepartmentList;
