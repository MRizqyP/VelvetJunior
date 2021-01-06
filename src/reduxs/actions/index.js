import * as apiTesterActions from './action-api-tester';
import * as counterActions from './action-counter';

const actions = {
  ...apiTesterActions,
  ...counterActions,
};

export {actions};
