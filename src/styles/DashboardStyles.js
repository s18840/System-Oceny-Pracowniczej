import styled from "styled-components";


export const DashboardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 100px 80px;
`

export const DashboardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const NextGradingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  border: 3px solid #707070;
  border-radius: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  align-items: center;
  color: #3D098A;
`

export const TargetListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 90%;
  
`

export const TargetListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-left: 50px;
`

export const TargetListContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  border: 3px solid #707070;
  border-radius: 20px;
  text-align: center;
`

export const TargetListElement = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #707070;
  border-radius: 20px;
  padding: 30px;
`

export const ClockWrapper = styled.div`
  position: fixed;
  right: 30px;
  width: 500px;
  height: 500px;
  border: 10px solid #3D098A;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const TimeView = styled.a`
  font-size: 120px;
`

export const DateView = styled.a`
  font-size: 40px;
`
