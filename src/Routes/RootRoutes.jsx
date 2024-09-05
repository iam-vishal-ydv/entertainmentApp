import { NavBar } from "../Header/NavBar";
import Footer from '../Footer/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {HomeRoutes} from '../Routes/HomeRoutes'
import Movie from "../page/Movie/Movie";
import ShowInfo from "../page/ShowInfo/ShowInfo";
import TvShow from "../Page/Tv/TvShow";
import { useContext } from "react";
import { context } from "../Contaxt/ContaxtApi";
import Loader from "../Component/Loader/Loader";


function RootRoutes() {
  const {loading}=useContext(context)
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
           <Route path="/" element={<HomeRoutes/>}/>
           <Route path="/showinfo/:id"  element={loading ? <Loader /> : <ShowInfo />}/>
           {/* <Route path="/showinfo/:id"  element={loading ? <Loader /> : <ShowInfo reqFor={"tv"} />}/> */}
           <Route path="/movie" element={<Movie/>}/>
           <Route path="/tv-show" element={<TvShow/>}/>
        </Routes>
         {/* <Footer/> */}
      </BrowserRouter>
      
    </>
  );
}

export default RootRoutes;
