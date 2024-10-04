import React, {useState} from "react";

function Main (){

    const [formData, setFormData] = useState({
        riskAmmount: "",
        stoploss: "",
        commission: "",
      })
    const [lotsize, setLotsize] = useState(""); 

      function handleSubmit(event) {
        event.preventDefault();
        const riskAmount = parseFloat(formData.riskAmmount);
        const stopLoss = parseFloat(formData.stoploss);
        const commission = parseFloat(formData.commission);
        let result ;
    
        // Simple calculation for demonstration (adjust to your actual formula)
        if (riskAmount && stopLoss) {
          const pipValuePerLot = 10; // As per your example, 1 pip with 1 lot = $10
          result = (riskAmount - commission) / (pipValuePerLot * stopLoss); // Basic calculation
          setLotsize(result.toFixed(2)); 
        } else {
          result = "Invalid input";
          setLotsize(result);
        }

        console.log(result);
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
        setLotsize("_ _ _ _");
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
                <div className="outputlotsize"> {lotsize }</div>
                <button type="submit" onClick={handleReset}>Reset</button>
            </div> 
        </div>
        
            
        </>
    );
}
 
export default Main;

