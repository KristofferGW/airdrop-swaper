import React from "react";
import StyledH2 from "../styling-components/StyledH2";
import SwapCard from "./SwapCard";
import whereToSwap from "../data/whereToSwap.json";

const BridgeResults = ({ matchingBridges }) => {
    console.log('matching bridges: ', matchingBridges);
    const randomizedBridges = matchingBridges.sort(() => Math.random() - 0.5);
    console.log('randomized bridges: ', randomizedBridges);

    return (
        <div>
            <StyledH2 size="1.3rem">Places to Bridge from </StyledH2>
                <div>
                    {randomizedBridges.map((placeToSwap) =>(
                        <SwapCard key={placeToSwap.name} placeToSwap={placeToSwap} />           
                    ))}
                </div>
        </div>
    );
};

export default BridgeResults;