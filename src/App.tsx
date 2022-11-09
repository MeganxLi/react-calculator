import { useEffect } from "react";
import Calculator from "./page/Calculator";
import { useAppSelector } from "./store/hook";

function App() {
  const { darkTheme } = useAppSelector((state) => state.calculator);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return <Calculator />;
}

export default App;
