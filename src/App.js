import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import 'react-day-picker/dist/style.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Pages/SignUp/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews/MyReviews';
import MyHistory from './Pages/Dashboard/MyHistory/MyHistory';
import AllUser from './Pages/Dashboard/AllUser/AllUser';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='appointment' element={
            <RequireAuth><Appointment /></RequireAuth>
          } />
          <Route path='dashboard' element={
            <RequireAuth><Dashboard /></RequireAuth>
          }>
            <Route index element={<MyAppointment/>}></Route>
            <Route path='review' element={<MyReviews/>}></Route>
            <Route path='history' element={<MyHistory/>}></Route>
            <Route path='all-user' element={<AllUser/>}></Route>
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
