import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [initialState, setInitialState] = useState();
  const getInitialData = async () => {
    const url = "http://localhost:6006/initialLoad";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const { data } = json;
      setInitialState(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="App">
      {initialState && (
        <>
          <header>{initialState.appName}</header>
          <main>{initialState.msg}</main>
        </>
      )}
    </div>
  );
}

export default App;
