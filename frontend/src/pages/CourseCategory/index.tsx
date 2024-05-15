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

export default function CourseCategory() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(allCourses);
  }, []);

  return (
    <main className="container my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-4  xl:col-span-3 2xl:col-span-2">
          <div className="sticky top-3 space-y-3">
            <ContainerBox className={"p-3"}>
              <div className="flex items-center justify-between">
                <input
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
                <FormControlLabel control={<Checkbox />} label="رایگان" />
                <FormControlLabel control={<Checkbox />} label="تخفیف خورده" />
                <FormControlLabel control={<Checkbox />} label="خریداری شده" />
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
