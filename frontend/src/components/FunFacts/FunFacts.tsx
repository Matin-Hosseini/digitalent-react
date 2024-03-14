import "./FunFacts.css";

//icons
import { PiGraduationCap, PiClockAfternoonBold } from "react-icons/pi";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FunFacts() {
  return (
    <section className="funfacts">
      {/* <Container>
        <Row>
          <Col sm={6} md={3}>
            <div className="funfact mb-5 mb-md-0">
              <div className="funfact__icon">
                <PiGraduationCap />
              </div>
              <div>
                <span className="funfact__count" data-count="95">
                  0
                </span>
                هزار
              </div>
              <h2 className="funfact__title">دانشجو</h2>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="funfact mb-5 mb-md-0">
              <div className="funfact__icon">
                <PiClockAfternoonBold />
              </div>
              <div>
                <span className="funfact__count" data-count="278">
                  0
                </span>
                هزار
              </div>
              <h2 className="funfact__title">دقیقه دوره</h2>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="funfact mb-5 mb-md-0">
              <div className="funfact__icon">
                <FaRegFaceSmileWink />
              </div>
              <div>
                <span className="funfact__count" data-count="85">
                  0
                </span>
                %
              </div>
              <h2 className="funfact__title">رضایت از دوره ها</h2>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="funfact mb-5 mb-md-0">
              <div className="funfact__icon">
                <IoPeopleOutline />
              </div>
              <div>
                <span className="funfact__count" data-count="69">
                  0
                </span>
              </div>
              <h2 className="funfact__title">مدرس محبوب</h2>
            </div>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}
