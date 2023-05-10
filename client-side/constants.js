export const ENV_MODE = (REACT_ENV && REACT_ENV?.REACT_APP_ENV) || 'development';
export const API_BASE_URL = (REACT_ENV && REACT_ENV?.REACT_APP_BASE_URL) || 'http://localhost:5000';