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

export function getBackendEndpointURL(endpoint) {
  return BACKEND_URL + endpoint;
}

export function sendAuthenticatedRequest(
  url,
  name,
  pass,
  fieldName,
  fieldValue
) {
  let options = getSignInOptions(name, pass);
  if (fieldName) {
    options.body =
      options.body[0] +
      `"${fieldName}": ${fieldValue},` +
      options.body.substring(1);
  }
  return fetch(url, options);
}

export const STATUS = {
  CREATED: 201,
  OK: 200,
};
