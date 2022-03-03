import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "../pages/Create";

const AppRoutes = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default {
  AppRoutes,
};
