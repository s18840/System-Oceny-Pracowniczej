import React from "react";
import {
  EduList,
  ListElement,
  ListDataDate,
  ListHeadings,
  ListData,
  ListDateLine,
  ListDetailsDate,
} from "../../styles/ProfilePageStyle";
const today = new Date();
const EducationInformation = () => (
  <>
    <EduList>
      <ListElement>
        <ListHeadings>Time</ListHeadings>
        <ListHeadings>Department</ListHeadings>
        <ListHeadings>Job</ListHeadings>
        <ListHeadings>Team</ListHeadings>
      </ListElement>

      <ListElement>
        <ListDataDate>
          <ListDetailsDate>21.12.2009</ListDetailsDate>
          <ListDateLine />
          <ListDetailsDate>30.05.2015</ListDetailsDate>
        </ListDataDate>
        <ListData>IT</ListData>
        <ListData>SQL Administrator</ListData>
        <ListData>7c</ListData>
      </ListElement>
      
      <ListElement>
        <ListDataDate>
          <ListDetailsDate>09.12.2011</ListDetailsDate>
          <ListDateLine />
          <ListDetailsDate>24.02.2019</ListDetailsDate>
        </ListDataDate>
        <ListData>Testing Department</ListData>
        <ListData>SQL Administrator</ListData>
        <ListData>-</ListData>
      </ListElement>
    </EduList>
  </>
);

export default EducationInformation;
