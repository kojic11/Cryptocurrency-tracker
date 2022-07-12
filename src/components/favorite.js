import '../styles/favorite.css'

function Favorites({favorite, details, symbols,
    favBTC, favLTC, favLTCB, favETH, favETHB,
    valBTC, valLTC, valLTCB, valETH, valETHB, isFav}) {        
return <div className='favwrap'>
        <div className='table'>
           <div className='name'>
                <div className='column' id="col_name"> 
                    <p>Name</p>
                </div> 
                    {favBTC ? <p onClick={function(){details('btcusd') ; isFav('btcusd')}} className='pairs' value={'btcusd'}>{symbols[0]}</p> : null}
                    {favLTC ? <p onClick={function(){details('ltcusd') ; isFav('ltcusd')}} className='pairs' value={'ltcusd'}>{symbols[1]}</p>  :null}
                    {favLTCB ? <p onClick={function(){details('ltcbtc'); isFav('ltcbtc')}} className='pairs' value={'ltcbtc'}>{symbols[2]}</p> :null }
                    {favETH ? <p onClick={function(){details('ethusd'); isFav('ethusd')}} className='pairs' value={'ethusd'}>{symbols[3]}</p> :null }
                    {favETHB ?  <p onClick={function(){details('ethbtc'); isFav('ethbtc')}} className='pairs' value={'ethbtc'}>{symbols[4]}</p> :null }
            </div>
            <div className='last'>
                <div className='column'>
                    <p>Last</p>
                </div>
                    {favBTC ? <p>{valBTC['1'][6].toFixed(2)}</p> :null}
                    {favLTC ? <p>{valLTC['1'][6].toFixed(2)}</p> :null}
                    {favLTCB ? <p>{valLTCB['1'][6].toFixed(6)}</p> :null}
                    {favETH ? <p>{valETH['1'][6].toFixed(2)}</p> :null}
                    {favETHB ? <p>{valETHB['1'][6].toFixed(6)}</p> :null }
                </div>
            <div className='change'>
                <div className='column'>
                    <p>Change</p>
                </div>
                    {favBTC ? <p>{valBTC['1'][4].toFixed(2)}</p> :null}
                    {favLTC ? <p>{valLTC['1'][4].toFixed(2)}</p> :null}
                    {favLTCB ? <p>{valLTCB['1'][4].toFixed(6)}</p> :null}
                    {favETH ? <p>{valETH['1'][4].toFixed(2)}</p> :null}
                    {favETHB ? <p>{valETHB['1'][4].toFixed(6)}</p> :null }
                </div>
            <div className='chaper'>
                <div className='column'>
                    <p>Change percent</p>
                </div>
                    {favBTC ? <p>{(valBTC['1'][5]*100).toFixed(2)} %</p> :null}
                    {favLTC ? <p>{(valLTC['1'][5]*100).toFixed(2)} %</p> :null}
                    {favLTCB ? <p>{(valLTCB['1'][5]*100).toFixed(2)} %</p> :null}
                    {favETH ? <p>{(valETH['1'][5]*100).toFixed(2)} %</p> :null}
                    {favETHB ? <p>{(valETHB['1'][5]*100).toFixed(2)} %</p> :null }
                </div>
            <div className='high'>
                <div className='column'>
                    <p>High</p>
                </div>
                    {favBTC ? <p>{valBTC['1'][8].toFixed(2)}</p> :null}
                    {favLTC ? <p>{valLTC['1'][8].toFixed(2)}</p> :null}
                    {favLTCB ? <p>{valLTCB['1'][8].toFixed(6)}</p> :null}
                    {favETH ? <p>{valETH['1'][8].toFixed(2)}</p> :null}
                    {favETHB ? <p>{valETHB['1'][8].toFixed(6)}</p> :null }
           </div>
            <div className='low'>
                <div className='column' id="col_low">
                    <p>Low</p>
                </div>
                    {favBTC ? <p>{valBTC['1'][9].toFixed(2)}</p> :null}
                    {favLTC ? <p>{valLTC['1'][9].toFixed(2)}</p> :null}
                    {favLTCB ? <p>{valLTCB['1'][9].toFixed(6)}</p> :null}
                    {favETH ? <p>{valETH['1'][9].toFixed(2)}</p> :null}
                    {favETHB ? <p>{valETHB['1'][9].toFixed(6)}</p> :null }
            </div>
        </div>
</div>    
 }
 export default Favorites;

// const printVal = (fav, val, n) =>{
//     return (fav ? 
//         <div>
//             <p>{val['1'][6].toFixed(n)}</p>
//             <p>{val['1'][4].toFixed(n)}</p>
//             <p>{(val['1'][5]*100).toFixed(2)} %</p>
//             <p>{val['1'][8].toFixed(n)}</p>
//             <p>{val['1'][9].toFixed(n)}</p>
//         </div>
//         : null)
// }        
/* <div className='btc'>
{   
// <p key={i} onClick={() => details(val)} className='pairs' id={val} value={val}>{val}</p>    
    printVal(favBTC, valBTC, 2)
}
{    
    printVal(favLTC, valLTC, 2)
}
{    
    printVal(favLTCB, valLTCB, 6)
}
{    
    printVal(favETH, valETH, 2)
}
{    
    printVal(favETHB, valETHB, 6)
}
</div> */