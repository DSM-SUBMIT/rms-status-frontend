import React, { FC, useMemo } from 'react';
import { currentOutageArrayType } from '../../../models/response/mainResponse';
import * as S from '../style';

interface Props {
  currentOutage: currentOutageArrayType;
}

const ErrorNotice: FC<Props> = props => {
  const { currentOutage } = props;

  const getPostDay = (date: number) => {
    const week: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
    return week[date];
  };

  const makeDate = (date: string) => {
    const postDate = new Date(date);
    return `${postDate.getFullYear()}.${('0' + (postDate.getMonth() + 1)).slice(-2)}.${(
      '0' + postDate.getDate()
    ).slice(-2)}(${getPostDay(postDate.getDay())}) ${date.slice(11, 19)}`;
  };

  const post = useMemo(() => {
    return currentOutage.posts.map((data, i) => {
      return (
        <S.ErrorContent key={i}>
          <S.ErrorTitle>
            {data.title} - {makeDate(data.date)}
          </S.ErrorTitle>
          <S.ErrorDetail>{data.content}</S.ErrorDetail>
        </S.ErrorContent>
      );
    });
  }, [currentOutage.posts]);

  return (
    <S.ErrorNotice>
      <S.ErrorNoticeTitle severity={currentOutage.severity}>
        {currentOutage.title}
      </S.ErrorNoticeTitle>
      <div>{post}</div>
      <S.Service>영향을 받는 서비스: {currentOutage.affected_on}</S.Service>
    </S.ErrorNotice>
  );
};

export default ErrorNotice;
