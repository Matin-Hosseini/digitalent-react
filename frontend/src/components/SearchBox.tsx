import { IconButton } from "@mui/material";
import ContainerBox from "./ContainerBox";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { DebouncedFunc, debounce } from "lodash";

type SearchBoxProps = {
  placeholder?: string;
  onSearchChange?: DebouncedFunc<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >;
};

export default function SearchBox({ placeholder }: SearchBoxProps) {
  const [search, setSearch] = useSearchParams();

  const searchHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: text } = e.target;

    if (text.length === 0) {
      search.delete("search");
      setSearch(search, { replace: true });
    } else {
      search.set("search", text);
      setSearch(search, { replace: true });
    }
  }, 350);

  return (
    <ContainerBox className={"p-3"}>
      <div className="flex items-center justify-between">
        <input
          defaultValue={search.get("search") ?? ""}
          onChange={searchHandler}
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
