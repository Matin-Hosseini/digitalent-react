import Input from "./Input";

export default function NewsLetter() {
  return (
    <div className="container relative w-full xs:w-[80%] m-auto text-white">
      <div className=" my-56 z-40 px-16 sm:px-32 py-8 sm:py-16 rounded-xl flex items-center justify-center lg:justify-between text-center lg:text-start bg-gradient-to-l from-indigo-700 via-gray-500 to-blue-500">
        <div>
          <h3 className="font-title text-[5rem]">گوش به زنگ باشید</h3>
          <h4 className="my-6">
            با عضویت در خبرنامه می توانید از جدیدترین اطلاعیه ها با خبر شوید
          </h4>
          <form action="" className="max-w-[40rem]">
            <Input type={"email"} label={"آدرس ایمیل"} />
          </form>
        </div>

        <div className="absolute max-w-[700px] left-0 bottom-0 hidden lg:block">
          <img
            src="/src/assets/images/post-illustration-2.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}