import { FormGroup } from "@mui/material";
import categories from "../data/catgegories";
import { category } from "../types/Category";
import { useSearchParams } from "react-router-dom";
import { Checkbox, FormControlLabel } from "./mui/customs";

export default function CategoryCheckBoxes() {
  const [search, setSearch] = useSearchParams();

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryValue: category["value"]
  ) => {
    let categories = search.get("cat")?.split(",") ?? [];
    const checked = e.target.checked;

    if (checked) {
      categories.push(categoryValue);
    } else {
      categories = categories.filter((category) => category !== categoryValue);
    }

    if (categories.length === 0) {
      search.delete("cat");
    } else {
      search.set("cat", categories.join(","));
    }

    setSearch(search);
  };

  return (
    <FormGroup>
      {categories.map((category: category) => (
        <FormControlLabel
          key={category.id}
          control={
            <Checkbox
              checked={search.get("cat")?.split(",").includes(category.value)}
              onChange={(e) => handleCategoryChange(e, category.value)}
            />
          }
          label={category.name}
        />
      ))}
    </FormGroup>
  );
}
