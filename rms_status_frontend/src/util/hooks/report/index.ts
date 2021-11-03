import { useDispatch } from 'react-redux';
import { setInput, setTextarea } from '../../../modules/redux/action/report';
import useSelectState from '../default';

const useReport = () => {
  const dispatch = useDispatch();
  const state = useSelectState().report;
  const setState = {
    setInput: (payload: string) => {
      dispatch(setInput(payload));
    },
    setTextarea: (payload: string) => {
      dispatch(setTextarea(payload));
    },
  };
  return { state, setState };
};

export default useReport;
