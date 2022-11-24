echo attempting to change to mode %1
xcopy /y %~dp0packages\%1.json %~dp0package.json && xcopy /y %~dp0src\urls\%1.js %~dp0src\urls.js && echo mode now set to %1
IF "%2"=="debug" ( ( echo export const DEBUG = true; ) > %~dp0src\debug.js 
    ) ELSE ( echo export const DEBUG = false; )  > %~dp0src\debug.js