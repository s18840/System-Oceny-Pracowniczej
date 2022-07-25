import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Row,
  TableInfo,
  ModalOpenButton
} from "../../Styles/ProfilePageStyle";
import { Context } from "../../pages/Context";
import Modal from "../Modal";

const dataJson = ["Graduation Date", "Institution", "Degree"];
function EducationInformation() {
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
        {employee?.educations?.map((content) => (
          <Row>
            <td>
              {reformatDate(
                content?.graduationDate.split("T")[0]
                  ? content?.graduationDate.split("T")[0]
                  : ""
              )}
            </td>
            <td>{content.placeOfEducation ? content.placeOfEducation : "-"}</td>
            <td>{content.degree}</td>
          </Row>
        ))}
      </TableInfo>
      <ModalOpenButton id="modalButton" onClick={() =>{setOpenModal(true)}}>
        Add
      </ModalOpenButton>
      {openModal && <Modal closeModal={setOpenModal}
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

export default EducationInformation;
