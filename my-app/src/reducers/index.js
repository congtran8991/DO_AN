import { combineReducers } from 'redux';
import ActCreateTest from './actCreateTest';
import ActRedirect from './actRedirect';
import ActTestQuestion from './actTestQuestion';
import ActTimeExamData from './actTimeExam';
import ActDataSaveTheQuiz from './actDataSaveTheQuiz';
import ActLogin from './actLogin';
import ActLabelShowChart from './actLabelShowChart';
import ActValueShowChart from './actValueShowChart';
import ActRegis from './actRegis';
import ActLogout from './actLogout';
import ActContactFeedback from './actContactFeedback';
import ActOnNav from './actNav';
import ActAccount from './actAccount';
import ActDataShowChart from './actDataShowChart';
const appReducer = combineReducers({
    ActCreateTest,
    ActRedirect,
    ActTestQuestion,
    ActTimeExamData,
    ActDataSaveTheQuiz,
    ActLogin,
    ActLabelShowChart,
    ActValueShowChart,
    ActRegis,
    ActLogout,
    ActContactFeedback,
    ActOnNav,
    ActAccount,
    ActDataShowChart
});
export default appReducer;