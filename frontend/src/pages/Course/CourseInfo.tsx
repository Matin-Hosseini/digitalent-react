import { useRef } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";
import ContainerBox from "../../components/ContainerBox";
import ProgressBar from "../../components/ProgressBar";
import { Rating } from "@mui/material";

export default function CourseInfo() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "src/assets/videos/course/video (720p).mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ContainerBox className={"p-4"}>{/* <VideoPlayer /> */}</ContainerBox>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <ContainerBox className={"h-full p-4"}>
            <div className=" flex flex-col justify-between gap-12 text-2xl">
              <div className="flex items-center justify-evenly">
                <div className="flex flex-col items-center gap-3">
                  <span>7</span>
                  <h3>دانشجو</h3>
                </div>
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

              <div className="grid grid-cols-2 items-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src="src/assets/images/profile.jpg"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <h3>کسکش کون لخت</h3>
                </div>

                <div className="flex items-center justify-center">
                  کاگردان فیلم سوپر
                </div>
              </div>

              <div className="grid grid-cols-3 text-center divide-x">
                <div className="">
                  <span>3</span>
                  <h4 className="text-lg text-[var(--gray)]">دیدگاه</h4>
                </div>
                <div className="">
                  <span>15 ساعت</span>
                  <h4 className="text-lg text-[var(--gray)]">آموزش</h4>
                </div>
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
