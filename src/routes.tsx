import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index.tsx";
import ItemPage from "./pages/ItemPage/index.tsx";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/item/:id"
            element={
              <>
                <ItemPage />
              </>
            }
          />
          {/* <Route path="/entrar" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
