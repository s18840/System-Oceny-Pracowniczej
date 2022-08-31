import React, { useEffect, useState, useContext } from "react";
import {
  Row,
  TableInfo,
  ModalOpenButton
} from "../../styles/ProfilePageStyle";
import { Context } from "../../pages/Context";
import ModalEmployment from "../ModalEmployment";
import { ErrorsSpan } from "../../styles/GlobalStyle";
import { log } from "loglevel";
import { get } from "../../Utils/APIUtils"
const dataJson = ["Start date", "End date", "Job", "Time basis"];

function EmploymentTable(props) {
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [openModal,setOpenModal] = useState(false);
  useEffect(() => {
    context && !props.empId && get(`Dto/emp/${localStorage.getItem("employeeId")}`)
      .then(({ data }) => {
        setEmployee(data);
      }).catch(err => log.warn(err));
  }, [context, props.empId]);

  useEffect(() => {
    context && props.empId && get(`Dto/emp/${props.empId}`)
      .then(({ data }) => {
        setEmployee(data);
      }).catch(err => log.warn(err));
  }, [context, props.empId]);

  let dataArray;
  function reformatDate(dateStr) {
    dataArray = dateStr.split("-");
    return dataArray[2] + "-" + dataArray[1] + "-" + dataArray[0];
  }
  const endDate = employee?.employmentsJobs?.map((val)=> val.terminationDate ? val.terminationDate : val.contractExpirationDate)
  const emptyJobs = employee?.employmentsJobs.length == 0
  
  return (
    <>
      {employee?.employmentsJobs.length != 0 ?
        <TableInfo className="table">
          <thead>
            <tr>
              {dataJson.map((title) => (
                <th>{title}</th>
              ))}
            </tr>
          </thead>
          {employee?.employmentsJobs?.map((content) => (
            <Row>
              <td>
                {reformatDate(
                  content?.hireDate.split("T")[0]
                    ? content?.hireDate.split("T")[0]
                    : ""
                )}
              </td>
              <td>
                {content?.terminationDate ? reformatDate(
                  content?.terminationDate.split("T")[0]
                ): "Current"}
              </td>
              <td>{content.jobName}</td>
              <td>{content.timeBasis}</td>
            </Row>
          ))}
        </TableInfo> : <ErrorsSpan font-size="20" style={{ color: "gray", marginTop: "300px", fontSize: "60px", marginLeft: "600px" }}>No employments</ErrorsSpan>}
      {(localStorage.getItem("roles").includes("HR") || localStorage.getItem("roles").includes("Admin")) && (props.empId) && <ModalOpenButton id="modalButton" onClick={() =>{setOpenModal(true)}}
        hidden={employee?.employmentsJobs.filter(value => value.terminationDate == null).length > 0}>
        Add
      </ModalOpenButton>}
      {openModal && <ModalEmployment endDate={endDate} emptyJobs={emptyJobs} empId={props.empId} closeModal={setOpenModal}
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }} />}
    </>
  );
}
export default EmploymentTable;
