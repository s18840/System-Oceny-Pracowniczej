import React from "react";
import {
  AcceptButtonWrapper,
  AddTargetContainer,
  PlusIcon,
  TargetContainer,
  TargetDate,
  TargetImportance,
  TargetListTitlesWrapper,
  TargetName,
  TargetNameTitle,
  TargetsListWrapper,
  TargetTitle,
} from "../../styles/TargetsStyles";
import {GlobalButton} from "../../styles/GlobalStyle";

let maxTargetAmount = 3;

function TargetList({targetList, switchContent, onAccept, onSelect}) {

  if(targetList.length > 0 && targetList[0].goalID !== 0){
    maxTargetAmount = targetList.length
  }

  let addTargetElements = [];

  (() => {
    for (let i = 0; i < maxTargetAmount - targetList.length; i++) {
      addTargetElements.push(<AddTargetContainer onClick={switchContent}>
        <PlusIcon/>
      </AddTargetContainer>);
    }
  })();

  return (
    <>
      <TargetListTitlesWrapper>
        <TargetNameTitle>Name</TargetNameTitle>
        <TargetTitle>Quarter</TargetTitle>
        <TargetTitle>Importance</TargetTitle>
      </TargetListTitlesWrapper>
      <TargetsListWrapper>
        {
          targetList.map((target, index) => (
            <TargetContainer onClick={(() => onSelect(index))}>
              <TargetName>{target.name}</TargetName>
              <TargetDate>{target.quarter}</TargetDate>
              <TargetImportance>{target.importance}</TargetImportance>
            </TargetContainer>
          ),
          )
        }
        {addTargetElements}
      </TargetsListWrapper>
      <AcceptButtonWrapper>
        <GlobalButton onClick={onAccept}>Accept</GlobalButton>
      </AcceptButtonWrapper>
    </>
  );
}

export default TargetList;
