const ProjectCustom = ({ src, alt, hrefNetlify, hrefGithub, titre }) => {
  return (
    <div className="py-4">
      <div className="relative">
        <img src={src} alt={alt} className="rounded-lg" />
        <div className="absolute w-full h-full top-0 hover:bg-special  hover:bg-opacity-50 transition-all duration-200 ease-in-out rounded-lg">
          <a
            href={hrefNetlify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center h-full text-main text-4xl opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out"
          >
            {titre}
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a
          href={hrefGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-main mt-4  transition-all duration-200 ease-in-out hover:scale-105 hover:text-secondary"
        >
          Code source
        </a>
      </div>
    </div>
  );
};

export default ProjectCustom;
