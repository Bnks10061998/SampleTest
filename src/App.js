import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contactus from './Components/Contactus';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Contactus2 from './Components/Contactus2';
import Footer1 from './Components/Footer1';
import Footer2 from './Components/Footer2';
import Footer3 from './Components/Footer3';
import Aboutus1 from './Components/Aboutus1';
import Aboutus2 from './Components/Aboutus2';
import Aboutus3 from './Components/Aboutus3';
import Aboutus4 from './Components/Aboutus4';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/Contactus' element={[<Contactus/>,<Contactus2/>,<Footer1/>,<Footer2/>,<Footer3/>]} />
      <Route path='/Aboutus' element={[<Aboutus1/>,<Aboutus2/>,<Aboutus3/>,<Aboutus4/>,<Footer1/>,<Footer2/>,<Footer3/>]}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
