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
import { debounce } from "lodash";
import SearchBox from "../../components/SearchBox";
import { category } from "../../types/Category";
import categories from "../../data/catgegories";

export default function CourseCategory() {
  const { isLoggedIn } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);

  const [search, setSearch] = useSearchParams();

  const isFree = search.get("free") || "";
  const isDiscounted = search.get("discount") || "";

  const applyFilters = (
    courses: any[],
    { search }: { search: string | null }
  ) => {
    const filteredCourses = [];

    for (const course of courses) {
      if (
        search &&
        !course.title.toLowerCase().includes(search.toLocaleLowerCase())
      ) {
        continue;
      }

      filteredCourses.push(course);
    }

    return filteredCourses;
  };

  const searchHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: text } = e.target;

    if (text.length === 0) {
      search.delete("search");
      setSearch(search, { replace: true });
    } else {
      search.set("search", text);
      setSearch(search, { replace: true });
    }

    setCourses(applyFilters(allCourses, { search: search.get("search") }));
  }, 350);

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

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryValue: category["value"]
  ) => {
    let categories = search.get("cat")?.split(",") ?? [];
    const checked = e.target.checked;

    if (checked) {
      categories.push(categoryValue);
    } else {
      categories = categories.filter((category) => category !== categoryValue);
    }

    if (categories.length === 0) {
      search.delete("cat");
    } else {
      search.set("cat", categories.join(","));
    }

    setSearch(search);
  };

  // let query: any = {};

  // for (const [key, value] of search.entries()) {
  //   query[key] = value;
  // }

  return (
    <main className="container my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-4  xl:col-span-3 2xl:col-span-2">
          <div className="sticky top-3 space-y-3">
            <SearchBox
              placeholder="دنبال چه دوره ای می گردی؟"
              onSearchChange={searchHandler}
            />
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
                {categories.map((category: category) => (
                  <FormControlLabel
                    key={category.id}
                    control={
                      <Checkbox
                        checked={search
                          .get("cat")
                          ?.split(",")
                          .includes(category.value)}
                        onChange={(e) =>
                          handleCategoryChange(e, category.value)
                        }
                      />
                    }
                    label={category.name}
                  />
                ))}
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
