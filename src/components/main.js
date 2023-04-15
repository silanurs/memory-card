import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Acheron from '../images/Acheron.jpeg';
import Aisha from '../images/aisha.jpeg';
import Bloom from '../images/Bloom.jpeg';
import Brandon from '../images/brandon.jpeg';
import Darcy from '../images/darcy.jpeg';
import Flora from '../images/flora.jpeg';
import Griffin from '../images/Griffin.jpeg';
import Helia from '../images/Helia.png';
import Kiko from '../images/kiko.jpeg';
import Layla from '../images/Layla.jpeg';
import Musa from '../images/musa.jpeg';
import Nebula from '../images/nebula.jpeg';
import Nereus from '../images/Nereus.jpeg';
import Niobe from '../images/Niobe.jpeg';
import Luna from '../images/queenLuna.jpeg';
import Marion from '../images/queenMarion.jpeg';
import Riven from '../images/riven.jpeg';
import Roxy from '../images/roxy.jpeg';
import Sky from '../images/Sky.png';
import Stella from '../images/stella.jpeg';
import Stromy from '../images/stromy.png';
import Tecna from '../images/tecna.jpeg';
import Timmy from '../images/timmy.jpeg';
import Tritannus from '../images/Tritannus.jpeg';
const Game = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [images, setImages ]= useState([
        {id:1,src:Aisha, text:"Aisha"}, 
        {id:2, src:Bloom, text:"Bloom"}, 
        {id:3, src:Brandon, text:"Brandon"}, 
        {id:4, src:Darcy, text:"Darcy"}, 
        {id:5, src:Flora, text:"Flora"}, 
        {id:6, src:Griffin, text:"Griffin"}, 
        {id:7, src:Helia, text:"Helia"}, 
        {id:8, src:Kiko, text:"Kiko"}, 
        {id:9, src:Layla, text:"Layla"},
        {id:10, src:Musa, text:"Musa"}, 
        {id:11, src:Nebula, text:"Nebula"}, 
        {id:12, src:Nereus, text:"Nereus"}, 
        {id:13, src:Niobe, text:"Niobe"}, 
        {id:14, src:Luna, text:"Luna"}, 
        {id:15, src:Marion, text:"Marion"}, 
        {id:16, src:Riven, text:"Riven"}, 
        {id:17, src:Roxy, text:"Roxy"}, 
        {id:18, src:Sky, text:"Sky"}, 
        {id:19, src:Stella, text:"Stella"}, 
        {id:20, src:Stromy, text:"Stromy"}, 
        {id:21, src:Tecna, text:"Tecna"}, 
        {id:22, src:Timmy, text:"Timmy"}, 
        {id:23, src:Tritannus, text:"Tritannus"},
        {id:24 ,src:Acheron, text:"Acheron"}
    ]);
        useEffect(()=>{

            const items = document.querySelectorAll('img');
            items.forEach((item)=>{item.addEventListener('click', shuffleArray)})
        }, [])
        const shuffleArray = ()=> {
            const shuffledArray = [...images].sort(()=> Math.random()-0.5)
            setImages(shuffledArray)
        }
        const handleImgClick = (id) => {
            const selectedImg = images.find((img) => img.id === id);
        
            if (selectedImg) {
              const newScore = score + 1;
              setScore(newScore);
        
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
        
              shuffleArray();
            } else {
            
                setScore(score)
            }
          };
    return  <div className="App">
        <Header currentScore={score} bestScore={bestScore}/>
         <div className="game">
        {images.map((item)=>{return <div className="gallery" key={item.id} onClick={() => handleImgClick(item.id)}>
            <img src={item.src} alt=""  ></img>
            <div className="desc" >{item.text}</div>
        </div>
        
  })}
       
    </div></div>
}
export default Game;