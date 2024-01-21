import CourseInfo from "./Components/Course-info";
import CourseDetails from "./Components/CourseDetails";
import RelatedCourses from "./Components/RelatedCourses";

//custom hooks
import useScrollToTop from "../../hooks/scrollToTop";

export default function Course() {
  useScrollToTop();

  return (
    <main>
      <CourseInfo />
      <CourseDetails />
      <RelatedCourses />
    </main>
  );
}
