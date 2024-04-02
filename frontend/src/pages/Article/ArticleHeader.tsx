import { GoEye } from "react-icons/go";
import { RxTimer } from "react-icons/rx";

export default function ArticleHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className=" ">
        <h1 className="text-5xl  mb-8">بهترین گیفت کارت های سال 2024</h1>
        <div className="flex items-center gap-2 text-xl text-slate-400 dark:text-slate-200">
          <p>انتشار:</p>
          <span>1402/12/4</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
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
