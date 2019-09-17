import * as CONST from '../Utils/Constants';

export function changeLanguage(user) {
  return {
    type: CONST.CHANGE_LANGUAGE,
    user
  };
}
