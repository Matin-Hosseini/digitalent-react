import UserPanelCourseBox from "../../../components/UserPanelCourseBox";

const coursesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 7, 2, 8, ,];

export default function Courses() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {coursesData?.map((course) => (
        <UserPanelCourseBox key={course} />
      ))}
    </div>
  );
}
