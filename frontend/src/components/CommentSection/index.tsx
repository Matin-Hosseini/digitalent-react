import { LiaComment } from "react-icons/lia";
import ContainerBox from "../ContainerBox";
import ContainerBoxTitle from "../ContainerBoxTitle";
import CommentBox from "./CommentBox";

export default function CommentSection() {
  return (
    <ContainerBox className={"p-5"}>
      <ContainerBoxTitle title={"نظرات کاربران"} icon={<LiaComment />} color="yellow" />
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
