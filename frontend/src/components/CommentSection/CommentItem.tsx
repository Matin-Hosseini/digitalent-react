import CommentDetails from "./CommentDetails";
const replies = [1, 2];

export default function CommentItem() {
  return (
    <div className="border-solid p-8 border-gray-300 dark:border-gray-900">
      <CommentDetails reply={false} />
      <div className="my-6 rounded-lg space-y-4">
        {replies.map((reply) => (
          <CommentDetails key={reply} reply />
        ))}
      </div>
    </div>
  );
}
