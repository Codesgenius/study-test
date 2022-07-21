export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
