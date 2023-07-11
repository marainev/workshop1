// import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside';
// import Content from './components/BusinessCard';
// import Data from './components/Data';
import Footer from './components/Footer';
import Header from './components/Header';
// import Hello from './components/Hello';
import Main from './components/Main';
import Nav from './components/Nav';
import Section from './components/Section';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Main/>
      <Section/>
      <Aside/>
      <Footer/>
      
    </div>
  );
}

export default App;
