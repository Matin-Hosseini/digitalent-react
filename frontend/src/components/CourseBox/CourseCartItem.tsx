import { Button, Divider, Stack } from "@mui/material";
import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import IconButton from "../mui-customs/IconButton";
import { GoTrash } from "react-icons/go";
import { useContext } from "react";
import { CoursesContext } from "../../contexts/courses";

export default function CourseCartItem({
  isCartProduct,
  id,
  title,
  price,
}: {
  isCartProduct?: boolean;
  id: string;
  title: string;
  price: number;
}) {
  const buttonStyles = {
    color: "var(--gray)",
    fontSize: 14,
    padding: 0,
    minWidth: "auto",
    flex: 1,
    paddingBlock: "4px",
  };

  const { removeCourseFromWishlist, addCourseToCart } =
    useContext(CoursesContext);

  return (
    <>
      <div className="flex gap-3 py-4">
        <Link to={"/course"}>
          <img
            src="/src/assets/images/course-cover.webp"
            alt=""
            className="w-56 h-full rounded-lg"
          />
        </Link>
        <div className="flex-1">
          <h2 className="line-clamp-1 text-2xl">{title}</h2>
          <div className="flex flex-col items-start gap-2 my-3 h-16">
            {/* <span className="overflow-hidden inline-block relative  text-[var(--gray)] text-lg before:absolute before:content-[''] before:w-full before:h-[0.1rem] before:bg-[var(--red)] before:top-1/2 before:-translate-y-2/4 before:-rotate-12">
              220,000 تومان
            </span> */}
            <span className="text-[var(--green)] text-xl">
              {/* {price.toLocaleString()} تومان */}
            </span>
          </div>
          {isCartProduct ? (
            <Stack
              direction="row"
              sx={{
                border: "1px solid var(--gray)",
                maxWidth: 120,
                borderRadius: 1,
                marginRight: "auto",
              }}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    background: "var(--gray)",
                    height: 23,
                    alignSelf: "center",
                  }}
                />
              }
            >
              <Button sx={buttonStyles}>+</Button>
              <Button sx={buttonStyles}>1</Button>
              <Button sx={{ ...buttonStyles, color: "var(--red)" }}>
                <LuTrash className="w-6" />
              </Button>
            </Stack>
          ) : (
            <div className="flex items-center gap-3 justify-end">
              <IconButton
                onClick={() => addCourseToCart(id)}
                sx={{
                  fontSize: "1rem",
                  color: "var(--purple)",
                  background: "#8696fe24",
                }}
              >
                <MdAddShoppingCart />
              </IconButton>
              <IconButton
                onClick={() => removeCourseFromWishlist(id)}
                sx={{
                  fontSize: ".5rem",
                  color: "var(--red)",
                  background: "#ff56562b",
                }}
              >
                <GoTrash />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
