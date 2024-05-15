import { createContext, useContext, useEffect, useState } from "react";
import allCourses from "../data/courses";
import useLocalStorage from "../hooks/localstorage";
import { toast } from "react-toastify";

type CoursesContextType = {
  courses: Course[];
  wishlistCourses: Course[];
  cartCourses: Course[];
  addCourseToWishlist: (id: string) => void;
  addAllWishlistCoursesToCart: () => void;
  removeCourseFromWishlist: (id: string) => void;
  addCourseToCart: (id: string) => void;
  removeCourseFromCart: (id: string) => void;
};

export const CoursesContext = createContext<CoursesContextType | null>(null);

export default function CoursesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // custom hooks
  const [storageWishlistCourses, setStorageWishlistCourses] =
    useLocalStorage("wishlistCourses");
  const [storageCartCourses, setStorageCartCourses] =
    useLocalStorage("cartCourses");

  const [courses, setCourses] = useState<Course[]>([]);
  const [wishlistCourses, setWishlistCourses] = useState<Course[]>(
    storageWishlistCourses || []
  );
  const [cartCourses, setCartCourses] = useState<Course[]>(
    storageCartCourses || []
  );

  // functions
  const addCourseToWishlist = (id: string) => {
    const targetCourse = courses.find((course) => course.id === id);

    if (!storageWishlistCourses) {
      setWishlistCourses([targetCourse]);
      setStorageWishlistCourses([targetCourse]);
      toast("دوره به لیست علاقه مندی افزوده شد.");
      return;
    }

    const courseExists = wishlistCourses.some(
      (course) => course.id === targetCourse.id
    );

    if (courseExists) {
      toast("دوره در لیست علاقه مندی شما وجود دارد.");
      return;
    }

    setWishlistCourses((prev) => [...prev, targetCourse]);
    setStorageWishlistCourses([...storageWishlistCourses, targetCourse]);
    toast("دوره به لیست علاقه مندی افزوده شد.");
  };

  const addAllWishlistCoursesToCart = () => {
    const newCourseCartsWithDuplicate = [...wishlistCourses, ...cartCourses];

    const newCourseCarts = newCourseCartsWithDuplicate.reduce(
      (acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      },
      []
    );

    setCartCourses(newCourseCarts);
    setStorageCartCourses(newCourseCarts);

    // cleaning wishlist courses
    setWishlistCourses([]);
    setStorageWishlistCourses([]);
    toast("دوره ها به سبد خرید انتقال داده شدند.");
  };

  const removeCourseFromWishlist = (id: string) => {
    setWishlistCourses((prevCourses: Course[]) =>
      prevCourses.filter((course: Course) => course.id !== id)
    );

    setStorageWishlistCourses(
      storageWishlistCourses.filter((course: Course) => course.id !== id)
    );

    toast("دوره از لیست علاقه مندی حذف شد.");
  };

  const addCourseToCart = (id: string) => {
    const targetCourse = courses.find((course: Course) => course.id === id);

    if (!storageCartCourses) {
      setCartCourses([targetCourse]);
      setStorageCartCourses([targetCourse]);

      //removing course from wishlist
      setWishlistCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );

      //removing course from localstorage wishlist
      setStorageWishlistCourses(
        storageWishlistCourses.filter((course: Course) => course.id !== id)
      );

      toast("دوره به سبد خرید افزوده شد.");
      return;
    }

    setCartCourses((prev) => [...prev, targetCourse]);
    setStorageCartCourses([...storageCartCourses, targetCourse]);

    //removing course from wishlist
    setWishlistCourses((prevCourses: Course[]) =>
      prevCourses.filter((course: Course) => course.id !== id)
    );

    //removing course from localstorage wishlist
    setStorageWishlistCourses(
      storageWishlistCourses.filter((course: Course) => course.id !== id)
    );
    toast("دوره به سبد خرید افزوده شد.");
  };

  const removeCourseFromCart = (id: string) => {
    setCartCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );
    setStorageCartCourses(
      storageCartCourses.filter((course: Course) => course.id !== id)
    );
    toast("دوره از سبد خرید حذف شد.");
  };

  // lifecycle
  useEffect(() => {
    setCourses(allCourses);
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        wishlistCourses,
        cartCourses,
        addCourseToWishlist,
        addAllWishlistCoursesToCart,
        removeCourseFromWishlist,
        addCourseToCart,
        removeCourseFromCart,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);
  console.log(context);

  if (!context)
    return new Error("CoursesContext must be used in CoursesProvider");

  return context;
};
