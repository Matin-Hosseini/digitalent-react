import { FormGroup } from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import Icon from "../../components/Icon";
import { Checkbox, FormControlLabel } from "../../components/mui/customs";

export default function ArticleCategory() {
  return (
    <main className="container my-20">
      <div className="grid-system">
        <div className="col-span-12 lg:col-span-4  xl:col-span-3 2xl:col-span-2">
          <div className="sticky top-3 space-y-3">
            <ContainerBox className={"p-3"}>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="چه مقاله ای دوست داری؟"
                  className="bg-transparent pr-3 text-xl w-80"
                />
                <Icon>
                  <BiSearchAlt className="text-color" />
                </Icon>
              </div>
            </ContainerBox>
            <ContainerBox className={"p-3"}>
              <ContainerBoxTitle
                title={"دسته بندی"}
                color={"purple"}
                icon={""}
              />

              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="برنامه نویسی" />
                <FormControlLabel control={<Checkbox />} label="وردپرس" />
                <FormControlLabel control={<Checkbox />} label="عکاسی" />
              </FormGroup>
            </ContainerBox>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 2xl:col-span-10">
          <section className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3"></section>
        </div>
      </div>
    </main>
  );
}
