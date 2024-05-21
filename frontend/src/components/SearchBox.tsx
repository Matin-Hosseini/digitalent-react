import { IconButton } from "@mui/material";
import ContainerBox from "./ContainerBox";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { DebouncedFunc } from "lodash";

type SearchBoxProps = {
  placeholder?: string;
  onSearchChange: DebouncedFunc<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >;
};

export default function SearchBox({
  placeholder,
  onSearchChange,
}: SearchBoxProps) {
  const [search] = useSearchParams();

  return (
    <ContainerBox className={"p-3"}>
      <div className="flex items-center justify-between">
        <input
          defaultValue={search.get("search") ?? ""}
          onChange={onSearchChange}
          type="text"
          placeholder={placeholder}
          className="bg-transparent pr-3 text-xl w-80"
        />
        <IconButton>
          <BiSearchAlt className="text-color" />
        </IconButton>
      </div>
    </ContainerBox>
  );
}
