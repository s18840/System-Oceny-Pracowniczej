import React, {useState} from "react";
import * as MDIcons from "react-icons/md";
import {
  GradeDetails,
  GradeTargetContainer,
  GradeTargetElement,
  TargetDate,
  TargetImportance,
  TargetName
} from "../../styles/TargetsStyles";

function GradeTargetSubelement({target}) {

  const iconClosed = <MDIcons.MdKeyboardArrowDown/>
  const iconOpened = <MDIcons.MdKeyboardArrowUp/>

  const [subelement, setSubelement] = useState(false)
  const toggleSubelement = () => setSubelement(!subelement)

  return (
    <>
      <GradeTargetElement>
        <GradeTargetContainer onClick={toggleSubelement}>
          <TargetName>{target.name}</TargetName>
          <TargetDate>{target.endDate}</TargetDate>
          <TargetImportance>{target.importance}%</TargetImportance>
          {subelement ? iconOpened : iconClosed}
        </GradeTargetContainer>
        {subelement ? (
          <GradeDetails>
            ...
          </GradeDetails>
        ) : <></>
        }

      </GradeTargetElement>
    </>
  )
}

export default GradeTargetSubelement;