// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  PORT: 4200,
  API_URL: 'http://localhost:8000/api/',
  OKTA_URL: 'https://dev-662113.okta.com/',
  OKTA_CLIENT_ID: '0oa1en37vvXcI1uwd357'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
