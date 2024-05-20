import { FormGroup } from "@mui/material";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import { Checkbox, FormControlLabel } from "../../components/mui/customs";
import { BiSearchAlt } from "react-icons/bi";
import IconButton from "../../components/mui-customs/IconButton";
import CourseBox from "../../components/CourseBox";

import allCourses from "./../../data/courses";
import { useEffect, useState } from "react";
import { Course } from "../../types/Course";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";

export default function CourseCategory() {
  const { isLoggedIn } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);

  const [search, setSearch] = useSearchParams();

  const courseTitle = search.get("search") || "";
  const isFree = search.get("free") || "";
  const isDiscounted = search.get("discount") || "";

  useEffect(() => {
    setCourses(allCourses);
  }, []);

  const handleFreeClick = () => {
    if (!!isFree) {
      search.delete("free");
      setSearch(search);
      return;
    }

    search.set("free", true.toString());
    setSearch(search);
  };
  const handleDiscountClick = () => {
    if (!!isDiscounted) {
      search.delete("discount");
      setSearch(search);
      return;
    }

    search.set("discount", true.toString());
    setSearch(search);
  };

  useEffect(() => {
    const filteredCourses = allCourses.filter((course) => {
      if (!courseTitle) return allCourses;
      if (course.title?.toLowerCase()?.includes(courseTitle)) return true;
    });

    setCourses(filteredCourses);
  }, [courseTitle]);

  useEffect(() => {
    const filteredcourses = allCourses.filter((course) => {
      const matchesDiscount = !!course.discount === !!isDiscounted;
      const matchesSearch = course.title?.toLowerCase()?.includes(courseTitle);
      const matchesFree = course.discount === 100;

      return matchesDiscount && matchesSearch && matchesFree;
    });
    console.log(filteredcourses);
  }, [search]);

  return (
    <main className="container my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-4  xl:col-span-3 2xl:col-span-2">
          <div className="sticky top-3 space-y-3">
            <ContainerBox className={"p-3"}>
              <div className="flex items-center justify-between">
                <input
                  value={courseTitle}
                  onChange={(e) => {
                    search.set("search", e.target.value);
                    setSearch(search);
                  }}
                  type="text"
                  placeholder="دنبال چه دوره ای می گردی؟"
                  className="bg-transparent pr-3 text-xl w-80"
                />
                <IconButton>
                  <BiSearchAlt className="text-color" />
                </IconButton>
              </div>
            </ContainerBox>
            <ContainerBox className={"p-3"}>
              <FormGroup>
                <FormControlLabel
                  checked={!!isFree}
                  control={<Checkbox />}
                  label="رایگان"
                  onChange={handleFreeClick}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="تخفیف خورده"
                  onChange={handleDiscountClick}
                />
                {isLoggedIn && (
                  <FormControlLabel
                    control={<Checkbox />}
                    label="خریداری شده"
                  />
                )}
              </FormGroup>
            </ContainerBox>

            <ContainerBox className={"p-3"}>
              <ContainerBoxTitle title={"دسته بندی"} color={"purple"} />

              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="برنامه نویسی" />
                <FormControlLabel control={<Checkbox />} label="وردپرس" />
                <FormControlLabel control={<Checkbox />} label="عکاسی" />
                <FormControlLabel control={<Checkbox />} label="سئو" />
                <FormControlLabel control={<Checkbox />} label="گرافیک" />
                <FormControlLabel control={<Checkbox />} label="آشپزی" />
                <FormControlLabel control={<Checkbox />} label="وب" />
              </FormGroup>
            </ContainerBox>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 2xl:col-span-10">
          <section className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            {courses.map((course) => (
              <CourseBox key={course.id} {...course} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
