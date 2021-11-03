import React, { FC } from 'react';
import { Report } from '../../components';
import useReport from '../../util/hooks/report';

const ReportContainer: FC = () => {
  const { state, setState } = useReport();

  return <Report {...state} {...setState} />;
};

export default ReportContainer;
