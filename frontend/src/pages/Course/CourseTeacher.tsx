import { PiChalkboardTeacher } from "react-icons/pi";
import UserInfoBox from "../../components/UserInfoBox";

export default function CourseTeacher() {
  return (
    <UserInfoBox
      className={""}
      title={"مدرس دوره"}
      icon={<PiChalkboardTeacher />}
      color={"green"}
    />
  );
}
