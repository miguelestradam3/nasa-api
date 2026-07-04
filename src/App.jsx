import Header from "./components/Header";
import Main from "./components/Main";
import ImageDetails from "./pages/ImageDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header title="NASA Explorer" />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </>
  );
}

export default App;