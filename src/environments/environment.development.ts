import {domain, clientId, audience, serverUrl} from '../../auth_config.json'

export const environment = {
    production: false,
    auth0: {
      domain,
      clientId,
      redirectUri: 'http://localhost:4200',
      audience
    },
    dev: {
      serverUrl
    }
  };
