// import logo from './logo.svg';
import './App.css';
// import fb from './fbconfig';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import History from './Components/History';
import Home from './Components/Home';

// import NavBar from './Components/NavBar';

function App() {
  

  return (
    <>
     {/* <Router> */}
       <NavBar/>
       <Routes>
         {/* <Route path="/" element={<NavBar/>}> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/history" element={<History/>} />
         {/* </Route>   */}
       </Routes>
       {/* </Router> */}
      {/* <NavBar/>*/}
      {/* <History/>  */}
      {/* <NavBar/> */}
    </>
  );
}

export default App;
