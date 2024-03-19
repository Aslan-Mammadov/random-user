import "./App.css";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { fetchUser } from "./services/random-user";

function App() {
  const [randomUser, setRandomUser] = useState("");
  
  const handleChange = async () => {
   let res=await fetchUser();
    setRandomUser(res);
  };
  useEffect(() => {
    handleChange();
  },[])

  return (
    <div className="App">
    
      <Contact randomUser={randomUser}/>
      <input type="button" value="change" onClick={handleChange} />
    </div>
  );
}

export default App;
