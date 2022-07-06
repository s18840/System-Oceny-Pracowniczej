import React, {useState} from 'react';
import * as MDIcons from 'react-icons/md';
import {
  GradeDetails,
  GradeDetailsContent,
  GradeDetailsWrapper,
  GradeForm,
  GradeTargetContainer,
  GradeTargetElement,
  TargetDate,
  TargetGrade,
  TargetGradeComment,
  TargetImportance,
  TargetInputField,
  TargetName,
  TargetTextField,
} from '../../styles/TargetsStyles';

function GradeTargetSubelement({target, index, register}) {

  const iconClosed = <MDIcons.MdKeyboardArrowDown/>;
  const iconOpened = <MDIcons.MdKeyboardArrowUp/>;

  const [subelement, setSubelement] = useState(false);
  const toggleSubelement = () => setSubelement(!subelement);

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
          <GradeDetailsWrapper>
            <GradeDetails>
              <div>
                <b>Opis celu</b>
                <GradeDetailsContent>
                  {target.description}
                </GradeDetailsContent>
              </div>
              <div>
                <b>Miernik realizacji celu</b>
                <GradeDetailsContent>
                  {target.endRequirements}
                </GradeDetailsContent>
              </div>
            </GradeDetails>
            <GradeForm>
              <TargetGrade>
                <b>Ocena realizacji celu</b>
                <TargetInputField
                  {...register(`grade.${index}.grade`)}
                />
              </TargetGrade>
              <TargetGradeComment>
                <b>Komentarz do oceny</b>
                <TargetTextField
                  {...register(`grade.${index}.comment`)}
                />
              </TargetGradeComment>
            </GradeForm>
          </GradeDetailsWrapper>
        ) : <></>
        }

      </GradeTargetElement>
    </>
  );
}

export default GradeTargetSubelement;
