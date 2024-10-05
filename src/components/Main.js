import React, {useState} from "react";

function Main (){

    const [formData, setFormData] = useState({
        riskAmmount: "",
        stoploss: "",
        commission: "",
      })
    const [formError, setFormError] = useState({
        riskAmmountError: "",
        stoplossError: "",
        commissionError: "",
      })

    
    const [lotsize, setLotsize] = useState("-------"); 
    const [unitsTraded, setUnitsTraded] = useState("-------"); // New state for units traded


    const pipValuePerLot = 10; // Assuming $10 per pip for standard lot (100,000 units)
    const unitsPerLot = 100000; // 1 standard lot = 100,000 units



    function handleSubmit(event) {
      event.preventDefault();

      const riskAmount = parseFloat(formData.riskAmmount);
      const stopLoss = parseFloat(formData.stoploss);
      const commission = parseFloat(formData.commission);
  
      // Reset error state
      setFormError({
        riskAmmountError: "",
        stoplossError: "",
        commissionError: "",
      });
  
      // Validate inputs and update formError state
      let hasError = false;
  
      if (!riskAmount) {
        setFormError((prevState) => ({
          ...prevState,
          riskAmmountError: "Enter a valid risk amount",
        }));
        hasError = true;
      }
  
      if (!stopLoss) {
        setFormError((prevState) => ({
          ...prevState,
          stoplossError: "Enter a valid stop loss",
        }));
        hasError = true;
      }
  
      if (!Number.isFinite(commission) || commission === "") {
        setFormError((prevState) => ({
          ...prevState,
          commissionError: "Enter a valid commission",
        }));
        hasError = true;
      }
      if (hasError) {
        // Prevent further processing if there are validation errors
        setUnitsTraded("Ooops !!")
        setLotsize("Ooops !!")
        return;
      }

      let estimatedLots, finalLots, calculatedUnits;
  
      // Parse formData values
    
      if (riskAmount && stopLoss && (commission || commission === 0)) {
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
      else {
        setLotsize("Invalid input");
        setUnitsTraded("Invalid input");
      }
      
    }
      
      function handleChange(event) {
        const key = event.target.id
        // console.log(key)
        setFormData({ 
          ...formData, 
          [key]: event.target.value 
        })
      }
      // console.log(formData)
      // console.log("1,2 testing")

      function handleReset() {
        setFormData({
          riskAmmount: "",
          stoploss: "",
          commission: "",
        });
        setFormError({
          riskAmmountError: "",
          stoplossError: "",
          commissionError: "",
        });
    
        setLotsize("-------");
        setUnitsTraded("-------");
        // console.log("Form data has been reset");
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
                  <div className="errormessage"> {formError.riskAmmountError}</div>
                <div className="stoploss">Stop Loss ( In pips )</div>
                <input 
                    type="number" 
                    name="" 
                    id="stoploss" 
                    placeholder="e.g 10"
                    value={formData.stoploss}
                    onChange={handleChange} 
                    />
                  <div className="errormessage">{formError.stoplossError}</div>
                <div className="commission">Enter Commision ( per Lot )</div>
                <input 
                    type="number" 
                    name="" 
                    id="commission" 
                    placeholder="Enter 0 to neglect"
                    value={formData.commission}
                    onChange={handleChange}

                 />  
                 <div className="errormessage"> { formError.commissionError}</div> 
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

