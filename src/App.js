import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import RandomThoughts from './components/RandomThoughts';

function App() {
  return (
    <div className="App">
      <Header/>
      <RandomThoughts/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
