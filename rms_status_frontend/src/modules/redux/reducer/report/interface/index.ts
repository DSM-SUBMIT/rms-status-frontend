import { error } from '../../../../../models/error';

interface ReportState {
  title: string;
  content: string;
  isSuccessSaveReport: boolean | undefined;
  error: error;
}

export default ReportState;
