import React from "react";
import Course from "../Componenets/Course";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://assignment-4-server-side-code.vercel.app/api/courses").then(
      (response) => response.json().then((data) => setCourse(data))
    );
  }, []);
  //const courses = useLoaderData();
  return (
    <>
      <div className="mt-5 p-2">
        <h1 className="text-2xl p-2 mb-1 font-semibold">Popular Courses</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course key={course.courseId} course={course}></Course>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
