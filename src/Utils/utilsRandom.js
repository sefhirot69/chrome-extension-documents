import React from 'react';
import chainsPad from "./chainsPad";

const randomValueFromArray = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

const randDigits = (digits) => {
    return chainsPad(Math.floor(Math.random()*Math.pow(10,digits)).toString(),digits);
}

export {randomValueFromArray, randDigits};

