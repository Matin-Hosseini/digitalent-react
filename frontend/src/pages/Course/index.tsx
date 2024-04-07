// import CourseInfo from "./Components/Course-info";
// import CourseDetails from "./Components/CourseDetails";
// import RelatedCourses from "./Components/RelatedCourses";

//custom hooks
import { Grid, LinearProgress, Rating } from "@mui/material";
import ContainerBox from "../../components/ContainerBox";

import { useEffect, useRef } from "react";
import { FcCalendar, FcShare } from "react-icons/fc";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";

import { useCookies } from "react-cookie";
import Api from "../../axios/api";
import VideoJS from "../../components/VideoPlayer";

export default function Course() {
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
  const [cookie, setCookie, removeCookie] = useCookies(["my-cookie"]);

  useEffect(() => {
    console.log(document.cookie);

    setCookie("my-cookie", "this is the value", {
      maxAge: 90000,
    });

    const getCookie = async () => {
      console.log("sending request");
      const res = await Api.get("/cookie", { withCredentials: true });
      console.log(res);
    };

    getCookie();
  }, []);

  return (
    <main className="container my-20">
      {/* <CourseInfo />
      <CourseDetails />
      <RelatedCourses /> */}

      <ContainerBox className={"p-5"}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="flex items-center gap-4 text-3xl">
              <div className="flex items-center gap-2 text-gray-500">
                <span>خانه</span>
                <span>{">"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span>دوره ها</span>
                <span>{">"}</span>
              </div>
              <div>
                <span>آموزش برنامه نویسی سایت با ریکت</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xl">
                <FcCalendar />
                <div>
                  <span>آخرین به روزرسانی: </span>
                  <span>12 فروردین 1403</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-xl">
                <FcShare />
                <span>اشتراک گذاری</span>
              </button>
            </div>
          </Grid>
        </Grid>
      </ContainerBox>

      <div className="my-20">
        <div className="grid-system">
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <ContainerBox className={"p-4"}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </ContainerBox>
          </div>
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <ContainerBox className={"h-full p-3"}>
              <div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-3">
                    <span>7</span>
                    <h3>دانشجو</h3>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center gap-2">
                      <span>300,000</span>
                      <span>270,000</span>
                    </div>
                    <span>تومان</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h4>امتیاز دوره:</h4>
                  <Rating name="read-only" value={2} readOnly sx={{}} />
                </div>

                <div>
                  <LinearProgress
                    value={30}
                    variant="determinate"
                    sx={{ direction: "rtl" }}
                  />
                  <div className="flex items-center gap-2">
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
                    <h4>دیدگاه</h4>
                  </div>
                  <div className="">
                    <span>15 ساعت</span>
                    <h4>آموزش</h4>
                  </div>
                  <div className="">
                    <span>پیشرفته</span>
                    <h4>سطح دوره</h4>
                  </div>
                </div>

                <div className="flex items-center gap-5 h-16 text-lg">
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
    </main>
  );
}
