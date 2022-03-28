import Netflix from "../../images/Netflix.png";

const BiggestProject = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-main text-xl border-b-2 mb-5 pb-2">
        Plus Gros Projet Réalisé
      </h1>
      <div>
        <div className=" relative">
          <img
            src={Netflix}
            alt="Netflix project group"
            className="rounded-lg"
          />
          <div className="absolute w-full h-full top-0 hover:bg-special  hover:bg-opacity-50 transition-all duration-200 ease-in-out rounded-lg">
            <a
              href="https://greg-netflix-clone.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-full text-main text-4xl opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out"
            >
              Netflix Clone
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <a
            href="https://github.com/Westindiess/Netflix-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center text-main m²t-4  transition-all duration-200 ease-in-out hover:scale-105 hover:text-secondary"
          >
            Code source
          </a>
        </div>
      </div>
    </div>
  );
};

export default BiggestProject;
