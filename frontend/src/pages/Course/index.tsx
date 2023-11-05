import CourseInfo from "./Components/Course-info";
import CourseDetails from "./Components/CourseDetails";
import RelatedCourses from "./Components/RelatedCourses";

export default function Course() {
  return (
    <main>
      <CourseInfo />
      <CourseDetails/>
      <RelatedCourses/>
    </main>
  );
}
