import { createContext, useEffect, useState } from "react";
import allCourses from "../data/courses";
import useLocalStorage from "../hooks/localstorage";
import { toast } from "react-toastify";
export const CoursesContext = createContext({});

export default function CoursesProvider({ children }) {
  //custom hooks
  const [storageWishlistCourses, setStorageWishlistCourses] =
    useLocalStorage("wishlistCourses");

  const [courses, setCourses] = useState([]);
  const [wishlistCourses, setWishlistCourses] = useState(
    storageWishlistCourses || []
  );
  const [cartCourses, setCartCourses] = useState([]);

  //functions
  const addCourseToWishlist = (id: string) => {
    const targetCourse = courses.find((course) => course.id === id);

    //whenever there is no wishlist course in the localstorage
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

  const removeCourseFromWishlist = (id) => {
    const targetCourse = courses.find((course) => course.id === id);

    setWishlistCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );

    setStorageWishlistCourses(
      storageWishlistCourses.filter((course) => course.id !== id)
    );

    toast("دوره از لیست علاقه مندی حذف شد.");
  };

  const addCourseToCart = () => {};

  //lifecycle
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
        removeCourseFromWishlist,
        addCourseToCart,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}
