import styled, { css } from 'styled-components';

export const Error = styled.div`
  width: 100%;
  min-width: 800px;
  padding: 70px 0px;
`;

export const ErrorTitle = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  > p {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const SearchDate = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-size: 18px;
    margin-right: 15px;
  }
  > input {
    width: 140px;
    height: 21px;
    border: 1px solid #c4c4c4;
    padding: 0px 5px;
  }
`;

export const ErrorContent = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  > div > div:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const ErrorContentDate = styled.p`
  font-style: 18px;
  margin-bottom: 5px;
`;

export const ErrorContentTitle = styled.p<{ severity: string }>`
  font-size: 22px;
  font-weight: bold;
  ${({ severity }) => css`
    color: ${severity === 'yellow' ? '#F2BA58' : '#F25858'};
  `}
  margin-bottom: 15px;
`;

export const ErrorPost = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorPostTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ErrorPostDetail = styled.p`
  font-size: 16px;
`;

export const Service = styled.p`
  font-size: 14px;
  color: #c4c4c4;
  text-align: right;
`;

export const NoContent = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 120px;
`;
