import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Tutorials from './Components/Tutorials/Tutorials';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/tutorials" component={Tutorials} />
      <Footer />
    </div>
  );
}

export default App;
