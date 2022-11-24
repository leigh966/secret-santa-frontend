# Secret Santa Frontend

This react app is the website through which users will play my new game of secret santa!

## Getting Started:

This project has now been modified to be mode-base and, as such, need to be in the appropriate mode to run locally. **Make sure to set your mode before attempting after cloning repo!**

### Local Mode

This is the mode in which most development and testing will take place, it runs the frontend on localhost and assumes that the backend is also running on localhost.

#### `./set_project_mode.bat local`

Changes the project mode to local. This switches the project to using settings from `/src/urls/local.js` and `/packages/local.json`. If you wish to alter local mode settings these are the files you need to change.

#### `npm start`

This command start hosting the website on localhost. By default, it will be hosted on port 3000; if, for any reason, you need to alter this port, this can be done by altering `"start": "react-scripts start"` to `"set PORT=xxxx && react-scripts start"` within `/packages/local.json`. \*\*Note: If you update the hosting port in this way, ensure that you alter `FRONTEND_URL` in `/src/urls/local.js` to reflect this change.

### Live Mode

This mode will be used once new features have been developed and tested in local mode and are ready for deployment.

#### `./set_project_mode.bat live`

Changes the project mode to live. This switches the project to using settings from `/src/urls/live.js` and `/packages/live.json`. If you wish to alter local mode settings these are the files you need to change. **Note: if you update `FRONTEND_URL` in `/src/urls/live.js`, ensure you update the `homepage` in `/packages/live.json` and visa versa. Always ensure they match the actual address that you will be hosting on!**

#### `npm run deploy`

Builds the solution and attempts to host it from the gh-pages branch at the repo.

### Debugging

Some features of this app use the `DEBUG` bool in `/src/debug.js` to determine whether they should be present. When running `./set_project_mode.bat local` or `./set_project_mode.bat live`, this `DEBUG` bool is set to `false`. To enable debugging, use `./set_project_mode.bat local debug` for local debugging or `./set_project_mode.bat live debug` for using debugging features on the live hosted site **NOT RECOMMENDED!!!**
