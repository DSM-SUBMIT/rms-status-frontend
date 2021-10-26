import React, { FC } from 'react';
import * as S from './style';
import { openSite } from '../../assets/header';

interface Props {
  isWorking: string;
}

const StatusBar: FC<Props> = props => {
  const { isWorking } = props;
  return (
    <div>
      <S.StatusBar isWorking={isWorking}>
        <p>모든 서비스가 정상적으로 작동중</p>
        <div>
          <p>오류 제보하기</p>
          <img src={openSite} alt='open_modal' />
        </div>
      </S.StatusBar>
    </div>
  );
};

export default StatusBar;
