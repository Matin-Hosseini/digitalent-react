import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CiPlay1, CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";

const accordionStyles = {
  backgroundColor: "var(--section-bg)",
  color: "var(--text-color)",
  boxShadow: "none",
  fontSize: "1.6rem",
  position: "relative",
  "&::before": {
    position: "absolute",
    content: '""',
    width: "1rem",
    height: "4px",
    borderRadius: "10rem",
    background: "var(--purple)",
    right: "0",
    top: "0",
  },
  // "& .MuiAccordionSummary-content": {
  //   width: "100%",
  // },
};

export default function CourseAccordion({ expanded }: { expanded: boolean }) {
  return (
    <ContainerBox className={"p-3"}>
      <Accordion sx={accordionStyles} defaultExpanded={expanded}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <div className="flex items-center justify-between w-full">
            <h3>یادگیری css</h3>
            <span className="text-[var(--yellow)] bg-yellow-50 text-lg px-4 py-2 rounded-md">
              120 دقیقه
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="space-y-4">
            <li className="flex items-center justify-between border border-solid border-gray-500 p-6 rounded-lg">
              <Link to={"/course"} className="flex items-center gap-4">
                <CiPlay1 className="text-[var(--green)]" />
                آموزش برنامه نویسی css-in-js
              </Link>

              <div className="hidden xs:flex items-center gap-4">
                <span>رایگان</span>
                <div className="text-[var(--purple)] bg-purple-50 flex items-center gap-3 px-4 py-2 rounded-md text-base">
                  <CiTimer />
                  <span>22 دقیقه</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border border-solid border-gray-500 p-6 rounded-lg">
              <Link to={"/course"} className="flex items-center gap-4">
                <CiPlay1 className="text-[var(--green)]" />
                آموزش برنامه نویسی css-in-js
              </Link>

              <div className="hidden xs:flex items-center gap-4">
                <span>رایگان</span>
                <div className="text-[var(--purple)] bg-purple-50 flex items-center gap-3 px-4 py-2 rounded-md text-base">
                  <CiTimer />
                  <span>22 دقیقه</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border border-solid border-gray-500 p-6 rounded-lg">
              <Link to={"/course"} className="flex items-center gap-4">
                <CiPlay1 className="text-[var(--green)]" />
                آموزش برنامه نویسی css-in-js
              </Link>

              <div className="hidden xs:flex items-center gap-4">
                <span>رایگان</span>
                <div className="text-[var(--purple)] bg-purple-50 flex items-center gap-3 px-4 py-2 rounded-md text-base">
                  <CiTimer />
                  <span>22 دقیقه</span>
                </div>
              </div>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </ContainerBox>
  );
}
