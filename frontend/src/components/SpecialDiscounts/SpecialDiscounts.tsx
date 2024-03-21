import { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

const specialDiscountsProducts: number[] = [1, 2, 3, 4];

export default function SpecialDiscounts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(specialDiscountsProducts);
  }, []);

  return (
    <section className="special-discount my-5">
      <div className="container">
        <SectionHeader title="تخفیفات ویژه" to={"/"} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <CourseBox key={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
