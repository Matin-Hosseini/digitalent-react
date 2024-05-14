import { useEffect } from "react";

import axios from "axios";
import PageInfoBox from "../../components/PageInfoBox";
import CourseDetails from "./CourseDetails";
import CourseInfo from "./CourseInfo";
import RelatedCourses from "./RelatedCourses";

export default function Course() {
  useEffect(() => {}, []);

  return (
    <main className="container my-20">
      <PageInfoBox />
      <CourseInfo />
      <CourseDetails />
      <RelatedCourses />
    </main>
  );
}
