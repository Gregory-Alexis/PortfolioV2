import Greg from "../images/greg.jpg";

const Header = () => {
  return (
    <div className="p-4 ">
      <div className="flex justify-center mt-12 w-full">
        <div className="bg-secondary h-60 w-60 rounded-full z-10  flex justify-center items-center">
          <img
            src={Greg}
            alt="gregory alexis"
            className="rounded-full h-52 w-52"
          />
        </div>
      </div>

      <div className="mb-24 flex flex-col items-center">
        <h1 className="text-secondary mt-5">Développeur Front React</h1>
        <p className="mt-2 text-4xl text-main">
          Grégory <span className="text-special">Alexis</span>
        </p>
        <p className="mt-5 text-main flex justify-center">
          Hello, Moi c'est Grégory développeur junior spécialisé en React.
          <br />
          Reconvertit depuis un peu plus d'un an maintenant, j'ai commencé par
          apprendre les bases via des plateformes en ligne comme OpenClassRomm,
          CodeCademy. Ensuite, pour pouvoir pousser mon aprrentissage au niveau
          suivant, j'ai effectué une formation de 6 mois ou j'y ai découvert
          React, Node et Solidity. Aujourd'hui, par passion mais aussi dans le
          but de trouver un emploi, je réalise différent projet que vous pouvez
          consulter ici même.
        </p>
        <button className="mt-5 text-main border px-6 py-2 rounded-full border-special hover:bg-special hover:text-dark hover:font-bold transition-all duration-200 ease-in-out">
          <a href="mailto:gregoryalexis.dev@gmail.com">Contactez moi</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
