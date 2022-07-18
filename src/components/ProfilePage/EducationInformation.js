import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Row,
  TableInfo,
  FormButton,
  ProfileDataText,
  AddButton,
  ModalOpenButton
} from "../../styles/ProfilePageStyle";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
import { Context } from "../../pages/Context";
import { useForm } from "react-hook-form";
import { InputField} from "../../styles/GlobalStyle";
import Modal from "../Modal";
//const today = new Date();

const dataJson = ["Graduation Date", "Institution", "Degree"];
function EducationInformation() {
  const [context, setContext] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [graduationDate, setGraduationDate] = useState(" ");
  const [degree, setDegree] = useState(" ");
  const [placeOfEducation, setPlaceOfEducation] = useState(" ");
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [formReady, setFormReady] = useState(false);
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
          setPlaceOfEducation(data.educations.placeOfEducation);
          setDegree(data.educations.degree);
          setGraduationDate(data.educations.graduationDate);
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
        {"Add"}
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
