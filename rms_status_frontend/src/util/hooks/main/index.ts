import useSelectState from '../default';

const useMain = () => {
  const state = useSelectState().main;
  const setState = {};
  return { state, setState };
};

export default useMain;
