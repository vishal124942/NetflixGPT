const checkValidData = (email, password, username) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const Username = /^[0-9A-Za-z]{6,16}$/.test(username);
  const isPasswordValid =
    /^(?=.*[0-8])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/.test(password);
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid use eg:Vv0897663@";
  }
  if (!Username) {
    return "Username is not valid";
  }
  return null;
};
export default checkValidData;
