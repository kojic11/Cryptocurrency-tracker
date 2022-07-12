import '../styles/modal.css'
function Modal({favBTC, getValue, valName, modalHide, fav, isLogged, removeFav, isItFav}){
 return <div>
   {(getValue !== undefined) ?
   <div className='modalwrap'> 
    <div className='modaltable'>
        <div className='modaln'>
            <p>Symbol</p>
            {<p className='namemodal'>{valName}</p>}
        </div>
        <div className='modalc'>
            <p>Last price</p>
            <p>{getValue.last_price}</p>
        </div>
        <div className='modalc'>
            <p>High</p>
            <p>{getValue.high}</p>
        </div>
        <div className='modalc'>
            <p>Low</p>
            <p>{getValue.low}</p>
        </div>
        <div className='close'>
            <button className='btn-close' onClick={modalHide}>X</button>
        </div>
    </div> 
    { (isLogged || localStorage.getItem('isLogged')) ? ( (isItFav ?  
        <div className='arfav'>
            <button className="btn-rem" onClick={() => removeFav(valName)}>Remove from favorites</button>
        </div>:
        <div className='arfav'> 
            <button onClick={() => fav(valName)} className='btn-fav'>Add to favorites</button>
        </div> ))
        : null}

    </div>
    :
    <p>Loading</p>
   }
</div>
}
export default Modal;