import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from '../../components/Main';
import { GET_STATUS } from '../../modules/redux/action/main/interface';
import useMain from '../../util/hooks/main';

const MainContainer: FC = () => {
  const { state, setState } = useMain();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_STATUS });
  }, []);

  return <Main {...state} {...setState} />;
};

export default MainContainer;
