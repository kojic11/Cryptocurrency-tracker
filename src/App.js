import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Prices from './components/prices';
import Loading from './components/loading';
import Modal from './components/modal';
import Favorites from './components/favorite';
import { Routes, Route } from "react-router-dom"

function App() {
  const webSocket = (setValue, symbolVal) => {
    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    wss.onmessage = (msg) => {
      if (JSON.parse(msg.data)['1'][5] !== undefined){
        setValue(JSON.parse(msg.data));
      }
  }
    let msg = JSON.stringify({ 
      event: 'subscribe', 
      channel: 'ticker', 
      symbol: symbolVal,
       
    })
    wss.onopen = () => {
      wss.send(msg);
      // console.log('on open', msg); 
    }
  }
  const details = (value) =>{
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    fetch(`https://api.bitfinex.com/v1/pubticker/${value.toUpperCase()}`, options)
      .then(response => response.json())
      .then(data => setGetValue(data))
      .catch(err => console.error(err));
    setModalVisible(true);
    setValName(value);
  }
  
  useEffect(() =>{
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    fetch('https://api.bitfinex.com/v1/symbols', options)
      .then(response => response.json())
      .then(data => setSymbols(data))
      .catch(err => console.error(err));
    // console.log('symbols', symbols)
    setFavBTC(localStorage.getItem('favBTC'));
    setFavLTC(localStorage.getItem('favLTC'));
    setFavLTCB(localStorage.getItem('favLTCB'));
    setFavETH(localStorage.getItem('favETH'));
    setFavETHB(localStorage.getItem('favETHB'));
  },[])

  const Log = () => {
    setIsLogged(true);
    localStorage.setItem('isLogged', true);
  }

  const [isLogged, setIsLogged] = useState(false);
  const [symbols, setSymbols] = useState([]);
  const [valBTC, setValBTC] = useState([]);
  const [valLTC, setValLTC] = useState([]);
  const [valLTCB, setValLTCB] = useState([]);
  const [valETH, setValETH] = useState([]);
  const [valETHB, setValETHB] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [getValue, setGetValue] = useState();
  const [valName, setValName] = useState('');
  const [favorite, setFavorite] = useState([]);  
  const [favBTC, setFavBTC] = useState(false);
  const [favLTC, setFavLTC] = useState(false);
  const [favLTCB, setFavLTCB] = useState(false);
  const [favETH, setFavETH] = useState(false);
  const [favETHB, setFavETHB] = useState(false);
  const [isItFav, setIsItFav] = useState(false);

  useEffect(() => {
    if (favorite.length >= 1) localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorite'));
    if (favs) {
     setFavorite(favs);
    }
  },[]);

  const hide = () =>{
    setModalVisible(false);
  };

  const isFav = (a) =>{
  // console.log(a);
  let favs = [...favorite];
    if(favs.indexOf(a)>-1) {
      return setIsItFav(true);
    }
    else{
      return setIsItFav(false);
    }
  };

  const fav = (a) => {
    if (!favorite.includes(a)){
      setFavorite(favorite => [...favorite, a]);
  } 
    if (a === 'btcusd'){
      setFavBTC(true);
      localStorage.setItem('favBTC', true);
      setIsItFav(true);
    }
    if (a === 'ltcusd'){
      setFavLTC(true);
      localStorage.setItem('favLTC', true);
      setIsItFav(true);
    }
    if (a === 'ltcbtc'){
      setFavLTCB(true);
      localStorage.setItem('favLTCB', true);
      setIsItFav(true);
    }
    if (a === 'ethusd'){
      setFavETH(true);
      localStorage.setItem('favETH', true);
      setIsItFav(true);
    }
    if (a === 'ethbtc'){
      setFavETHB(true);
      localStorage.setItem('favETHB', true);
      setIsItFav(true);
    }  
  };
  const removeFav = (a) => {
    const remFav = (b,a) =>{
      localStorage.removeItem(b);
      const index = favorite.indexOf(a);
      favorite.splice(index,1);
      setIsItFav(false);
      localStorage.setItem('favorite', JSON.stringify(favorite));
    }
    if (a === 'btcusd'){
      setFavBTC(false);
      remFav('favBTC', a)
      // console.log(isFav(a))
    }
    if (a === 'ltcusd'){
      setFavLTC(false);
      remFav('favLTC', a)
    }
    if (a === 'ltcbtc'){
      setFavLTCB(false);
      remFav('favLTCB', a)
    }
    if (a === 'ethusd'){
      setFavETH(false);
      remFav('favETH', a);
    }
    if (a === 'ethbtc'){
      setFavETHB(false);
      remFav('favETHB',a)
    }
  };
  useEffect(() => { 
    if (symbols.length>1){
      const sym1='t'+symbols[0].toUpperCase();
      const sym2='t'+symbols[1].toUpperCase();
      const sym3='t'+symbols[2].toUpperCase();
      const sym4='t'+symbols[3].toUpperCase();
      const sym5='t'+symbols[4].toUpperCase();
      webSocket(setValBTC, sym1);
      webSocket(setValLTC, sym2);
      webSocket(setValLTCB, sym3);
      webSocket(setValETH, sym4);
      webSocket(setValETHB, sym5);
    }
  },[symbols])
  return (
    <div className="App">
      <Navbar log={Log} isLogged={isLogged} />
      <Routes>
      { (valBTC.length>0 && valLTC.length>0 && valLTCB.length>0 && valETH.length>0 && valETHB.length>0) ?
        <Route path="/" element={<Prices symbols={symbols} valBTC={valBTC} valLTC = {valLTC} valLTCB = {valLTCB} 
            valETH = {valETH} valETHB={valETHB} details={details} isFav={isFav}/>} />  
        : <Route path='/' element={<Loading />} /> 
      }
      { (valBTC.length>0 && valLTC.length>0 && valLTCB.length>0 && valETH.length>0 && valETHB.length>0) ?
      <Route path="/favorite" element={<Favorites symbols={symbols} favorite={favorite} details={details} 
        favBTC={favBTC} favLTC={favLTC} favLTCB={favLTCB} favETH={favETH} favETHB={favETHB}
        valBTC={valBTC} valLTC = {valLTC} valLTCB = {valLTCB} valETH = {valETH} valETHB={valETHB} isFav={isFav}
     />} />: <Route path='/favorite' element={<Loading />} />} 
    </Routes>

      { modalVisible ?
        <Modal getValue={getValue} valName={valName} modalHide={hide} fav={fav}
         removeFav={removeFav} isItFav={isItFav} isLogged={isLogged} favBTC={favBTC}/> : null
      } 
    </div>
  );
}

export default App;
