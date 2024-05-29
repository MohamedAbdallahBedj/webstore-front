import React from "react";
import "./App.css";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && <AppRouter />}
    </>
  );
}

export default App;
