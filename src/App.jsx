import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Filter from './components/Filter';

function App() {


  var list = []
  for (let i = 0; i < 10; i++) {
    list.push(<Card key={i}/>)
  }
  return (
    <div className={`App`}>
      <Nav/>
      <Hero/>
      <Filter/>

      <div className='m-auto items-center max-md:flex max-md:flex-col  grid xl:grid-cols-3 2xl:grid-cols-4 max-xl:grid-cols-2  justify-between  gap-6 mx-[10vw]'>
        {list.map((e,index)=>(
            <Card index={index} key={e}/>
          ))}
      </div>
    </div>
  );
}

export default App;
