import styled, { css } from 'styled-components';

export const Main = styled.div`
  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0px;
`;

export const StatusBar = styled.div<{
  status: string;
}>`
  width: 800px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  > p {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    > p {
      font-size: 17px;
      color: #707070;
      cursor: pointer;
    }
    > img {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
  ${({ status }) => css`
    background-color: ${status === 'green'
      ? '#6dbe86'
      : status === 'yellow'
      ? '#F2BA58'
      : '#F25858'};
  `}
`;

export const Status = styled.div<{
  count: string;
}>`
  width: 800px;
  ${({ count }) => css`
    height: ${count === 'site' ? '307px' : '470px'};
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

export const ApiTitle = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 7px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span {
      display: flex;
      width: 200px;
      padding: 2px 16px;
      cursor: pointer;
    }
    > p {
      font-size: 17px;
    }
    > img {
      width: 19px;
      height: 19px;
      cursor: pointer;
      :hover + .explain {
        display: block;
      }
    }
  }
  > p:last-child {
    font-size: 15px;
    color: #adadad;
  }
`;

export const ArrorBox = styled.p`
  display: none;
  width: max-content;
  min-width: 100px;
  position: absolute;
  padding: 6px;
  bottom: 22px;
  left: 37px;
  border-radius: 8px;
  background: #c4c4c4;
  color: #ffffff;
  font-size: 10px !important;
`;

export const StatusContent = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const TitleAndStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

export const StatusText = styled.p<{
  color: string;
}>`
  font-size: 16px;
  font-weight: bold;
  ${({ color }) => css`
    color: ${color === 'green' ? '#6dbe86' : color === 'yellow' ? '#F2BA58' : '#F25858'};
  `}
`;

export const BoxLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const Box = styled.div<{ color: string }>`
  width: 16px;
  height: 50px;
  background-color: #72cc8e;
  ${({ color }) => css`
    background-color: ${color === 'green' ? '#6dbe86' : color === 'yellow' ? '#F2BA58' : '#F25858'};
  `}
`;

export const ErrorNotice = styled.div`
  width: 800px;
  height: 300px;
  background-color: #ffffff;
  margin-top: 60px;
  border: 1px solid #c4c4c4;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div > div:nth-last-of-type(1) {
    border-bottom: none;
  }
  > div:nth-last-of-type(1) {
    width: 100%;
    height: 210px;
    overflow-y: auto;
  }
`;

export const ErrorNoticeTitle = styled.p<{ severity: string }>`
  font-size: 22px;
  font-weight: bold;
  ${({ severity }) => css`
    color: ${severity === 'yellow' ? '#F2BA58' : '#F25858'};
  `}
`;

export const ErrorContent = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ErrorDetail = styled.p`
  font-size: 16px;
`;

export const Service = styled.p`
  font-size: 14px;
  color: #c4c4c4;
  text-align: right;
`;
