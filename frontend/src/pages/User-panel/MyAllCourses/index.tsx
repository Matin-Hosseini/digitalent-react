import CourseBox from "../Components/CourseBox";

const coursesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 7, 2, 8, ,];

export default function Courses() {
  return (
    <div className="row">
        {coursesData?.map(course => <CourseBox key={course}/>)}
    </div>
  );
}
