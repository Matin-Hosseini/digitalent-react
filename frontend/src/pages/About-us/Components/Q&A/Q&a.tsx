import { Accordion } from "react-bootstrap";
import AccordionItem from "../../../../components/Accordion/AccordionItem";

export default function QandA() {
  return (
    <>
      <section className="faq container">
        <h3 className="section-name text-center">سوالات متداول</h3>
        <h2 className="section-title text-center mb-5">
          عمده سوالاتی که ممکن است برایتان پیش بیاید
        </h2>
      <Accordion defaultActiveKey="0">
        <AccordionItem eventKey="0" />
        <AccordionItem eventKey="1" />
        <AccordionItem eventKey="2" />
      </Accordion>
      </section>
    </>
  );
}
