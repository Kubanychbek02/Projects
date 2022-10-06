//api url
const API_URL = process.env.REACT_APP_API_HOST
// export const apiURL = 'http://10.111.70.153:8080'
export const apiURL = 'http://10.145.82.72:6001'

export const apiSignIn = `${apiURL}/api/v1/login`;
export const apiLogout = `${apiURL}/api/v1/logout`;
export const apiDataUserByPin = `${apiURL}/api/v1/tunduk/zags-data-by-pin`;
export const apiDataUserPhotoByPin = `${apiURL}/api/v1/tunduk/passport-last-photo-by-pin`;

export const apiDataUserAddressByPin = `${apiURL}/api/v1/tunduk/asb-address`;