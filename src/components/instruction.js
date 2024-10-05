import React from "react";

const Instruction = () => {
    return ( 
        <>
            <div className="instructions">  
                <p>In forex, a "Lot" defines the trade size, or the number of currency units to be bought/sold in a trade. One Standard Lot is 100,000 units of the base currency. </p> <br />
                <p>Proper position sizing is key to managing risk and to avoid blowing out your account on a single trade.</p> 
                <p>To use the position size calculator, enter the ammount you are risking in $.</p>
                <p>Our position sizing calculator will suggest position sizes based on the information you provide.</p>
                <p> The position size calculator assumes the you are trading XXXUSD pairs e.g GBPUSD</p>
            </div>
        </>
     );
}
 
export default Instruction;