import {BrowserRouter,Routes,Route} from 'react-router'
import Nameletter from './nameletter';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/name' element={<Nameletter/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
