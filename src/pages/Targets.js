import React, {useState} from 'react';
import AddTarget from "../components/Targets/AddTarget";
import Navbar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import {PageWrapper, SubTitle, Title} from "../styles/GlobalStyle";
import GradeTargets from "../components/Targets/GradeTargets";
import TargetList from "../components/Targets/TargetList";


function Targets() {

  const TARGET_LIST = "TARGET_LIST"
  const ADD_TARGET = "ADD_TARGET"
  const GRADE_TARGETS = "GRADE_TARGETS"

  const [contentType, setContentType] = useState(TARGET_LIST)
  const [targets, setTargets] = useState([])

  const switchType = (conType) => {
    setContentType(conType)
    console.log("state change to: " + conType)
  }

  const returnToList = () => {
    switchType(TARGET_LIST)
  }

  const showAddTarget = () => {
    switchType(ADD_TARGET)
  }

  const showGradeTargets = () => {
    switchType(GRADE_TARGETS)
  }

  const addTarget = (target) => {
    console.log(target)
    let tempTargetArray = targets
    tempTargetArray.push(target)
    setTargets(tempTargetArray)
    console.log(targets)
    returnToList()
  }

  //pobieranie targets z api i sprawdzanie czy jakies sa

  return (
    <>
      <Navbar/>
      <Header/>
      <PageWrapper>
        <SubTitle>{contentType === ADD_TARGET ? "Dodawanie celu" : "Cele kwartalne"}</SubTitle>
        <div>
         {(() => {
           switch (contentType) {
             case TARGET_LIST: return <TargetList
               targetList={targets}
               switchContent={showAddTarget}
               onAccept={showGradeTargets}
             />;
             case ADD_TARGET: return <AddTarget
               onCancel={returnToList}
               onAdd={addTarget}
             />;
             case GRADE_TARGETS:  return <GradeTargets
               targetList={targets}
             />;
           }
         })()}
        </div>
      </PageWrapper>
    </>
  )
}

export default Targets