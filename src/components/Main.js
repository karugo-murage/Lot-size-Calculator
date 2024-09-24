const Main = () => {
    return (  
        <>
        <div>
            <div>
                <div className="riskammount">Risk Ammount (In $ )</div>
                <input type="number" name="" id="" placeholder="e.g 50 "/>
                <div className="stoploss">Stop Loss ( In pips )</div>
                <input type="number" name="" id="" placeholder="e.g 10"/>
                <div className="commission">Enter Commision ( per Lot )</div>
                <input type="number" name="" id="" placeholder="Enter 0 to neglect"/>
                <button type="submit"> Calculate</button>
            </div>
            <div>
                <div className="results">Results</div>
                <div className="positionsize">Position Size</div>
                <div className="outputpositionsize">----------</div>
                <div className="lotammount">Lotsize to use</div>
                <div className="outputlotsize"> -----------</div>
                <button type="submit">Reset</button>
            </div> 
        </div>
        
            
        </>
    );
}
 
export default Main;