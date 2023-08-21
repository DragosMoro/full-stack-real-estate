import Website from "./pages/Website";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Properties from "./pages/properties/Properties";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>

  );
};

export default App;
