import * as CONST from '../Utils/Constants';

export function changeLanguage(lang= 'en') {
  return {
    type: CONST.CHANGE_LANGUAGE,
    payload: lang
  };
}
