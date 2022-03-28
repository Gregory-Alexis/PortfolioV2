import Meteo from "../../images/Meteo.png";
import ProjectCustom from "./ProjectCustom";

const MeteoApp = () => {
  return (
    <ProjectCustom
      src={Meteo}
      alt="Application météo"
      hrefNetlify="https://projet-meteo.netlify.app/"
      hrefGithub="https://github.com/Westindiess/WeatherApp"
      titre="Météo"
    />
  );
};

export default MeteoApp;
