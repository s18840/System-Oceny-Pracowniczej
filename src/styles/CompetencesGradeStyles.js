import styled from "styled-components";

export const GradeDescWrapper = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 3%;
`
export const CompetentGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0;
`
export const CompetenceGradeContentWrapper = styled.div`
  margin: 2% 0;
  border: 2px solid black;
  border-radius: 5px;
`
export const CompetenceGradeHeaderClosed = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  font-size: 2em;
`
export const CompetenceGradeHeaderOpen = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2%;
`

export const HeaderName = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const HeaderField = styled.div`
  width: 27.5%;
  text-align: center;
`
export const CompetenceGradeContent = styled.div`
  border-top: 2px solid black;
  padding: 2%;
  display:flex;
  justify-content: space-around;
`

export const MarkerGradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 67.5%;
  justify-content: space-evenly;
`

export const MarkerGradeContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const MarkerElement = styled.div`
  width: 40%;
  text-align: center;
`

export const GradeElementWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #ff4e01;
  display: flex;
  justify-content: space-between;
  width: 27.5%;
  height: 1.2rem;
  padding: 5px;
`

export const AcceptButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`
export const CompetenceGradeDetailsHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 3%;
`

export const CompetenceGradeDetailsHeaderContent = styled.div`
  width: 33%;
  text-align: center;
`

export const CompetenceGradeDetailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid black;
  border-radius: 5px;
  margin: 2% 0;
  padding: 3%;
`

export const CompetenceGradeDetailContent = styled.div`
  width: 33%;
  text-align: center;
`
export const CompetenceGradeDetailContentBold = styled(CompetenceGradeDetailContent)`
  font-weight: bold;
`

export const ErrorLabel = styled.div`
  display: flex;
  justify-content: space-around;
  color: red;
  font-size: 3rem;
  font-weight: bold;
`

export const QuarterSelect = styled.select`
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`
