import * as apiTesterActions from './action-api-tester';
import * as counterActions from './action-counter';
import * as loginActions from './action-login';
import * as pinActions from './action-pin';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...loginActions,
  ...pinActions,
};

export {actions};
