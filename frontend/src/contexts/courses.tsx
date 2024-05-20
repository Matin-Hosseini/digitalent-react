import { createContext, useContext, useEffect, useState } from "react";
import allCourses from "../data/courses";
import useLocalStorage from "../hooks/localstorage";
import { toast } from "react-toastify";
import { Course } from "../types/Course";
import removeDuplicates from "./../utils/removeDuplicates";

type CoursesContextType = {
  courses: Course[];
  wishlistCourses: Course[];
  cartCourses: Course[];
  addCourseToWishlist: (id: React.Key | any) => void;
  addAllWishlistCoursesToCart: () => void;
  removeCourseFromWishlist: (id: React.Key | any) => void;
  addCourseToCart: (id: React.Key | any) => void;
  removeCourseFromCart: (id: React.Key | any) => void;
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
  const [cartCourses, setCartCourses] = useState<Course[] | []>(
    storageCartCourses || []
  );

  // functions
  const addCourseToWishlist = (id: string) => {
    const targetCourse: any = courses.find((course) => course.id === id);

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

    const newCourseCarts = removeDuplicates(newCourseCartsWithDuplicate);

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

  const addCourseToCart = (id: React.Key) => {
    const targetCourse: any = courses.find(
      (course: Course) => course.id === id
    );

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

    setCartCourses((prev) => removeDuplicates([...prev, targetCourse]));
    setStorageCartCourses(
      removeDuplicates([...storageCartCourses, targetCourse])
    );

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

  if (!context)
    throw new Error("CoursesContext must be used in CoursesProvider");

  return context;
};
