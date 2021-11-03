import React, { FC } from 'react';
import { Error } from '../../components';
import useError from '../../util/hooks/error';

const ErrorContainer: FC = () => {
  const { state, setState } = useError();

  return <Error {...state} {...setState} />;
};

export default ErrorContainer;
