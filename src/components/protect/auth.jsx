// src/auth.js

export const isLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

export const login = (token) => {
  localStorage.setItem("authToken", token);
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
