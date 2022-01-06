import React from 'react';

const calculateLetter = (number) => {
    let string = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return string.charAt(number % 23);
};

export default calculateLetter;