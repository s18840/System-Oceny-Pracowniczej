import React from "react";
import EmploymentTable from "./EmploymentTable";
const EmploymentInformation = (props) => (
  <>
    <EmploymentTable empId={props.empId}></EmploymentTable>
  </>
);
export default EmploymentInformation;
