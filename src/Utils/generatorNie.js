import React from 'react';
import calculateLetter from "./calculateLetter";
import utilsChainsPad from "./utilsChainsPad";

const generatorNie = () => {
    const r = Math.floor(3 * Math.random()), t = Math.floor(1e7 * Math.random());
    const a = calculateLetter(utilsChainsPad(parseInt(r.toString() + utilsChainsPad(t.toString(), 7), 10), 8));
    return "XYZ".charAt(r) + utilsChainsPad(t.toString(), 7) + a;
};

export default generatorNie;