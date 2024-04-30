import Api from "../api";

const postNewsletter = async (reqBody: { email: string }) => {
  const res = await Api.post("/newsletter/create", reqBody);
  return res;
};

export { postNewsletter };
