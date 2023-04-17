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
        {id:1,src:Aisha, text:"Aisha", isClicked:false}, 
        {id:2, src:Bloom, text:"Bloom", isClicked:false}, 
        {id:3, src:Brandon, text:"Brandon", isClicked:false}, 
        {id:4, src:Darcy, text:"Darcy", isClicked:false}, 
        {id:5, src:Flora, text:"Flora", isClicked:false}, 
        {id:6, src:Griffin, text:"Griffin", isClicked:false}, 
        {id:7, src:Helia, text:"Helia", isClicked:false}, 
        {id:8, src:Kiko, text:"Kiko", isClicked:false}, 
        {id:9, src:Layla, text:"Layla", isClicked:false},
        {id:10, src:Musa, text:"Musa", isClicked:false}, 
        {id:11, src:Nebula, text:"Nebula", isClicked:false}, 
        {id:12, src:Nereus, text:"Nereus", isClicked:false}, 
        {id:13, src:Niobe, text:"Niobe", isClicked:false}, 
        {id:14, src:Luna, text:"Luna", isClicked:false}, 
        {id:15, src:Marion, text:"Marion", isClicked:false}, 
        {id:16, src:Riven, text:"Riven", isClicked:false}, 
        {id:17, src:Roxy, text:"Roxy", isClicked:false}, 
        {id:18, src:Sky, text:"Sky", isClicked:false}, 
        {id:19, src:Stella, text:"Stella", isClicked:false}, 
        {id:20, src:Stromy, text:"Stromy", isClicked:false}, 
        {id:21, src:Tecna, text:"Tecna", isClicked:false}, 
        {id:22, src:Timmy, text:"Timmy", isClicked:false}, 
        {id:23, src:Tritannus, text:"Tritannus", isClicked:false},
        {id:24 ,src:Acheron, text:"Acheron", isClicked:false}
    ]);
        useEffect(()=>{

            const items = document.querySelectorAll('img');
            items.forEach((item)=>{item.addEventListener('click', shuffleArray)})
        }, [])
        const shuffleArray = ()=> {
            const shuffledArray = [...images].sort(()=> Math.random()-0.5)
            setImages(shuffledArray)
        }
    
   
        function handleImgClick(id){
            const index = images.findIndex(obj => obj.id === id);
            const clickedImg = images[index];
            
            if(clickedImg.isClicked){
              setScore(0);
              const resetImages = images.map((img) => {
                img.isClicked = false;
                return img;
              });
              setImages(resetImages);
            } else{
              const newScore = score + 1;
              setScore(newScore);
              clickedImg.isClicked = true;
              const updatedImages = [...images];
              updatedImages[index] = clickedImg;
              setImages(updatedImages);
              if(newScore > bestScore){
                setBestScore(newScore);
              }
            }  
          }

    return  <div className="App">
        <Header currentScore={score} bestScore={bestScore}/>
         <div className="game">
        {images.map((item)=>{return <div className="gallery" key={item.id} id={item.id} onClick={() => handleImgClick(item.id)}>
            <img src={item.src} alt=""  ></img>
            <div className="desc" >{item.text}</div>
        </div>
        
  })}
       
    </div></div>
}
export default Game;