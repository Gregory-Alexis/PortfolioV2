import React from "react";

const Header = () => {
  return (
    <div>
      <div className="relative flex justify-center mt-12">
        <div className="bg-secondary h-64 w-64 rounded-full z-10"></div>
      </div>
      <div className="text-center  mb-24">
        <h1 className="text-secondary  mt-5">Développeur Front React</h1>
        <p className="mt-2 text-4xl text-main">
          Grégory <span className="text-special">Alexis</span>
        </p>
        <button className="mt-5 text-main border px-6 py-2 rounded-full border-special hover:bg-special hover:text-dark hover:font-bold transition-all duration-200 ease-in-out">
          <a href="mailto:gregoryalexis.dev@gmail.com">Contact me</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
