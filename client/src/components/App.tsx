import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />}></Route>
    </Routes>
  );
};

export default App;