import './App.css';
import ReactHeader from './components/ReactHeader';
import { BrowserRouter, Route } from "react-router-dom";
import Loaders from './components/Page/Loaders';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Route path='/' component={ReactHeader} exact />
        <Route path='/loaders' component={Loaders} />



      </BrowserRouter>


    </div>
  );
}

export default App;
