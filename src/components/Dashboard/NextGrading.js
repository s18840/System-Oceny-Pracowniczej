import React from "react";
import {NextGradingWrapper} from "../../styles/DashboardStyles";
import {HighlightText} from "../../styles/GlobalStyle";
import unknownGrade from "../../assets/img/Grade_unknown_small.png"

function NextGrading(){

  let daysLeft = 7

  return (
    <>
      <NextGradingWrapper>
        <a>
          Days to grading: <br/> <HighlightText fontSize={"118px"}>{daysLeft}</HighlightText>
        </a>
        <img src={unknownGrade} alt={""}/>
      </NextGradingWrapper>
    </>
  );

}

export default NextGrading;