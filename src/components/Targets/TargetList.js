import React from 'react';
import {
  AcceptButtonWrapper,
  AddTargetContainer,
  PlusIcon,
  TargetContainer,
  TargetDate, TargetImportance, TargetListTitlesWrapper,
  TargetName, TargetNameTitle,
  TargetsListWrapper, TargetTitle,
} from '../../styles/TargetsStyles';
import {GlobalButton} from '../../styles/GlobalStyle';

const MAX_TARGET_NUMBER = 3;

function TargetList({targetList, switchContent, onAccept}) {
  console.log(targetList);
  let addTargetElements = [];

  (() => {
    for (let i = 0; i < MAX_TARGET_NUMBER - targetList.length; i++) {
      addTargetElements.push(<AddTargetContainer onClick={switchContent}>
        <PlusIcon/>
      </AddTargetContainer>);
    }
  })();

  return (
    <>
      <TargetListTitlesWrapper>
        <TargetNameTitle>nazwa celu</TargetNameTitle>
        <TargetTitle>termin realizacji</TargetTitle>
        <TargetTitle>waga realizacji</TargetTitle>
      </TargetListTitlesWrapper>
      <TargetsListWrapper>
        {
          targetList.map(target => (
              <TargetContainer>
                <TargetName>{target.name}</TargetName>
                <TargetDate>{target.endDate}</TargetDate>
                <TargetImportance>{target.importance}%</TargetImportance>
              </TargetContainer>
            ),
          )
        }
        {addTargetElements}
      </TargetsListWrapper>
      <AcceptButtonWrapper>
        <GlobalButton onClick={onAccept}> Accept</GlobalButton>
      </AcceptButtonWrapper>
    </>
  );
}

export default TargetList;
