import { useEffect, useState } from "react";
// import CourseBox from "../CourseBox/CourseBox";
// import SectionHeader from "../SectionHeader/SectionHeader";

//react-bootstrap

const specialDiscountsProducts: number[] = [1, 2, 3, 4];

export default function SpecialDiscounts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(specialDiscountsProducts);
  }, []);

  return (
    <section className="special-discount my-5">
      {/* <Container>
        <SectionHeader title="تخفیفات ویژه" to={"/"} />
        <Row>
          {products?.map((product) => (
            <Col key={product} sm={6} lg={4} xl={3}>
              <CourseBox />
            </Col>
          ))}
        </Row>
      </Container> */}
    </section>
  );
}
