import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import empReducers from './empReducers';
import empDataReducers from './EmployeeDataReducers';
import empUpdateReducers from './EmployeeUpdateReducers';

export default combineReducers({
  loginControlResponse: loginReducers,
  empListResponse: empReducers,
  empDataResponse: empDataReducers,
  empUpdateResponse: empUpdateReducers
});
