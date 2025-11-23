import {Routes , Route, useLocation} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movies from './pages/Movies';
import MovieDetailes from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Layout from './pages/admin/Layout';
import AddShows from './pages/admin/AddShows';
import DashBoard from './pages/admin/DashBoard';
import ListShows from './pages/admin/ListShows';
import ListBookings from './pages/admin/ListBookings';


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return(
    <>
    
    <Toaster/>
    {!isAdminRoute && <NavBar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetailes/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-Bookings' element={<MyBookings/>}/>
      <Route path='/favorits' element={<Favorite/>}/>
      <Route path='/admin/*' element = {<Layout/>}>

      <Route index element = {<DashBoard/>}/>
      <Route path='add-shows' element = {<AddShows/>}/>
     
      <Route path='list-shows' element = {<ListShows/>}/>
      <Route path='list-bookings' element = {<ListBookings/>}/>



      </Route>
    </Routes>
     {!isAdminRoute && <Footer/>}

    </>
  )
}
  


export default App;