import React, {useState} from "react";

function Main (){

    const [formData, setFormData] = useState({
        riskAmmount: "",
        stoploss: "",
        commission: "",
      })

      function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        console.log("Submitted data")
      }
      
      function handleChange(event) {
        const key = event.target.id
        console.log(key)
        setFormData({ 
          ...formData, 
          [key]: event.target.value 
        })
      }
      console.log(formData)
      console.log("1,2 testing")

      function handleReset() {
        setFormData({
          riskAmmount: "",
          stoploss: "",
          commission: "",
        });
        console.log("Form data has been reset");
      }
    return (  
        <>
        <div className="container">
            <form onSubmit={handleSubmit} className="inputs">
                <div className="riskammount">Risk Ammount (In $ )</div>
                <input 
                    type="number" 
                    name="" 
                    id="riskAmmount" 
                    placeholder="e.g 50 "
                    value={formData.riskAmmount}
                    onChange={handleChange}
                    
                    />
                <div className="stoploss">Stop Loss ( In pips )</div>
                <input 
                    type="number" 
                    name="" 
                    id="stoploss" 
                    placeholder="e.g 10"
                    value={formData.stoploss}
                    onChange={handleChange}
                    
                    />
                <div className="commission">Enter Commision ( per Lot )</div>
                <input 
                    type="number" 
                    name="" 
                    id="commission" 
                    placeholder="Enter 0 to neglect"
                    value={formData.commission}
                    onChange={handleChange}

                 />   
                <br/>
                <input 
                    type="submit" 
                    value="Calculate"
                    
                /> 
            </form>

            <div className="resultContainer">
                <div className="results">Results</div>
                <div className="positionsize">Position Size</div>
                <div className="outputpositionsize">----------</div>
                <div className="lotammount">Lotsize to use</div>
                <div className="outputlotsize"> -----------</div>
                <button type="submit" onClick={handleReset}>Reset</button>
            </div> 
        </div>
        
            
        </>
    );
}
 
export default Main;

