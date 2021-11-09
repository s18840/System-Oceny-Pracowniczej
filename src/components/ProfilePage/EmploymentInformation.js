import React from "react";
import {
  EmploymentDetailed,
  EmploymentHeadingText,
  ProfileEmploymentWrapper,
  EmploymentDate,
  EmploymentJob,
  EmploymentDep,
  EmploymentTeam,
  EmploymentGridWrapper,
} from "../../styles/ProfilePageStyle";
const EmploymentInformation = () => (
  <>
    <ProfileEmploymentWrapper>
      <EmploymentHeadingText>Time</EmploymentHeadingText>
      <EmploymentHeadingText>Department</EmploymentHeadingText>
      <EmploymentHeadingText>Job</EmploymentHeadingText>
      <EmploymentHeadingText>Team</EmploymentHeadingText>
      
      <EmploymentDetailed>
        <EmploymentDate>05.12.2021</EmploymentDate>
        <EmploymentDep>HR</EmploymentDep>
        <EmploymentJob>JAVA DEV</EmploymentJob>
        <EmploymentTeam>Team 12C</EmploymentTeam>
      </EmploymentDetailed>
    </ProfileEmploymentWrapper>
  </>
);
export default EmploymentInformation;
