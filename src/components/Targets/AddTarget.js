import React, {useState} from 'react';
import {
  ActionButton,
  TargetForm,
  TargetInputField,
  TargetTextField,
} from '../../styles/TargetsStyles';
import {GlobalButton, InputWrapper, Span} from '../../styles/GlobalStyle';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import getCurrentQuarter from '../../Utils/QuarterUtils';

const currentQuarter = getCurrentQuarter().label;

const AddTarget = ({onSubmit, onCancel, target}) => {
  const {t} = useTranslation();
  const {register, handleSubmit, setValue, formState: {errors}} = useForm(
    {
      mode: 'onChange',
    });

  const isUpdatable = typeof target !== 'undefined';
  const isUpdatableInDB = isUpdatable && target.hasOwnProperty('goalID') && target.goalID !== 0;

  const [edit, setEdit] = useState(false);

  const submitForm = (data) => {
    if (isUpdatable) {
      onSubmit(data, isUpdatableInDB);
    }
    onSubmit(data);
  };

  if (isUpdatable) {
    setValue('name', target.name);
    setValue('description', target.description);
    setValue('quarter', target.quarter);
    setValue('measure', target.measure);
    setValue('importance', target.importance);
    setValue('realisationGrade', target.realisationGrade);
    setValue('gradeComment', target.gradeComment);
    setValue('goalID', target.goalID);
    setValue('employeeId', target.employeeId)
  } else {
    setValue('quarter', currentQuarter);
    setValue('goalID', 0)
    //might be changed
    setValue('employeeId', localStorage.getItem('employeeId'))
  }

  console.log(target);
  return (
    <>
      <TargetForm onSubmit={handleSubmit(submitForm)}>
        <input
          hidden
          type="number"
          {...register('goalID')}
        />
        <input
          hidden
          type="number"
          {...register('employeeId')}
        />
        <InputWrapper width="40%">
          <Span>Nazwa Celu</Span>
          <TargetInputField
            {...register('name', ({required: true}))}
            disabled={isUpdatable && !edit}
          />
          {errors.name && errors.name.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Kwartał</Span>
          <TargetInputField
            disabled={isUpdatable && !edit}
            readonly
            {...register('quarter')}
          />
        </InputWrapper>
        <InputWrapper width="100%">
          <Span>Opis zadania</Span>
          <TargetTextField
            {...register('description', ({required: true}))}
            disabled={isUpdatable && !edit}
          />
          {errors.description && errors.description.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Miernik realizacji celu</Span>
          <TargetTextField
            {...register('measure', ({required: true}))}
            disabled={isUpdatable && !edit}
          />
          {errors.measure && errors.measure.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Waga celu</Span>
          <TargetInputField
            type="number"
            {...register('importance', ({required: true, min: 0, max: 10}))}
            disabled={isUpdatable && !edit}
          />
          {errors.importance && errors.importance.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
          {errors.importance && (errors.importance.type === 'min' || 'max') &&
            <Span>wartość pomiędzy 0-10</Span>}
        </InputWrapper>
        {isUpdatable ?
          <>
            <InputWrapper width="40%">
              <Span>Ocena realizacji celu (%)</Span>
              <TargetInputField
                type={'number'}
                {...register('realisationGrade', ({
                  min: 0,
                  max: 100,
                }))}
                disabled={isUpdatable && !edit}
              />
            </InputWrapper>
            <InputWrapper width="40%">
              <Span>Komentarz do oceny</Span>
              <TargetInputField
                {...register('gradeComment')}
                disabled={isUpdatable && !edit}
              />
            </InputWrapper>
          </>
          :
          <>
            <input
              hidden
              {...register('realisationGrade')}
              value={''}
            />
            <input
              hidden
              {...register('gradeComment')}
              value={''}
            />
          </>
        }
        <GlobalButton onClick={onCancel}>Cancel</GlobalButton>
        {isUpdatable && !edit ?
          <GlobalButton
            onClick={() => setEdit(prev => !prev)}>Edit</GlobalButton> : <></>
        }
        {!isUpdatable || edit ?
          <ActionButton type="submit"
                        value={isUpdatable ? 'Update' : 'Add'}/> : <></>
        }
      </TargetForm>
    </>
  );
};

export default AddTarget;
