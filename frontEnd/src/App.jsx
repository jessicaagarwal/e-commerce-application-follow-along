import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { LoginPage, SignupPage } from "./Routes.jsx"

import './App.css';
import Home from "./pages/Home.jsx";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Home" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;