import React from "react";
import {
  TargetListContentWrapper,
  TargetListElement,
  TargetListHeader,
  TargetListWrapper
} from "../../styles/DashboardStyles"

const dataJson =
  {
    "titles":
      [
        "name",
        "weight",
        "completion"
      ],
    "content":
      [
        {
          "name": "nazwa1",
          "weight": "weight1",
          "completion": 71
        },
        {
          "name": "nazwa2",
          "weight": "weight2",
          "completion": 72
        },
        {
          "name": "nazwa3",
          "weight": "weight3",
          "completion": 73
        }
      ]
  }


function TargetList() {

  return (
    <>
      <TargetListWrapper>
        <TargetListHeader>
          {dataJson.titles.map(title => (
            <a>{title}</a>
          ))
          }
        </TargetListHeader>
        <TargetListContentWrapper>
        {dataJson.content.map(target => (
          <TargetListElement>
            <a>{target.name}</a>
            <a>{target.weight}</a>
            <a>{target.completion}</a>
          </TargetListElement>
        ))}
        </TargetListContentWrapper>
      </TargetListWrapper>
    </>
  );
}


export default TargetList