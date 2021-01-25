import * as loginActions from './action-login';
import * as pinActions from './action-pin';
import * as authActions from './action-auth';

const actions = {
  ...authActions,
  ...loginActions,
  ...pinActions,
};

export {actions};
