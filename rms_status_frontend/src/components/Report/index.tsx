import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { REPORT } from '../../modules/redux/action/report/interface';
import Header from '../Header';
import * as S from './style';

interface Props {
  isSuccessSaveReport: boolean | undefined;
  setInput: (payload: string) => void;
  setTextarea: (payload: string) => void;
}

const Report: FC<Props> = props => {
  const { isSuccessSaveReport, setInput, setTextarea } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccessSaveReport) {
      console.log(1234);
      alert('오류 제보해 주셔서 감사합니다!');
      history.push('/');
    }
  }, [isSuccessSaveReport]);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.currentTarget.value);
  };

  const submitBtnClickHandler = () => {
    dispatch({ type: REPORT });
  };

  return (
    <>
      <Header />
      <S.Report>
        <S.ReportTitle>문제가 있었나요? 저희에게 알려주세요.</S.ReportTitle>
        <S.TitleInput placeholder={'제목을 입력해 주세요.'} onChange={inputChangeHandler} />
        <S.ReportTextArea
          placeholder={
            '내용을 상세하게 적어주세요. (어떤 상황에서, 어떻게 했을 때 어떤 동작이 이루어졌는지, 원래 예상했던 동작은 무엇인지 등)'
          }
          onChange={textareaChangeHandler}
        />
        <S.SubmitBtn onClick={submitBtnClickHandler}>
          <p>제출</p>
        </S.SubmitBtn>
      </S.Report>
    </>
  );
};

export default Report;
