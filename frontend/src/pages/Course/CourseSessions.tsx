import CourseAccordion from "../../components/CourseAccordion";

export default function CourseSessions() {
  return (
    <div className="space-y-3">
      <CourseAccordion expanded />
      <CourseAccordion expanded={false} />
      <CourseAccordion expanded={false} />
      <CourseAccordion expanded={false} />
    </div>
  );
}
