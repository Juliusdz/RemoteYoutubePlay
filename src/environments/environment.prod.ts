import {keys} from '../keys';

export const environment = {
  production: true,
  
  firebase: {
    apiKey: keys.firebaseAPIKey,
    authDomain: keys.authDomain,
    databaseURL: keys.databaseURL,
    projectId: keys.projectId,
  }
};
