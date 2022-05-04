import React from 'react';
import {
  ActionButton,
  TargetForm,
  TargetInputField,
  TargetTextField,
} from '../../styles/TargetsStyles';
import {
  GlobalButton,
  InputField,
  InputWrapper,
  Span,
} from '../../styles/GlobalStyle';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

const AddTarget = ({onAdd, onCancel}) => {
  const {t} = useTranslation();
  const {register, handleSubmit, formState: {errors}} = useForm();
  let today = Date.now()
  const submitForm = (data) => {
    onAdd(data);
  };

  return (
    <>
      <TargetForm onSubmit={handleSubmit(submitForm)}>
        <InputWrapper width="40%">
          <Span>Nazwa Celu</Span>
          <TargetInputField
            {...register('name', ({required: true}))}
          />
          {errors.name && errors.name.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Data ukończenia</Span>
          <TargetInputField
            type="date"
            {...register('endDate', {
              validate: (date) =>
                Date.parse(date) > today
            })}
          />
          {errors.endDate &&
            <Span>data musi być w przyszłości</Span>}
        </InputWrapper>
        <InputWrapper width="100%">
          <Span>Opis zadania</Span>
          <TargetTextField
            {...register('description', ({required: true}))}
          />
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Miernik realizacji celu</Span>
          <TargetTextField
            {...register('endRequirements', ({required: true}))}
          />
          {errors.endRequirements && errors.endRequirements.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Waga celu</Span>
          <TargetInputField
            type="number"
            {...register('importance', ({required: true, min: 0, max: 100}))}
          />
          {errors.importance && errors.importance.type === 'required' &&
            <Span>{t('REQUIRED')}</Span>}
          {errors.importance && (errors.importance.type === 'min' || 'max') &&
            <Span>wartość pomiędzy 0-100</Span>}
        </InputWrapper>
        <GlobalButton onClick={onCancel}>Cancel</GlobalButton>
        <ActionButton type="submit" value="Add"/>
      </TargetForm>
    </>
  );
};

export default AddTarget;
