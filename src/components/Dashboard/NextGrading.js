import React, {useCallback, useState} from "react";
import {NextGradingWrapper} from "../../styles/DashboardStyles";
import {HighlightText} from "../../styles/GlobalStyle";
import unknownGrade from "../../assets/img/Grade_unknown_small.png"
import getCurrentQuarter from "../../Utils/QuarterUtils";

function NextGrading(){

  const currentQuarter = getCurrentQuarter()

  const calcDaysLeft = useCallback(() =>{
    const now = Date.now()
    let difference = currentQuarter.end - now
    return Math.round(difference / (1000 * 60 * 60 * 24))
  }, [currentQuarter])


  return (
    <>
      <NextGradingWrapper>
        <div>
          Quarter {currentQuarter.label} ends in: <br/> <HighlightText fontSize="105px">{calcDaysLeft()} Days</HighlightText>
        </div>
        <img src={unknownGrade} alt=""/>
      </NextGradingWrapper>
    </>
  );

}

export default NextGrading;
