export const passwordValidator = password => {
  if (!password) {
    return false;
  }

  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

//^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
export const emailValidate = email => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};
