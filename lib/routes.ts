// const BASE_URL = `${process.env.HOST}`;
const BASE_URL = `http://localhost:3000`;

export const API_ROUTES = {
  USER: {
    AUTH: {
      SIGNUP: `${BASE_URL}/api/signup`,
      SIGNIN: `${BASE_URL}/api/signin`,
    },
  },
  ADMIN: {
    AUTH: {
      SIGNIN: `${BASE_URL}/api/admin/signin`,
    },
  }
} as const;