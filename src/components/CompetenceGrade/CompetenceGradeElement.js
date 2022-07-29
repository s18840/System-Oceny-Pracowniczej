import React, {useCallback, useState} from "react";
import * as MDIcons from "react-icons/md";
import {
  CompetenceGradeContent,
  CompetenceGradeContentWrapper,
  CompetenceGradeHeaderClosed,
  CompetenceGradeHeaderOpen,
  GradeElementWrapper,
  HeaderField,
  HeaderName,
  MarkerElement, MarkerGradeContent,
  MarkerGradeWrapper,
} from "../../styles/CompetencesGradeStyles";
import {TextField} from "../../styles/GlobalStyle";

function CompetenceGradeElement({competence, index, register}) {

  const gradeValues = [1, 2, 3, 4, 5];
  const markers = competence.markers;

  const [gradeSub, setGradeSub] = useState(false);
  const toggleGradeSub = () => setGradeSub(!gradeSub);

  const iconClosed = <MDIcons.MdKeyboardArrowDown/>;
  const iconOpened = <MDIcons.MdKeyboardArrowUp/>;

  const RadioInput = useCallback(({markerIndex, value}) => {
    return (
      <label>
        <input
          type="radio"
          {...register(`compGrade.${index}.values.${markerIndex}`)}
          value={value}
        />
        {value}
      </label>
    );
  }, [index, register])

  return (
    <>
      <CompetenceGradeContentWrapper>
        {!gradeSub ? (
          <CompetenceGradeHeaderClosed onClick={toggleGradeSub}>
            <b>{competence.name}</b>
            {iconClosed}
          </CompetenceGradeHeaderClosed>
        ) : (
          <>
            <CompetenceGradeHeaderOpen onClick={toggleGradeSub}>
              <HeaderName>
                <b>{competence.name}</b>
                <>{competence.description}</>
              </HeaderName>
              <HeaderField>Ocena</HeaderField>
              <HeaderField>Komentarz</HeaderField>
              {iconOpened}
            </CompetenceGradeHeaderOpen>
            <CompetenceGradeContent>
              <MarkerGradeWrapper>
                {markers.map((value, index) => (
                  <MarkerGradeContent key={value.name}>
                    <MarkerElement>
                      {value.name + "\n" + value.description}
                    </MarkerElement>
                    <GradeElementWrapper>
                      {
                        gradeValues.map(value => (
                          <RadioInput
                            key={value}
                            markerIndex={index}
                            value={value}
                          />
                        ))
                      }
                    </GradeElementWrapper>
                  </MarkerGradeContent>
                ))}
              </MarkerGradeWrapper>
              <TextField
                {...register(`compGrade.${index}.comment`, ({required: true}))}
                width="27.5%"/>
              <input
                hidden
                {...register(`compGrade.${index}.competenceId`)}
                value={competence.competenceId}
              />
            </CompetenceGradeContent>
          </>
        )}
      </CompetenceGradeContentWrapper>
    </>
  );
}

export default CompetenceGradeElement;
