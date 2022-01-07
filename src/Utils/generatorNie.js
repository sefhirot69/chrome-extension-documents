import React from 'react';
import calculateLetter from "./calculateLetter";
import chainsPad from "./chainsPad";

const generatorNie = () => {
    const r = Math.floor(3 * Math.random()), t = Math.floor(1e7 * Math.random());
    const a = calculateLetter(chainsPad(parseInt(r.toString() + chainsPad(t.toString(), 7), 10), 8));
    return "XYZ".charAt(r) + chainsPad(t.toString(), 7) + a;
};

export default generatorNie;