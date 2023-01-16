import axios from "axios";

export const AuthApi = async (AuthData, url) => {
  // const response = await axios.post(
  //   `https://barter.a-lux.dev/api/auth/${url}`,
  //   {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       AuthData,
  //     },
  //   }
  // );

  const response = await axios({
    method: "post",
    url: `https://barter.a-lux.dev/api/auth/${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: AuthData,
  });

  return response;
};
