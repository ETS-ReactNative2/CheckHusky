import * as CONST from '../Utils/Constants';

export function changeLanguage(lang) {
  return {
    type: CONST.CHANGE_LANGUAGE,
    lang
  };
}
