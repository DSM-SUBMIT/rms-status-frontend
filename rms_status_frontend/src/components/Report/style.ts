import styled from 'styled-components';

export const Report = styled.div`
  width: 100%;
  min-width: 800px;
  padding: 70px 0px;
`;

export const ReportTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const TitleInput = styled.input`
  width: 800px;
  height: 40px;
  border: 1px solid #c4c4c4;
  display: block;
  margin: 60px auto 40px auto;
  padding: 0px 20px;
  border-radius: 5px;
  font-size: 15px;
  :placeholder-shown {
    font-size: 15px;
    color: #adadad;
  }
`;

export const ReportTextArea = styled.textarea`
  width: 800px;
  height: 550px;
  padding: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  resize: none;
  :placeholder-shown {
    font-size: 14px;
    color: #adadad;
  }
`;

export const SubmitBtn = styled.div`
  width: 200px;
  height: 40px;
  background-color: #386bee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  > p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;
