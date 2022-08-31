import React, {useContext, useEffect, useState} from "react";
import AddTarget from "../components/Targets/AddTarget";
import Navbar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import {ContentWrapper, PageWrapper, SubTitle} from "../styles/GlobalStyle";
import TargetList from "../components/Targets/TargetList";
import {Context} from "./Context";
import {useHistory, useParams} from "react-router-dom";
import getCurrentQuarter from "../Utils/QuarterUtils";
import { log } from "loglevel";
import { get, post, put} from "../Utils/APIUtils"
function Targets() {
  const {id} = useParams();
  const currentEmp = id ? id : localStorage.getItem("employeeId");
  const isMyTargets = !(id && id != localStorage.getItem("employeeId"));
  const currentEmpRole = localStorage.getItem("roles");

  let history = useHistory();

  const TARGET_LIST = "TARGET_LIST";
  const ADD_TARGET = "ADD_TARGET";
  const TARGET_DETAILS = "TARGET_DETAILS";

  const [context] = useContext(Context);

  const [contentType, setContentType] = useState(TARGET_LIST);
  const [targetIndex, setTargetIndex] = useState();
  const [targets, setTargets] = useState([]);
  const [canGrade, setCanGrade] = useState(false);

  const currentQuarter = getCurrentQuarter().label;

  useEffect(() => {
    if (targets.length === 0) {
      context && get(`Goal/emp/quarter/${currentEmp}/${currentQuarter}`)
        .then((goals => {
          setTargets(goals.data);
          return goals.data;
        })).catch(err => log.warn(err));
    }
  }, [context, targets.length, currentEmp, currentQuarter]);

  useEffect(() => {
    if (currentEmpRole === "Manager") {
      context && get(`Employee/teammembers/${localStorage.getItem("employeeId")}`)
        .then((team => {
          setCanGrade(
            team.data.filter(emp => emp.personalNumber === parseInt(id)).length > 0,
          );
          return team.data;
        })).catch(err => log.warn(err));
    } else {
      switch (currentEmpRole) {
      case "User":
      case "Director":
        setCanGrade(false);
        break;
      case "HR":
      case "Admin":
        setCanGrade(true);
        break;
      }
    }
  }, [context, currentEmpRole, id]);

  const switchType = (conType) => {
    setContentType(conType);
  };

  const returnToList = () => {
    switchType(TARGET_LIST);
  };

  const showAddTarget = () => {
    switchType(ADD_TARGET);
  };

  const showTargetDetails = (index) => {
    setTargetIndex(index);
    switchType(TARGET_DETAILS);
  };

  const onAccept = () => {
    if (targets.length > 0 && targets[0].goalID === 0) {
      let targetsPostData = [];
      targets.map((target) => {
        targetsPostData.push({
          name: target.name,
          description: target.description,
          importance: parseInt(target.importance),
          quarter: target.quarter,
          measure: target.measure,
        });
      });
      post(`Dto/goals/add/${localStorage.getItem("employeeId")}`, targetsPostData)
        .catch(err => log.warn(err));
    }
    history.push("/dashboard");

  };

  const addTarget = (target) => {
    let tempTargetArray = targets;
    tempTargetArray.push(target);
    setTargets(tempTargetArray);
    returnToList();
  };

  const updateTarget = (target, isUpdatableInDB) => {
    if (target.realisationGrade) {
      target.realisationGrade = parseInt(target.realisationGrade);
    }
    if (isUpdatableInDB) {
      put(`Goal/emp/${target.employeeId}/${target.goalID}`, target)
        .then(() => {
          let tmpTargetArray = targets;
          tmpTargetArray[targetIndex] = target;
          setTargets(tmpTargetArray);
        })
        .catch(err => log.warn(err))
        .then(() => returnToList());
    }
    let tmpTargetArray = targets;
    tmpTargetArray[targetIndex] = target;
    setTargets(tmpTargetArray);
    returnToList();
  };

  return (
    <>
      <Navbar/>
      <Header/>
      <footer/>
      <PageWrapper>
        <ContentWrapper>
          {!isMyTargets && !canGrade ?
            <SubTitle>Cannot add or show targets for another
              employee</SubTitle> :
            !canGrade && !isMyTargets && currentEmpRole === "Manager" ?
              <SubTitle>Cannot grade targets for employees outside your
                team</SubTitle> :
              <>
                <SubTitle>
                  {contentType === ADD_TARGET ?
                    "Add targets" : contentType === TARGET_DETAILS ?
                      "target's details" : "Quarter targets"}
                </SubTitle>
                <div>
                  {(() => {
                    switch (contentType) {
                    case TARGET_LIST:
                      return <TargetList
                        targetList={targets}
                        switchContent={showAddTarget}
                        onAccept={onAccept}
                        onSelect={showTargetDetails}
                      />;
                    case ADD_TARGET:
                      return <AddTarget
                        onCancel={returnToList}
                        onSubmit={addTarget}
                        target={undefined}
                      />;
                    case TARGET_DETAILS:
                      return <AddTarget
                        onCancel={returnToList}
                        onSubmit={updateTarget}
                        target={targets[targetIndex]}
                      />;
                    }
                  })()}
                </div>
              </>}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Targets;
