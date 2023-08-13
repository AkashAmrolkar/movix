import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import Explore from "../pages/Explore";
import Searchresult from "../pages/Searchresult";
import PageNotFound from "../pages/PageNotFound";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Router = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="/search/:query" element={<Searchresult />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </>
    
  )
}

export default Router