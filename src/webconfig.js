export const BACKEND_URL = "http://localhost:8000/";
export const FRONTEND_URL = "http://localhost:3000/";
export const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export function getSignInOptions(name, pass) {
  const options = {
    method: "POST",
    headers: JSON_HEADERS,
    body: `{
             "name": "${name}",
             "password": "${pass}"
            }`,
  };
  return options;
}
export function sendAuthenticatedRequest(url, name, pass) {
  const options = getSignInOptions(name, pass);
  return fetch(url, options);
}

export const STATUS = {
  CREATED: 201,
  OK: 200,
};
