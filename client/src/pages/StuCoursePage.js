import React from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Course from "../component/Main/Course";
import Rightside from "../component/Rightside/Rightside";

const StuCoursePage = () => {
  return (
    <div className="flex justify-center items-center font-body tracking-tighten">
      <div className="overflow-hidden wrapper grid md:grid-cols-md lg:grid-cols-x 2xl:grid-cols-xx">
        <Sidebar index={2} />
        <Course />
        <Rightside />
      </div>
    </div>
  );
};

export default StuCoursePage;
