import React from 'react';
import {useForm, useWatch} from 'react-hook-form';
import {
  AcceptButtonWrapper,
  TargetListTitlesWrapper,
  TargetNameTitle,
  TargetsGradeSummaryWrapper,
  TargetsListWrapper,
  TargetTitle,
} from '../../styles/TargetsStyles';
import {GlobalButton, Span, SubTitle} from '../../styles/GlobalStyle';
import GradeTargetSubelement from './GradeTargetSubelement';


function GradeTargets({targetList}) {

  const {
    control,
    register,
    getValues,
    errors,
    setValue,
    watch,
  } = useForm();

  const Calc = () => {
    const results = useWatch({control, name: 'grade'});
    const output = calculateAvg(results);

    console.log(results);

    return <Span>{output}%</Span>;
  };

  const calculateAvg = (results) => {
    let sum = 0;
    for (const key in results) {
      sum += parseInt(results[key]['grade']);
    }

    return (typeof results == 'undefined'
      ? 0 : (sum / results.length));
  };

  const handleSubmit = () => {
    //on accept button press. send to API
  };


  return (
    <>
      <TargetListTitlesWrapper>
        <TargetNameTitle>nazwa celu</TargetNameTitle>
        <TargetTitle>termin realizacji</TargetTitle>
        <TargetTitle>waga realizacji</TargetTitle>
      </TargetListTitlesWrapper>
      <TargetsListWrapper>
        {
          targetList.map((target, index) => (
              <GradeTargetSubelement
                target={target}
                index={index}
                register={register}
              />
            ),
          )
        }
      </TargetsListWrapper>
      <SubTitle>Podsumowanie oceny</SubTitle>
      <TargetsGradeSummaryWrapper>
        <b>Średnia ważona ocen:</b>
        <Calc/>
      </TargetsGradeSummaryWrapper>
      <AcceptButtonWrapper>
        <GlobalButton onClick={handleSubmit}>Accept</GlobalButton>
      </AcceptButtonWrapper>
    </>
  );
}

export default GradeTargets;
