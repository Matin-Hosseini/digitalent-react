import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineInsertComment, MdOutlineSubtitles } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import CommentSection from "../../components/CommentSection";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import CourseSessions from "./CourseSessions";
import CourseTeacher from "./CourseTeacher";

import { CiLink } from "react-icons/ci";
import { FaLevelUpAlt } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineCategory, MdTypeSpecimen } from "react-icons/md";
import { PiPercentBold, PiSticker } from "react-icons/pi";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabInfo(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const tabStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "6px",
  color: "var(--text-color)",
  fontFamily: "vasir",
  fontSize: "1.5rem",
  "&.Mui-selected": {
    color: "var(--purple)",
  },
  "& .MuiTab-iconWrapper": {
    margin: "0",
  },
};

export default function CourseDetails() {
  const [value, setValue] = useState(0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("لینک با موفقیت کپی شد.");
  };

  return (
    <>
      <div>
        <ContainerBox className={""}>
          <Tabs
            variant="scrollable"
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            aria-label="basic tabs example"
            sx={{
              fontFamily: "vasir",
              color: "var(--purple)",
              ".MuiTabs-indicator": {
                background: "var(--purple)",
              },
            }}
          >
            <Tab
              label="اطلاعات دوره"
              sx={tabStyles}
              icon={<IoInformationCircleOutline />}
            />
            <Tab label="جلسات" sx={tabStyles} icon={<SiGoogleclassroom />} />
            <Tab
              label="مدرس"
              sx={tabStyles}
              icon={<LiaChalkboardTeacherSolid />}
            />
            <Tab
              label="نظرات کاربران"
              sx={tabStyles}
              icon={<MdOutlineInsertComment />}
            />
          </Tabs>
        </ContainerBox>

        <div className="grid-system mt-3">
          <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
            <TabInfo value={value} index={0}>
              <div className="space-y-3">
                <ContainerBox className={"p-5 mb-3"}>
                  <div>
                    <ContainerBoxTitle
                      title={"توضیحات دوره"}
                      icon={<MdOutlineSubtitles />}
                      color={"purple"}
                    />
                    <p>
                      برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.برای تغییر این متن بر روی
                      دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید
                      سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                      است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.برای تغییر این متن بر روی
                      دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید
                      سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                      است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.برای تغییر این متن بر روی
                      دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید
                      سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                      است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.برای تغییر این متن بر روی
                      دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید
                      سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                      است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.برای تغییر این متن بر روی
                      دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید
                      سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                      است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </ContainerBox>
                <CourseSessions />
                <CourseTeacher />
                <CommentSection />
              </div>
            </TabInfo>

            <TabInfo value={value} index={1}>
              <CourseSessions />
            </TabInfo>

            <TabInfo value={value} index={2}>
              <CourseTeacher />
            </TabInfo>

            <TabInfo value={value} index={3}>
              <CommentSection />
            </TabInfo>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
            <div className="sticky top-4 space-y-2">
              <ContainerBox className={"p-4"}>
                <ContainerBoxTitle
                  title={"برخی ویژگی های دوره"}
                  color="blue"
                  icon={""}
                />

                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center text-black bg-[var(--bg-gray)] rounded-md ">
                      <FaLevelUpAlt />
                    </div>
                    <div className="flex items-center gap-3">
                      <h4>سطح دوره:</h4>
                      <span>پیشرفته</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center text-black bg-[var(--bg-gray)] rounded-md ">
                      <PiPercentBold />
                    </div>
                    <div className="flex items-center gap-3">
                      <h4>نوع دوره:</h4>
                      <span>آنلاین، دانلودی</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center text-black bg-[var(--bg-gray)] rounded-md ">
                      <MdTypeSpecimen />
                    </div>
                    <div className="flex items-center gap-3">
                      <h4>مدرک تخصصی:</h4>
                      <span>دارد</span>
                    </div>
                  </li>
                </ul>
              </ContainerBox>
              <ContainerBox className={"p-4"}>
                <ContainerBoxTitle
                  title={"لینک کوتاه دوره"}
                  icon={<CiLink />}
                  color={"purple"}
                />

                <div className="flex flex-row-reverse items-center gap-4 p-3 rounded-lg bg-gray-300 dark:bg-gray-600 ">
                  <button
                    className="bg-[var(--purple)] p-3 rounded-lg"
                    onClick={() =>
                      copyToClipboard("https://bamina.ir/donya=73")
                    }
                  >
                    <IoCopyOutline />
                  </button>
                  <p>https://bamina.ir/donya/?p=73</p>
                </div>
              </ContainerBox>

              <ContainerBox className={"p-4"}>
                <ContainerBoxTitle
                  title={"برچسب ها"}
                  icon={<PiSticker />}
                  color={"green"}
                />
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش وب
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش بکند
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش اسمبلی
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش وب
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش وب
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش وب
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش وب
                  </Link>
                </div>
              </ContainerBox>

              <ContainerBox className={"p-4"}>
                <ContainerBoxTitle
                  title={"دسته بندی"}
                  icon={<MdOutlineCategory />}
                  color="blue"
                />
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش فتوشاپ
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش لینکدین
                  </Link>
                  <Link
                    to={"/"}
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-500 "
                  >
                    آموزش شبکه
                  </Link>
                </div>
              </ContainerBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
