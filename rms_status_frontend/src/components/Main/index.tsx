import React, { FC, useMemo } from 'react';
import * as S from './style';
import Header from '../Header';
import StatusBar from './StatusBar';
import Status from './Status';
import ErrorNotice from './Status/ErrorNotice';
import { apiAndSiteObjectType, currentOutageArrayType } from '../../models/response/mainResponse';

interface Props {
  status: string;
  currentOutage: Array<currentOutageArrayType>;
  apis: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
    file: apiAndSiteObjectType;
  };
  sites: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
  };
}

const Main: FC<Props> = props => {
  const { status, currentOutage, apis, sites } = props;

  const errorNotice = useMemo(() => {
    if (currentOutage.length !== 0)
      return currentOutage.map((data, i) => {
        return <ErrorNotice currentOutage={data} key={i} />;
      });
    else return;
  }, [currentOutage]);

  return (
    <>
      <Header />
      <S.Main>
        <StatusBar status={status} />
        {errorNotice}
        <Status apiOrSite={'api'} apis={apis} />
        <Status apiOrSite={'site'} sites={sites} />
      </S.Main>
    </>
  );
};

export default Main;
