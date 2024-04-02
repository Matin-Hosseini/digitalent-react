import { GoEye } from "react-icons/go";
import { RxTimer } from "react-icons/rx";

export default function ArticleHeader() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mb-10">
      <div className=" ">
        <h1 className="text-5xl  mb-8 leading-[4.5rem]">
          بهترین گیفت کارت های سال 2024
        </h1>
        <div className="flex items-center gap-2 text-xl text-slate-400 dark:text-slate-200">
          <p>انتشار:</p>
          <span>1402/12/4</span>
        </div>
      </div>
      <div className="flex items-center justify-evenly text-gray-500 dark:text-gray-300 bg-[rgba(140,140,140,0.09)] rounded-lg py-4 gap-4 w-full sm:w-auto sm:bg-transparent">
        <div className="flex flex-col items-center gap-2">
          <GoEye />
          <span className="text-lg">280 بازدید</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RxTimer />
          <span className="text-lg">8 دقیقه</span>
        </div>
      </div>
    </div>
  );
}
