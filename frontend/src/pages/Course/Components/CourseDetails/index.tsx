import "./CourseDetails.css";

//mui
import { ReactNode, useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

//local-files
import Overview from "../Overview";
import Sessions from "../Sessions";
import Teacher from "../Teacher";
import Review from "./../Review";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 order-1 order-md-0">
              <div className="course-details__content">
                <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
                  <Tabs
                    className="tabs d-flex justify-content-evenly align-items-center"
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab
                      className="tabs__item"
                      label="توضیحات"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className="tabs__item"
                      label="جلسات"
                      {...a11yProps(1)}
                    />
                    <Tab
                      className="tabs__item"
                      label="مدرس"
                      {...a11yProps(2)}
                    />
                    <Tab
                      className="tabs__item"
                      label="نظرات"
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </Box>
                <ul
                  className="tabs d-flex justify-content-evenly align-items-center d-none"
                  id="tabs">
                  <li className="tabs__item tabs__item--active">توضیحات</li>
                  <li className="tabs__item">جلسات</li>
                  <li className="tabs__item">مدرس</li>
                  <li className="tabs__item">نظرات</li>
                  <div className="tabs__line"></div>
                </ul>

                <Box sx={{ width: "100%" }}>
                  <CustomTabPanel value={value} index={0}>
                    <Overview />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Sessions />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <Teacher />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <Review />
                  </CustomTabPanel>
                </Box>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="course-sidebar">
                <video className="course-overview__video" controls>
                  <source
                    src="src/assets/videos/course/video (720p).mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="course-price">
                  <span className="course-price__new-price">195,000 تومان</span>
                  <span className="course-price__price">218,000 تومان</span>
                  <span className="course-price__discount-percentage">20%</span>
                </div>
                <button className="course__register-btn">
                  ثبت نام در دوره
                </button>

                <ul className="course__details-menu">
                  <li className="course__details-menu-item">
                    <i className="fa-regular fa-clock course__details-menu-icon"></i>
                    <span className="course__details-menu-title">زمان</span>
                    <span className="course__details-menu-info">5:40:35</span>
                  </li>
                  <li className="course__details-menu-item">
                    <i className="fa-solid fa-users course__details-menu-icon"></i>
                    <span className="course__details-menu-title">
                      دانشجویان
                    </span>
                    <span className="course__details-menu-info">1,745</span>
                  </li>
                  <li className="course__details-menu-item">
                    <i className="fa-solid fa-layer-group course__details-menu-icon"></i>
                    <span className="course__details-menu-title">سطح دوره</span>
                    <span className="course__details-menu-info">متوسط</span>
                  </li>
                  <li className="course__details-menu-item">
                    <i className="fa-solid fa-file-lines course__details-menu-icon"></i>
                    <span className="course__details-menu-title">کوییز</span>
                    <span className="course__details-menu-info">14</span>
                  </li>
                  <li className="course__details-menu-item">
                    <i className="fa-solid fa-stamp course__details-menu-icon"></i>
                    <span className="course__details-menu-title">مدرک</span>
                    <span className="course__details-menu-info">دارد</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
