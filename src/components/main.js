import React, {useState, useEffect} from 'react';
import uniqid from 'uniqid';
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
    const images = [{id: uniqid(),src:Acheron, text:"Acheron"}, 
        {id:uniqid(),src:Aisha, text:"Aisha"}, 
        {id:uniqid(), src:Bloom, text:"Bloom"}, 
        {id:uniqid(), src:Brandon, text:"Brandon"}, 
        {id:uniqid(), src:Darcy, text:"Darcy"}, 
        {id:uniqid(), src:Flora, text:"Flora"}, 
        {id:uniqid(), src:Griffin, text:"Griffin"}, 
        {id:uniqid(), src:Helia, text:"Helia"}, 
        {id:uniqid(), src:Kiko, text:"Kiko"}, 
        {id:uniqid(), src:Layla, text:"Layla"},
        {id:uniqid(), src:Musa, text:"Musa"}, 
        {id:uniqid(), src:Nebula, text:"Nebula"}, 
        {id:uniqid(), src:Nereus, text:"Nereus"}, 
        {id:uniqid(), src:Niobe, text:"Niobe"}, 
        {id:uniqid(), src:Luna, text:"Luna"}, 
        {id:uniqid(), src:Marion, text:"Marion"}, 
        {id:uniqid(), src:Riven, text:"Riven"}, 
        {id:uniqid(), src:Roxy, text:"Roxy"}, 
        {id:uniqid(), src:Sky, text:"Sky"}, 
        {id:uniqid(), src:Stella, text:"Stella"}, 
        {id:uniqid(), src:Stromy, text:"Stromy"}, 
        {id:uniqid(), src:Tecna, text:"Tecna"}, 
        {id:uniqid(), src:Timmy, text:"Timmy"}, 
        {id:uniqid(), src:Tritannus, text:"Tritannus"}];
    return   <div className="game">
        {images.map((item)=>{return <div className="gallery">
            <img src={item.src} alt="" key={item.id} ></img>
            <div className="desc">{item.text}</div>
        </div>
        
  })}
       
    </div>
}
export default Game;