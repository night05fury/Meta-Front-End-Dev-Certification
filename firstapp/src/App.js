 import classes from './App.module.css';
import Card from './components/CardFILE.js';
function App() {

  const list = [
   {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    },
  ];
return <div className={classes.bgdark}>
   { list.map((item) => {
      return <div className={classes.text} id={item.id}> <Card name={item.name} /> </div>
   })  }
</div>;
}

export default App;

