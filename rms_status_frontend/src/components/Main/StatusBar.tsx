import React, { FC, useMemo } from 'react';
import * as S from './style';
import { openSite } from '../../assets/header';
import { useHistory } from 'react-router-dom';

interface Props {
  status: string;
}

const StatusBar: FC<Props> = props => {
  const { status } = props;
  const history = useHistory();

  const title = useMemo(() => {
    if (status === 'green') return <p>모든 서비스가 정상적으로 작동중</p>;
    else if (status === 'yellow') return <p>일부 서비스가 제대로 동작하지 않을 수 있음</p>;
    else return <p>일부 서비스를 이용할 수 없음</p>;
  }, [status]);

  const reportClickHandler = () => {
    history.push('/report');
  };

  return (
    <div>
      <S.StatusBar status={status}>
        {title}
        <div>
          <p onClick={reportClickHandler}>오류 제보하기</p>
          <img src={openSite} alt='open_modal' onClick={reportClickHandler} />
        </div>
      </S.StatusBar>
    </div>
  );
};

export default StatusBar;
