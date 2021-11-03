import React, { FC, useMemo } from 'react';
import { errorContentArrayType } from '../../models/response/errorResponse';
import Header from '../Header';
import ErrorContent from './ErrorContent';
import * as S from './style';

interface Props {
  year: string;
  month: string;
  errorContent: Array<errorContentArrayType>;
  setYear: (payload: string) => void;
  setMonth: (payload: string) => void;
}

const Error: FC<Props> = props => {
  const { year, month, errorContent, setYear, setMonth } = props;
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date: Array<string> = event.currentTarget.value.split('-');
    setYear(date[0]);
    setMonth(date[1]);
  };

  const error = useMemo(() => {
    if (errorContent.length !== 0)
      return errorContent.map(data => {
        return <ErrorContent {...data} />;
      });
    else {
      if (year !== '0000' && month !== '00')
        return <S.NoContent>해당 기간에 발생한 서비스 장애가 없습니다.</S.NoContent>;
    }
  }, [errorContent]);

  return (
    <>
      <Header />
      <S.Error>
        <S.ErrorTitle>
          <p>발생했던 서비스 장애 기록</p>
          <S.SearchDate>
            <p>기간 :</p>
            <input type='month' onChange={inputChangeHandler} />
          </S.SearchDate>
        </S.ErrorTitle>
        {error}
      </S.Error>
    </>
  );
};

export default Error;
