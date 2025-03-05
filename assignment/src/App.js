import {BrowserRouter,Routes,Route} from 'react-router'
import Nameletter from './nameletter';
import Apicall from './apicall';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/name' element={<Nameletter/>} />
      <Route path='/api' element={<Apicall/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
