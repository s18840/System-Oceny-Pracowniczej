import React from 'react'
import {
  AcceptButtonWrapper,
  TargetListTitlesWrapper,
  TargetNameTitle, TargetsGradeSummaryWrapper,
  TargetsListWrapper,
  TargetTitle
} from "../../styles/TargetsStyles";
import {GlobalButton, SubTitle} from "../../styles/GlobalStyle";
import GradeTargetSubelement from "./GradeTargetSubelement";


function GradeTargets({targetList}) {

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
              <GradeTargetSubelement target={target}/>
            )
          )
        }
      </TargetsListWrapper>
      <SubTitle>Podsumowanie oceny</SubTitle>
      <TargetsGradeSummaryWrapper>

      </TargetsGradeSummaryWrapper>
      <AcceptButtonWrapper>
        <GlobalButton>Accept</GlobalButton>
      </AcceptButtonWrapper>
    </>
  )
}

export default GradeTargets