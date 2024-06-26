import ReactPlayer from "react-player";

import { useState } from "react";
import videoUrl from "./test.mp4";

import "./VideoPlayer.css";

// import { Slider, styled } from "@mui/material";

// import {
//   FastForward,
//   FastRewind,
//   Pause,
//   PlayArrow,
//   SkipNext,
//   VolumeUp,
// } from "@mui/icons-material";

// const Control = ({ onPlay }: { onPlay: any }) => {
//   // const useStyles = makeStyles({
//   //   volumeSlider: {
//   //     width: "100px",
//   //     color: "#9556CC",
//   //   },

//   //   bottomIcons: {
//   //     color: "#999",
//   //     padding: "12px 8px",

//   //   "&:hover": {
//   //       color: "#fff",
//   //     },
//   //   },
//   //  });

//   const PrettoSlider = styled(Slider)({
//     root: {
//       height: "20px",
//       color: "#9556CC",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     thumb: {
//       height: 20,
//       width: 20,
//       backgroundColor: "#9556CC",
//       border: "2px solid currentColor",
//       marginTop: -3,
//       marginLeft: -12,
//       "&:focus, &:hover, &$active": {
//         boxShadow: "inherit",
//       },
//     },
//     active: {},
//     valueLabel: {
//       left: "calc(-50% + 4px)",
//     },
//     track: {
//       height: 5,
//       borderRadius: 4,
//       width: "100%",
//     },
//     rail: {
//       height: 5,
//       borderRadius: 4,
//     },
//   });

//   return (
//     <>
//       <div className="top_container">
//         <h2>Video PLayer</h2>
//       </div>
//       {/* middle container */}
//       <div className="mid__container">
//         <div className="icon__btn">
//           <FastForward fontSize="medium" />
//         </div>

//         <div className="icon__btn" onClick={() => onPlay()}>
//           <Pause fontSize="medium" />
//         </div>
//         <div className="icon__btn">
//           <FastRewind fontSize="medium" />
//         </div>
//       </div>
//       {/* bottom container */}
//       <div className="bottom__container">
//         <div className="slider__container">
//           <PrettoSlider />
//         </div>
//         <div className="control__box">
//           <div className="inner__controls">
//             <div className="icon__btn">
//               <PlayArrow fontSize="medium" />
//             </div>
//             <div className="icon__btn">
//               <SkipNext fontSize="medium" />
//             </div>
//             <div className="icon__btn">
//               <VolumeUp fontSize="medium" />
//             </div>

//             <Slider className={``} />
//             <span>5/20</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default function VideoPlayer() {
  const [play] = useState(false);
  return (
    <ReactPlayer
      className="player"
      url={videoUrl}
      // url="https://www.youtube.com/watch?v=9DqW9R8Lfmw"
      width="100%"
      height="100%"
      controls
      playing={play}
    />
  );
}

{
  /* <Control onPlay={() => setPlay((prev) => !prev)} /> */
}
