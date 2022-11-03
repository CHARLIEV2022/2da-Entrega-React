
import { useState, useEffect } from "react" 
import compuApi from "../../APIrest/compuApi" 
import Card from "../../components/Home/Card/Card"
import '../Home/Home.css';
//import { Navbar } from '../../components/Navbar';
//import { ItemListContainer } from '../../components/ItemListContainer';

function App() {  
  
  const [filter, setFilter] = useState("");  
  const [characters, setCharacters] = useState([]);

  const getImages = async () => {
    const characters = await compuApi();
    setCharacters(characters);
  };

  useEffect(() => {
    getImages();
  }, []);    

      

    /* esto es lo que del primer envio nuestro    
    <div className="App">      
      
      <header>
        <Navbar />              
      </header>     
     
     <ItemListContainer />     
     
    </div>
*/

  return (
  
  <div className='principal-container'>
      <h1>Characters</h1>

      <input id="filter" name="filter" type="text" value={filter} 
      onChange={(event) => setFilter(envet.target.value)}
      />

      <div className='cards-container'>
          {characters
          .filter((personaje) => personaje.character.includes(filter))
          .map((character, i) => (          
          
              <Card key={i}
                name = {character.character}
                image = {character.image}
                quote = {character.quote}
                />
          ))}
      </div>
    </div>  
  );
}

export default Home;
