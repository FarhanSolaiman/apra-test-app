import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhotosList from "./pages/photos-list/photos-list.component";
import PrivateTemplate from "./template/private/private.component";

const App = () => {
  return (
    <div className="mainContainer">
      <PrivateTemplate>
        <Routes>
          <Route path="/" element={<PhotosList />}></Route>
        </Routes>
      </PrivateTemplate>
    </div>
  );
};

export default App;
