import React, {useState} from "react";

function Main (){

    const [formData, setFormData] = useState({
        riskAmmount: "",
        stoploss: "",
        commission: "",
      })
    const [lotsize, setLotsize] = useState("-------"); 
    const [unitsTraded, setUnitsTraded] = useState("-------"); // New state for units traded

    function handleSubmit(event) {
      event.preventDefault();
  
      // Parse formData values
      const riskAmount = parseFloat(formData.riskAmmount);
      const stopLoss = parseFloat(formData.stoploss);
      const commission = parseFloat(formData.commission);
  
      const pipValuePerLot = 10; // Assuming $10 per pip for standard lot (100,000 units)
      const unitsPerLot = 100000; // 1 standard lot = 100,000 units
  
      let estimatedLots, finalLots, calculatedUnits;
  
      if (riskAmount && stopLoss && commission) {
        // Step 1: Estimate lot size without commission
        estimatedLots = riskAmount / (pipValuePerLot * stopLoss);
  
        // Step 2: Adjust for commission
        const totalCommission = commission * estimatedLots; // Commission cost
        finalLots = (riskAmount - totalCommission) / (pipValuePerLot * stopLoss);
  
        // Step 3: Calculate units traded based on final lot size
        calculatedUnits = finalLots * unitsPerLot; // Units traded
  
        // Update state with the calculated lotsize and units traded
        setLotsize(finalLots.toFixed(2)); // Format to two decimal places
        setUnitsTraded(calculatedUnits.toFixed(0)); // Show whole number units
      } 
      /*
      else if (riskAmount && stopLoss && !commission) {
  // If commission is missing, calculate lot size without commission
  let estimatedLots = riskAmount / (pipValuePerLot * stopLoss);
  let calculatedUnits = estimatedLots * unitsPerLot; // Units traded

  // Update state with the estimated lotsize and units traded
  setLotsize(estimatedLots.toFixed(2));
  setUnitsTraded(calculatedUnits.toFixed(0));
}
else if (!riskAmount && stopLoss && commission) {
  // Missing risk amount
  setLotsize("Risk amount is missing!");
  setUnitsTraded("Risk amount is missing!");
} 
else if (riskAmount && !stopLoss && commission) {
  // Missing stop loss
  setLotsize("Stop loss is missing!");
  setUnitsTraded("Stop loss is missing!");
} 
else if (!riskAmount && !stopLoss && commission) {
  // Missing both risk amount and stop loss
  setLotsize("Risk amount and Stop loss are missing!");
  setUnitsTraded("Risk amount and Stop loss are missing!");
} 
else if (!riskAmount && stopLoss && !commission) {
  // Missing both risk amount and commission
  setLotsize("Risk amount and Commission are missing!");
  setUnitsTraded("Risk amount and Commission are missing!");
} 
else if (riskAmount && !stopLoss && !commission) {
  // Missing both stop loss and commission
  setLotsize("Stop loss and Commission are missing!");
  setUnitsTraded("Stop loss and Commission are missing!");
} 
else {
  // When all values are missing
  setLotsize("All input values are missing!");
  setUnitsTraded("All input values are missing!");
}


      */
      else {
        setLotsize("Invalid input");
        setUnitsTraded("Invalid input");
      }
  
      console.log(formData, finalLots, calculatedUnits); // Debugging
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
        setLotsize("-------");
        setUnitsTraded("-------");
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
                  <div className="errormessage"></div>
                <div className="stoploss">Stop Loss ( In pips )</div>
                <input 
                    type="number" 
                    name="" 
                    id="stoploss" 
                    placeholder="e.g 10"
                    value={formData.stoploss}
                    onChange={handleChange} 
                    />
                  <div className="errormessage"></div>
                <div className="commission">Enter Commision ( per Lot )</div>
                <input 
                    type="number" 
                    name="" 
                    id="commission" 
                    placeholder="Enter 0 to neglect"
                    value={formData.commission}
                    onChange={handleChange}

                 />  
                 <div className="errormessage"></div> 
                <br/>
                <input 
                    type="submit" 
                    value="Calculate"
                    
                /> 
            </form>

            <div className="resultContainer">
                <div className="results">Results</div>
                <div className="positionsize">Units Traded</div>
                <div className="outputpositionsize">{unitsTraded}</div>
                <div className="lotammount">Lotsize to use</div>
                <div className="outputlotsize"> {lotsize }</div>
                <button type="submit" onClick={handleReset}>Reset</button>
            </div> 
        </div>
        
            
        </>
    );
}
 
export default Main;

