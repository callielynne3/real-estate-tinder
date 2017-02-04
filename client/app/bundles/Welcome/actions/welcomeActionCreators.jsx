/* eslint-disable import/prefer-default-export */

import { WELCOME_NAME_UPDATE } from '../constants/welcomeConstants';

export const updateName = (text) => ({
  type: WELCOME_NAME_UPDATE,
  text,
});
