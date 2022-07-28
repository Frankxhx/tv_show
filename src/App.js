import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Single from "./pages/Single";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />}  />
          <Route exact path='/singleshow/:id' element={<Single /> } />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
