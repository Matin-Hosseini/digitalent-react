import { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const specialDiscountsProducts: number[] = [1, 2, 3, 4];

export default function SpecialDiscounts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(specialDiscountsProducts);
  }, []);

  return (
    <section className="special-discount my-5">
      <Container>
        <SectionHeader to={"/"} />
        <Row>
          {products?.map(() => (
            <Col sm={6} lg={4} xl={3}>
              <CourseBox />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
