import EventBox from "../EventBox/EventBox";
import "./LatestEvents.css";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const eventsData: number[] = [1, 2, 3, 4, 5, 6];

export default function LatestEvents() {
  return (
    <section className="latest-events my-5">
      <Container>
        <h3 className="latest-events__subtitle">
          وقتشه یه جا با هم یاد بگیریم
        </h3>
        <h2 className="latest-events__title">جدیدترین رویداد های دیجی تلنت</h2>

        <div className="latest-events__menu text-center my-5">
          <button data-category="all">همه</button>
          <button data-category="all">داغ</button>
          <button data-category="all">ویژه</button>
        </div>

        <Row className="mb-5">
          {eventsData?.map((event) => (
            <Col key={event} lg={6}>
              <EventBox />
            </Col>
          ))}
        </Row>
        <a href="#" className="section-header__link articles__link">
          <div className="section-header__icon-container m-0">
            <svg className="section-header__icon">
              <use href="#arrow-left"></use>
            </svg>
          </div>
          مشاهده همه
        </a>
      </Container>
    </section>
  );
}
