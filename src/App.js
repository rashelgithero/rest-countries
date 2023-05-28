
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Components/Country/Country';
import NoMatch from './Components/NoMatch/NoMatch';
import CountriesDetails from './Components/CountriesDetails/CountriesDetails';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/countries' element={<Country></Country>}></Route>
        <Route path='/' element={<Country/>}></Route>
        <Route path='*' element= {<NoMatch/>}></Route>
        <Route path='country/name/:countryName' element={<CountriesDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>

    
  );
}

export default App;
