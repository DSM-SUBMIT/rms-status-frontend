import { error } from '../../../../../models/error';
import { errorContentArrayType } from '../../../../../models/response/errorResponse';

interface ErrorState {
  errorContent: Array<errorContentArrayType>;
  year: string;
  month: string;
  error: error;
  isSuccessSaveErrorContent: boolean | undefined;
}

export default ErrorState;
