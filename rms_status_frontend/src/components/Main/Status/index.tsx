import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { help } from '../../../assets/header';
import StatusContent from './StatusContent';
import { apiAndSiteObjectType } from '../../../models/response/mainResponse';

interface Props {
  apiOrSite: string;
  apis?: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
    file: apiAndSiteObjectType;
  };
  sites?: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
  };
}

const Status: FC<Props> = props => {
  const { apiOrSite, apis, sites } = props;
  const [apiArray, setApiArray] = useState<Array<string>>([]);
  const [siteArray, setSiteArray] = useState<Array<string>>([]);

  useEffect(() => {
    if (apiOrSite === 'api') setApiArray(['User API', 'Admin API', 'File API']);
    else if (apiOrSite === 'site') setSiteArray(['User Sites', 'Admin Sites']);
  }, [apiOrSite]);

  const statusContent = useMemo(() => {
    if (apiOrSite === 'api') {
      return (
        <>
          <StatusContent statusTitle={apiArray[1]} statusObject={apis?.admin} />
          <StatusContent statusTitle={apiArray[2]} statusObject={apis?.file} />
        </>
      );
    } else if (apiOrSite === 'site') {
      return <StatusContent statusTitle={siteArray[1]} statusObject={sites?.admin} />;
    }
  }, [apiOrSite, apis, sites, apiArray, siteArray]);

  return (
    <S.Status count={apiOrSite}>
      <div>
        <S.ApiTitle>
          <div>
            <p>{apiOrSite === 'api' ? 'APIs' : 'Sites'}</p>
            <img src={help} alt='help' />
          </div>
          <p>최근 30일간의 작동 현황</p>
        </S.ApiTitle>
        <StatusContent
          statusTitle={apiOrSite === 'api' ? apiArray[0] : siteArray[0]}
          statusObject={apiOrSite === 'api' ? apis?.user : sites?.user}
        />
      </div>
      {statusContent}
    </S.Status>
  );
};

export default Status;
