import Api from "../api";

const updateUserInfo = async (body: any) => {
  const res = await Api.put("/user/info", body);
  if (res.status === 200) return true;
};

const getUserInfo = async () => {
  const res =  await Api.get("/me");
  if (res.status === 200) return res.data.user;
};

export { updateUserInfo, getUserInfo };
