import styled, { css } from 'styled-components';

export const Main = styled.div`
  width: 100%;
  min-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusBar = styled.div<{
  isWorking: string;
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
      width: 14px;
      height: 14px;
      cursor: pointer;
    }
  }
  ${({ isWorking }) => css`
    background-color: ${isWorking === '1' ? '#6dbe86' : isWorking === '2' ? '#F2BA58' : '#F25858'};
  `}
`;

export const Api = styled.div`
  width: 800px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
    > p {
      font-size: 17px;
    }
    > img {
      width: 19px;
      height: 19px;
    }
  }
  > p:last-child {
    font-size: 15px;
    color: #adadad;
  }
`;

export const ApiStatus = styled.div`
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

export const Status = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #72cc8e;
`;

export const BoxLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const Box = styled.div`
  width: 16px;
  height: 50px;
  background-color: #72cc8e;
`;
