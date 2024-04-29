import { useContext, useEffect, useState } from "react";
import "./EditAccount.css";
import { authContext } from "../../../contexts/auth";
import { getUserInfo, updateUserInfo } from "../../../axios/Requests/User";
import { toast } from "react-toastify";

export default function EditAccount() {
  const { userInfo, changeUserInfo } = useContext(authContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(userInfo);

    setName(userInfo.name || "");
    setUsername(userInfo.username);
    setPhone(userInfo.phone || "");
    setEmail(userInfo.email);
  }, [userInfo]);

  const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInfo = {
      name,
      username,
      email,
      phone,
    };

    const isUserUpdated = await updateUserInfo(newInfo);

    if (isUserUpdated) {
      toast("ویرایش اطلاعات با موفقیت انجام شد.");
      const userNewInfo = await getUserInfo();
      changeUserInfo(userNewInfo);
    }
  };

  return (
    <section className="edit">
      <form action="" className="edit-form" onSubmit={submitHandler}>
        <h1 className="title text-info mb-4">ویرایش حساب کاربری</h1>
        <div>
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>نام کاربری</label>
          <input
            type="text"
            id="userName"
            placeholder=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>شماره موبایل</label>
          <input
            type="text"
            id="phone"
            placeholder=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>ایمیل</label>
          <input
            type="text"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>

        <button type="submit" className="custom-btn">
          ویرایش اطلاعات
        </button>
      </form>
    </section>
  );
}
