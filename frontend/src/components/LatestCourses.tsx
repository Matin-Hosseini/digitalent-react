import { useContext, useEffect, useState } from "react";
import CourseBox from "./CourseBox";
import SectionHeader from "./SectionHeader/SectionHeader";

import allCourses from "./../data/courses";

export default function LatestCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses);
  }, []);

  return (
    <>
      <div className="container">
        <SectionHeader title="جدیدترین دوره ها" to="/courses" />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
          {courses?.map((course) => (
            <div key={course.id}>
              <CourseBox {...course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
