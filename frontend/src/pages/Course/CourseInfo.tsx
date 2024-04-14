import { Avatar, Divider, Rating } from "@mui/material";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ContainerBox from "../../components/ContainerBox";
import ProgressBar from "../../components/ProgressBar";
import VideoPlayer from "../../components/VideoPlayer";

export default function CourseInfo() {
  return (
    <div className="my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ContainerBox className={"p-4 h-full"}>
            <VideoPlayer />
          </ContainerBox>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 self-center">
          <ContainerBox className={" p-4"}>
            <div className=" flex flex-col justify-between gap-12 text-2xl h-full">
              <div className="flex items-center justify-evenly">
                <div className="flex flex-col items-center gap-3">
                  <span>7</span>
                  <h3>دانشجو</h3>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "var(--text-color)",
                    transition: "all var(--transition)",
                  }}
                />
                <div className="flex flex-col items-center gap-3">
                  <div className="flex flex-col items-center gap-2">
                    <span className="old-price">300,000</span>
                    <span className="tracking-wider">270,000</span>
                  </div>
                  <span className="text-lg">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h4>امتیاز دوره:</h4>
                <Rating
                  name="read-only"
                  precision={0.1}
                  value={2.5}
                  readOnly
                  sx={{
                    direction: "ltr",
                    fontSize: "2rem",
                    ".MuiRating-iconEmpty": {
                      color: "var(--text-color)",
                      transition: "var(--transition)",
                    },
                  }}
                />
              </div>

              <div>
                <ProgressBar value={49} />
                <div className="flex items-center gap-2 mt-2 text-xl">
                  <span>30</span>
                  <p>درصد دوره تکمیل شده است.</p>
                </div>
              </div>

              <div className="flex items-center justify-around text-xl bg-[var(--app-bg)] py-4 rounded-lg app-transition">
                <div className="flex items-center justify-center gap-5">
                  <Link to={`/teachers`}>
                    <Avatar
                      alt="متین"
                      src="src/assets/images/profile.jpg"
                      sx={{
                        background: "var(--section-bg)",
                        color: "var(--text-color)",
                        fontFamily: "var(--text-font)",
                        transition: "var(--transition)",
                      }}
                    />
                  </Link>
                  <h3>
                    <Link to={`/teachers`}>سید رضا سید صدری</Link>
                  </h3>
                </div>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "var(--text-color)",
                    transition: "all var(--transition)",
                  }}
                />

                <div className="flex items-center justify-center me-5">
                  مدرس
                </div>
              </div>

              <div className="flex items-center justify-around text-center">
                <div className="">
                  <span>3</span>
                  <h4 className="text-lg text-[var(--gray)]">دیدگاه</h4>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "var(--text-color)",
                    transition: "all var(--transition)",
                  }}
                />
                <div>
                  <span>15 ساعت</span>
                  <h4 className="text-lg text-[var(--gray)]">آموزش</h4>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "var(--text-color)",
                    transition: "all var(--transition)",
                  }}
                />
                <div className="">
                  <span>پیشرفته</span>
                  <h4 className="text-lg text-[var(--gray)]">سطح دوره</h4>
                </div>
              </div>

              <div className="flex items-center gap-5 h-16 text-xl">
                <button className="flex items-center gap-4 px-4  bg-purple-300 text-purple-700 flex-1 h-full rounded-lg">
                  <MdOutlineAddShoppingCart />
                  افزودن به سبد خرید
                </button>
                <button className="flex items-center justify-center bg-red-400 h-full w-16 rounded-lg">
                  <RiHeartAddLine />
                </button>
              </div>
            </div>
          </ContainerBox>
        </div>
      </div>
    </div>
  );
}
