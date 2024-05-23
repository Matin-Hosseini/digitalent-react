import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
// import { Article } from "../types/Article";
import profilePic from "./../assets/images/profile.jpg";

//react-icons

export default function BlogBox({
  cover,
  title,
  des,
  author,
  short_name,
  createdAt,
}: any) {
  return (
    <>
      <ContainerBox className="p-3">
        <article>
          <Link to={`/article/${short_name}`}>
            <img src={cover} alt="" className="rounded-lg mb-4 h-[16rem]" />
          </Link>
          <p className="text-[var(--yellow)] text-base">{createdAt}</p>
          <h2 className="text-2xl line-clamp-2 mt-3 mb-6 font-bold h-[4rem]">
            <Link to={`/article/${short_name}`}>{title}</Link>
          </h2>
          <p className="text-base text-[var(--gray)] mb-5 line-clamp-3 h-[4.5rem]">
            {des}
          </p>
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <h3 className="text-base">{author.name}</h3>
                <p className="text-sm text-[var(--gray)]">{author.joined_on}</p>
              </div>
              <img
                src={profilePic}
                alt={author.name}
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
        </article>
      </ContainerBox>
    </>
  );
}
