import React, {useState} from "react";
import {
  ActionButton,
  TargetForm,
  TargetInputField,
  TargetTextField,
} from "../../styles/TargetsStyles";
import {GlobalButton, InputWrapper, Span} from "../../styles/GlobalStyle";
import {useForm} from "react-hook-form";
import getCurrentQuarter from "../../Utils/QuarterUtils";
import {useParams} from "react-router-dom";

const currentQuarter = getCurrentQuarter().label;

const AddTarget = ({onSubmit, onCancel, target}) => {
  const {register, handleSubmit, setValue, formState: {errors}} = useForm();

  const {id} = useParams()
  const isUpdatable = typeof target !== "undefined";
  const isUpdatableInDB = isUpdatable && target.goalID && target.goalID !== 0;
  const isMyTargets = !(id && id != localStorage.getItem("employeeId"));
  const isGraded = isUpdatableInDB && target.realisationGrade

  const [edit, setEdit] = useState(false);

  const submitForm = (data) => {
    if (isUpdatable) {
      onSubmit(data, isUpdatableInDB);
    }
    onSubmit(data);
  };

  if (isUpdatable) {
    setValue("name", target.name);
    setValue("description", target.description);
    setValue("quarter", target.quarter);
    setValue("measure", target.measure);
    setValue("importance", target.importance);
    setValue("realisationGrade", target.realisationGrade);
    setValue("gradeComment", target.gradeComment);
    setValue("goalID", target.goalID);
    setValue("employeeId", target.employeeId)
  } else {
    setValue("quarter", currentQuarter);
    setValue("goalID", 0)
    setValue("employeeId", localStorage.getItem("employeeId"))
  }

  return (
    <>
      <TargetForm onSubmit={handleSubmit(submitForm)}>
        <input
          hidden
          type="number"
          {...register("goalID")}
        />
        <input
          hidden
          type="number"
          {...register("employeeId")}
        />
        <InputWrapper width="40%">
          <Span>Name</Span>
          <TargetInputField
            {...register("name", ({required: true}))}
            disabled={(isUpdatable && !edit) || !isMyTargets}
          />
          {errors.name && errors.name.type === "required" &&
            <Span>Required</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Quarter</Span>
          <TargetInputField
            disabled={(isUpdatable && !edit) || !isMyTargets}
            readonly
            {...register("quarter")}
          />
        </InputWrapper>
        <InputWrapper width="100%">
          <Span>Description</Span>
          <TargetTextField
            {...register("description", ({required: true}))}
            disabled={(isUpdatable && !edit) || !isMyTargets}
          />
          {errors.description && errors.description.type === "required" &&
            <Span>Required</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Completion measurement</Span>
          <TargetTextField
            {...register("measure", ({required: true}))}
            disabled={(isUpdatable && !edit) || !isMyTargets}
          />
          {errors.measure && errors.measure.type === "required" &&
            <Span>Required</Span>}
        </InputWrapper>
        <InputWrapper width="40%">
          <Span>Importance</Span>
          <TargetInputField
            type="number"
            {...register("importance", ({required: true, min: 0, max: 10}))}
            disabled={(isUpdatable && !edit) || !isMyTargets}
          />
          {errors.importance && errors.importance.type === "required" &&
            <Span>Required</Span>}
          {errors.importance && (errors.importance.type === "min" || "max") &&
            <Span>wartość pomiędzy 0-10</Span>}
        </InputWrapper>
        {isUpdatable && !isMyTargets ?
          <>
            <InputWrapper width="40%">
              <Span>Realisation Grade (%)</Span>
              <TargetInputField
                type="number"
                {...register("realisationGrade", ({
                  min: 0,
                  max: 100,
                }))}
                disabled={(isUpdatable && !edit)}
              />
            </InputWrapper>
            <InputWrapper width="40%">
              <Span>Comment</Span>
              <TargetInputField
                {...register("gradeComment")}
                disabled={(isUpdatable && !edit)}
              />
            </InputWrapper>
          </>
          :
          <>
            <input
              hidden
              type="number"
              {...register("realisationGrade")}
              value=""
            />
            <input
              hidden
              {...register("gradeComment")}
              value=""
            />
          </>}
        <GlobalButton onClick={onCancel}>Cancel</GlobalButton>
        {isUpdatable && !edit && !isGraded ?
          <GlobalButton
            onClick={() => setEdit(prev => !prev)}>Edit</GlobalButton> : <></>}
        {!isUpdatable || edit ?
          <ActionButton type="submit"
            value={isUpdatable ? "Update" : "Add"}/> : <></>}
      </TargetForm>
    </>
  );
};

export default AddTarget;
