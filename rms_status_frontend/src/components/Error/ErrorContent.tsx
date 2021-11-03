import React, { FC } from 'react';
import { postsArrayType } from '../../models/response/mainResponse';
import * as S from './style';

interface Props {
  title: string;
  posts: Array<postsArrayType>;
  affected_on: string;
  severity: string;
  date: string;
}

const ErrorContent: FC<Props> = props => {
  const { title, posts, affected_on, severity, date } = props;

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

  return (
    <S.ErrorContent>
      <S.ErrorContentDate>{makeDate(date)}</S.ErrorContentDate>
      <S.ErrorContentTitle severity={severity}>{title}</S.ErrorContentTitle>
      <div>
        {posts.map(data => {
          return (
            <S.ErrorPost>
              <S.ErrorPostTitle>
                {data.title} - {makeDate(data.date)}
              </S.ErrorPostTitle>
              <S.ErrorPostDetail>{data.content}</S.ErrorPostDetail>
            </S.ErrorPost>
          );
        })}
      </div>
      <S.Service>영향을 받는 서비스: {affected_on}</S.Service>
    </S.ErrorContent>
  );
};

export default ErrorContent;
