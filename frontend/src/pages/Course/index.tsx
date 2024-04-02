// import CourseInfo from "./Components/Course-info";
// import CourseDetails from "./Components/CourseDetails";
// import RelatedCourses from "./Components/RelatedCourses";

//custom hooks
import { Grid } from "@mui/material";
import ContainerBox from "../../components/ContainerBox";
import useScrollToTop from "../../hooks/scrollToTop";

import { useRef } from "react";
import { FcCalendar, FcShare } from "react-icons/fc";
import VideoJS from "../../components/VideoPlayer";

export default function Course() {
  useScrollToTop();

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
        <Grid container spacing={1.5}>
          <Grid item xs={12} lg={8} xl={8.5} xxl={9}>
            <ContainerBox className={"p-4"}>
              {/* <video className="w-full rounded-xl" controls>
                <source
                  src="src/assets/videos/course/video (720p).mp4"
                  type="video/mp4"
                />
              </video> */}
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </ContainerBox>
          </Grid>
          <Grid item xs={12} lg={4} xl={3.5} xxl={3}>
            <ContainerBox className={"h-full p-3"}>
              <div></div>
            </ContainerBox>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
