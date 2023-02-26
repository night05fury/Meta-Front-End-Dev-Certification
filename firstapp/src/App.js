import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Intro2 from './components/Intro2';
import Intro1 from './components/Intro1';
import Nav from './components/Nav';
import Promo from './components/Promo';


function Heading() {
  return (<h1>This is an h1 heading</h1>)
}

function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
      <Nav/>
      <Promo/>
      <Intro2/>
      <Intro1/>
      <Footer/>
    </div> 
  ); 
} 
 
export default App;

