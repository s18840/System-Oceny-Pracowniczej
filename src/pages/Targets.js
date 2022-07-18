import React, {useContext, useEffect, useState} from 'react';
import AddTarget from '../components/Targets/AddTarget';
import Navbar from '../components/Navigation/NavBar';
import Header from '../components/Header/Header';
import {ContentWrapper, PageWrapper, SubTitle} from '../styles/GlobalStyle';
import TargetList from '../components/Targets/TargetList';
import axios from 'axios';
import {Context} from './Context';
import {useHistory} from 'react-router-dom';

function Targets() {
  // TODO: error handling
  let history = useHistory();

  const TARGET_LIST = 'TARGET_LIST';
  const ADD_TARGET = 'ADD_TARGET';
  const TARGET_DETAILS = 'TARGET_DETAILS';

  const [context] = useContext(Context);

  const [contentType, setContentType] = useState(TARGET_LIST);
  const [targetIndex, setTargetIndex] = useState();
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    if (targets.length === 0) {
      context && axios.get(
        `https://localhost:5001/api/Goal/emp/${localStorage.getItem('employeeId')}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((goals => {
          console.log(goals);
          setTargets(goals.data);
        })).catch(err => {
          console.log('GET emp goals err', err);
        });
    }
  }, [context]);

  const switchType = (conType) => {
    setContentType(conType);
    console.log('state change to: ' + conType);
  };

  const returnToList = () => {
    switchType(TARGET_LIST);
  };

  const showAddTarget = () => {
    switchType(ADD_TARGET);
  };

  const showTargetDetails = (index) => {
    setTargetIndex(index);
    switchType(TARGET_DETAILS);
  };

  const onAccept = () => {
    if (targets.length > 0 && targets[0].goalID === 0) {
      let targetsPostData = [];
      targets.map((target) => {
        targetsPostData.push({
          name: target.name,
          description: target.description,
          importance: parseFloat(target.importance),
          quarter: target.quarter,
          measure: target.measure,
        });
      });
      console.log(JSON.stringify(targetsPostData));
      axios.post(
        `https://localhost:5001/api/Dto/goals/add/${localStorage.getItem('employeeId')}`,
        targetsPostData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            contentType: `application/json`,
          },
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log('GET emp goals err', err));
    }
    history.push('/dashboard');

  };

  const addTarget = (target) => {
    console.log(target);
    let tempTargetArray = targets;
    tempTargetArray.push(target);
    setTargets(tempTargetArray);
    console.log(targets);
    returnToList();
  };

  const updateTarget = (target, isUpdatableInDB) => {
    console.log(target);
    if (isUpdatableInDB) {
      axios.put(
        `https://localhost:5001/api/Goal/emp/${localStorage.getItem('employeeId')}/${target.goalID}`,
        target,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            contentType: `application/json`,
          },
        },
      ).then(res => {
        console.log(res);
        let tmpTargetArray = targets;
        tmpTargetArray[targetIndex] = target;
        setTargets(tmpTargetArray);
      })
        .catch(err => console.log('PUT emp goal err', err))
        .then(() => returnToList());
    }
    returnToList();
  };

  return (
    <>
      <Navbar/>
      <Header/>
      <footer/>
      <PageWrapper>
        <ContentWrapper>
          <SubTitle>
            {contentType === ADD_TARGET ?
              'Dodawanie celu' : contentType === TARGET_DETAILS ?
                'Szczegóły celu' : 'Cele kwartalne'}
          </SubTitle>
          <div>
            {(() => {
              switch (contentType) {
                case TARGET_LIST:
                  return <TargetList
                    targetList={targets}
                    switchContent={showAddTarget}
                    onAccept={onAccept}
                    onSelect={showTargetDetails}
                  />;
                case ADD_TARGET:
                  return <AddTarget
                    onCancel={returnToList}
                    onSubmit={addTarget}
                    target={undefined}
                  />;
                case TARGET_DETAILS:
                  return <AddTarget
                    onCancel={returnToList}
                    onSubmit={updateTarget}
                    target={targets[targetIndex]}
                  />;
              }
            })()}
          </div>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Targets;
