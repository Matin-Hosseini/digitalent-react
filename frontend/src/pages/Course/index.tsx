import { useEffect } from "react";

import axios from "axios";
import PageInfoBox from "../../components/PageInfoBox";
import CourseDetails from "./CourseDetails";
import CourseInfo from "./CourseInfo";
import RelatedCourses from "./RelatedCourses";

export default function Course() {
  useEffect(() => {
    console.log(document.cookie);

    const getCookie = async () => {
      console.log("sending request");
      const res = await axios.get("http://localhost:8000/api/v1/cookie");
      console.log(res);
    };

    getCookie();
  }, []);

  return (
    <main className="container my-20">
      <PageInfoBox />
      <CourseInfo />
      <CourseDetails />
      <RelatedCourses />
    </main>
  );
}
