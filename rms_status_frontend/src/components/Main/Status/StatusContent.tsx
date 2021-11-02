import React, { FC, useMemo } from 'react';
import { apiAndSiteObjectType } from '../../../models/response/mainResponse';
import * as S from '../style';

interface Props {
  statusTitle: string;
  statusObject: apiAndSiteObjectType | undefined;
}

const StatusContent: FC<Props> = props => {
  const { statusTitle, statusObject } = props;

  const setColor = (status: string | undefined) => {
    if (status === 'green') return 'green';
    else if (status === 'yellow') return 'yellow';
    else return 'red';
  };

  return (
    <S.StatusContent>
      <S.TitleAndStatus>
        <S.StatusTitle>{statusTitle}</S.StatusTitle>
        <S.StatusText color={setColor(statusObject?.status)}>
          {statusObject?.status === 'green'
            ? '정상 작동'
            : statusObject?.status === 'yellow'
            ? '부분적 장애'
            : '서비스 불능'}
        </S.StatusText>
      </S.TitleAndStatus>
      <S.BoxLine>
        {statusObject?.recent.map((data, i) => {
          return <S.Box color={data.status} key={i} />;
        })}
      </S.BoxLine>
    </S.StatusContent>
  );
};

export default StatusContent;
