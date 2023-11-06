import CourseBox from "../Components/CourseBox";

const coursesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 75, 28, 88, ,];

export default function BuyedCourses() {
  return (
    <div className="row">
      {coursesData?.map((course) => (
        <CourseBox key={course} />
      ))}
    </div>
  );
}
