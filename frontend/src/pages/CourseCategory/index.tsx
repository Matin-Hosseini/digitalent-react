import { FormGroup } from "@mui/material";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import { Checkbox, FormControlLabel } from "../../components/mui/customs";
import CourseBox from "../../components/CourseBox";

import allCourses from "./../../data/courses";
import { useEffect, useState } from "react";
import { Course } from "../../types/Course";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";
import SearchBox from "../../components/SearchBox";
import { IoMdSad } from "react-icons/io";
import applyFilters from "../../utils/applyFilters";
import useUrlQueries from "../../hooks/urlQueries";
import CategoryCheckBoxes from "../../components/CategoryCheckBoxes";

export default function CourseCategory() {
  const { isLoggedIn } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);

  const [search, setSearch] = useSearchParams();

  const urlQueries = useUrlQueries();

  useEffect(() => {
    setCourses(applyFilters(allCourses, urlQueries));
  }, [search]);

  const handleFreeClick = () => {
    if (!!search.get("free")) {
      search.delete("free");
      setSearch(search);
      return;
    }

    search.set("free", true.toString());
    setSearch(search);
  };

  const handleDiscountClick = () => {
    if (!!search.get("discount")) {
      search.delete("discount");
      setSearch(search);
      return;
    }

    search.set("discount", true.toString());
    setSearch(search);
  };

  return (
    <main className="container my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-4  xl:col-span-3 2xl:col-span-2">
          <div className="sticky top-3 space-y-3">
            <SearchBox placeholder="دنبال چه دوره ای می گردی؟" />
            <ContainerBox className={"p-3"}>
              <FormGroup>
                <FormControlLabel
                  checked={!!search.get("free")}
                  control={<Checkbox />}
                  label="رایگان"
                  onChange={handleFreeClick}
                />
                <FormControlLabel
                  checked={!!search.get("discount")}
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

              <CategoryCheckBoxes />
            </ContainerBox>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 2xl:col-span-10">
          <section className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            {courses.map((course) => (
              <CourseBox key={course.id} {...course} />
            ))}
          </section>
          {courses.length === 0 && (
            <div className="h-full flex items-center flex-col justify-center gap-4">
              <IoMdSad className="w-20 h-20 text-[var(--red)]" />
              <p> دوره ای یافت نشد.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
