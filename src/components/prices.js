import '../styles/prices.css'

function Prices({symbols, valBTC, valLTC, valLTCB, valETH, valETHB, details, isFav}) {
    const listSymbols = symbols.slice(0,5);
    return <div className="priceswrap">
        <div className='table'>
           <div className='name'>
                <div className='column' id="col_name"> 
                    <p id='col_name'>Name</p>
                </div> 
                {
                    listSymbols.map((val, i) => <p key={i} onClick={function(){ details(val) ; isFav(val)}} className='pairs' value={val}>{val}</p>) 
               }
            </div>
            <div className='last'>
                <div className='column'>
                    <p>Last</p>
                </div>
                <p>{valBTC['1'][6].toFixed(2)}</p>
                <p>{valLTC['1'][6].toFixed(2)}</p>
                <p>{valLTCB['1'][6].toFixed(6)}</p>
                <p>{valETH['1'][6].toFixed(2)}</p>
                <p>{valETHB['1'][6].toFixed(6)}</p>
            </div>
            <div className='change'>
                <div className='column'>
                    <p>Change</p>
                </div>
                <p>{valBTC['1'][4].toFixed(2)}</p>
                <p>{valLTC['1'][4].toFixed(2)}</p>
                <p>{valLTCB['1'][4].toFixed(6)}</p>
                <p>{valETH['1'][4].toFixed(2)}</p>
                <p>{valETHB['1'][4].toFixed(6)}</p>
            </div>
            <div className='chaper'>
                <div className='column'>
                    <p>Change percent</p>
                </div>
                <p>{(valBTC['1'][5]*100).toFixed(2)} %</p>
                <p>{(valLTC['1'][5]*100).toFixed(2)} %</p>
                <p>{(valLTCB['1'][5]*100).toFixed(2)} %</p>
                <p>{(valETH['1'][5]*100).toFixed(2)} %</p>
                <p>{(valETHB['1'][5]*100).toFixed(2)} %</p>
            </div>
            <div className='high'>
                <div className='column'>
                    <p>High</p>
                </div>
                <p>{valBTC['1'][8].toFixed(2)}</p>
                <p>{valLTC['1'][8].toFixed(2)}</p>
                <p>{valLTCB['1'][8].toFixed(6)}</p>
                <p>{valETH['1'][8].toFixed(2)}</p>
                <p>{valETHB['1'][8].toFixed(6)}</p>
            </div>
            <div className='low'>
                <div className='column' id="col_low">
                    <p>Low</p>
                </div>
                <p>{valBTC['1'][9].toFixed(2)}</p>
                <p>{valLTC['1'][9].toFixed(2)}</p>
                <p>{valLTCB['1'][9].toFixed(6)}</p>
                <p>{valETH['1'][9].toFixed(2)}</p>
                <p>{valETHB['1'][9].toFixed(6)}</p>
            </div>
        </div>
    </div>
 }
 export default Prices;