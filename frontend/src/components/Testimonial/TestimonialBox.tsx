import { Avatar, Rating } from "@mui/material";

export default function TestimoinalBox() {
  return (
    <div className="p-5 flex flex-col justify-between text-2xl h-full gap-4">
      <div className="flex items-center gap-4">
        <Avatar alt="Remy Sharp" src="/src/assets/images/profile.jpg" />
        <span className="text-lg">امیررضا مهدیان نسب</span>
      </div>

      <p className="text-[var(--gray)] text-lg line-clamp-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است وم از صنعت چاپ و با استفاده از طراحان گرافیک است
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </p>

      <div className="flex justify-end">
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
    </div>
  );
}
