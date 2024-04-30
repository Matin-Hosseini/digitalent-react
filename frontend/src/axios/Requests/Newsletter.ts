import Api from "../api";

const postNewsletter = async (reqBody: { email: string }) => {
  return await Api.post("/newsletter/create", reqBody)
    .then((res) => res)
    .catch((error) => error);
};

export { postNewsletter };
