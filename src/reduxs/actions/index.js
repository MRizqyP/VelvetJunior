import * as apiTesterActions from './action-api-tester';
import * as counterActions from './action-counter';
import * as loginActions from './action-login';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...loginActions,
};

export {actions};
