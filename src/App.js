import './App.css';
import pokemons from "./pokemons";
import Card from './components/Card/Card';
import Img from './assets/image/pokemon.png';
function App() {
  return (
    <>
      <div className='pokemons pb-10'>
        <div className='pokemons__wrapper flex flex-col items-center'>
              <h1 className='pokemons__title text-white text-center text-7xl mb-2'>
                  <img src={Img} alt="Pokemons" width="500" height="300" />
              </h1>
              <ul className='pokemons__list w-11/12 flex flex-wrap justify-center gap-5'>
                 {
                   pokemons.map(item => {
                        return <Card key={item.id} data={item} />
                   })
                 }
              </ul>
        </div>
      </div>
    </>
  );
}

export default App;
