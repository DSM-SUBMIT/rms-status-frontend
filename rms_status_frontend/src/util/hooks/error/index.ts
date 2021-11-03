import { useDispatch } from 'react-redux';
import { setMonth, setYear } from '../../../modules/redux/action/error';
import useSelectState from '../default';

const useError = () => {
  const dispatch = useDispatch();
  const state = useSelectState().error;
  const setState = {
    setYear: (payload: string) => {
      dispatch(setYear(payload));
    },
    setMonth: (payload: string) => {
      dispatch(setMonth(payload));
    },
  };
  return { state, setState };
};

export default useError;
