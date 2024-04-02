import ContainerBox from "../ContainerBox";
import ContainerBoxTitle from "../ContainerBoxTitle";
import CommentBox from "./CommentBox";

export default function CommentSection() {
  return (
    <ContainerBox className={"p-5"}>
      <ContainerBoxTitle title={"نظرات کاربران"} />
      <div className="mt-5 divide-y">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
    </ContainerBox>
  );
}
