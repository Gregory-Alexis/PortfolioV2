import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";


const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-main min-h-screen">
      <NavBar isActive={isActive} setIsActive={setIsActive}/>
      <Header />

    </div>
  );
}

export default App;
