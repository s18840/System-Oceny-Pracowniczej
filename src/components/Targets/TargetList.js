import React from 'react';
import {
  AddTargetContainer,
  PlusIcon,
  TargetContainer,
  TargetsListWrapper,
} from '../../styles/TargetsStyles';
import {GlobalButton} from '../../styles/GlobalStyle';

const MAX_TARGET_NUMBER = 3;

function TargetList({targetList, switchContent}) {
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
      <TargetsListWrapper>
        {
          targetList.map(target => (
              <TargetContainer>
                <span>{target.name}</span>
                <span>{target.endDate}</span>
                <span>{target.importance}</span>
              </TargetContainer>
            ),
          )
        }
        {addTargetElements}
      </TargetsListWrapper>
      <GlobalButton>Accept</GlobalButton>
    </>
  );
}

export default TargetList;
