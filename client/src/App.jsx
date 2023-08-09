import Registration from "./components/Registration/Registration";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from "./components/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
            <div className="wrap">
              <Routes >
                <Route path="/registration" Component={Registration} />
                <Route path="/login" Component={Login} />
              </Routes >
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
