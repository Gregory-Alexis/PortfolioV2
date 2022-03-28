import React from "react";
import NavBar from "../../components/NavBar";
import BiggestProject from "../../components/ProjetComponent/BiggestProject";
import GoogleFontApp from "../../components/ProjetComponent/GoogleFontApp";
import GradientApp from "../../components/ProjetComponent/GradientApp";
import MeteoApp from "../../components/ProjetComponent/MeteoApp";
import MovieApp from "../../components/ProjetComponent/MovieApp";
import TodoList from "../../components/ProjetComponent/TodoListApp";

const Projets = () => {
  return (
    <div className="bg-main min-h-screen">
      <NavBar />
      <BiggestProject />
      <div className="flex text-center flex-col items-center p-4">
        <h1 className=" text-main text-xl border-b-2 w-full my-5 pb-2">
          Autre Projets
        </h1>
        <GradientApp />
        <MeteoApp />
        <MovieApp />
        <GoogleFontApp />
        <TodoList />
      </div>
    </div>
  );
};

export default Projets;
