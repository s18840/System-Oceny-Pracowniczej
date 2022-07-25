import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Row,
  TableInfo,
  ModalOpenButton
} from "../../styles/ProfilePageStyle";
import { Context } from "../../pages/Context";
import ModalEmployment from "../ModalEmployment";

const dataJson = ["Start date", "End date", "Job", "Time basis"];

function EmploymentTable() {
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [openModal,setOpenModal] = useState(false);
  useEffect(() => {
    context &&
      axios
        .get(
          `https://localhost:5001/api/Dto/emp/${localStorage.getItem(
            "employeeId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setEmployee(data);
        });
  }, [context]);

  let dataArray;
  function reformatDate(dateStr) {
    dataArray = dateStr.split("-");
    return dataArray[2] + "-" + dataArray[1] + "-" + dataArray[0];
  }

  return (
    <>
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
              {reformatDate(
                content?.contractExpirationDate.split("T")[0]
                  ? content?.contractExpirationDate.split("T")[0]
                  : ""
              )}
            </td>
            <td>{content.jobName}</td>
            <td>{content.timeBasis}</td>
          </Row>
        ))}
      </TableInfo>
      <ModalOpenButton id="modalButton" onClick={() =>{setOpenModal(true)}}>
        Add
      </ModalOpenButton>
      {openModal && <ModalEmployment closeModal={setOpenModal}
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
