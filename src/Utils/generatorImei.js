import React from 'react';

const generatorImei = () => {
    let pos;
    let str = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sum = 0;
    let final_digit = 0;
    let t = 0;
    let len_offset = 0;
    let len = 15;
    let issuer;

    //
    // Fill in the first two values of the string based with the specified prefix.
    // Reporting Body Identifier list: http://en.wikipedia.org/wiki/Reporting_Body_Identifier
    //

    let rbi = ["01", "10", "30", "33", "35", "44", "45", "49", "50", "51", "52", "53", "54", "86", "91", "98", "99"];
    let arr = rbi[Math.floor(Math.random() * rbi.length)].split("");
    str[0] = Number(arr[0]);
    str[1] = Number(arr[1]);
    pos = 2;

    //
    // Fill all the remaining numbers except for the last one with random values.
    //

    while (pos < len - 1) {
        str[pos++] = Math.floor(Math.random() * 10) % 10;
    }

    //
    // Calculate the Luhn checksum of the values thus far.
    //

    len_offset = (len + 1) % 2;
    for (pos = 0; pos < len - 1; pos++) {
        if ((pos + len_offset) % 2) {
            t = str[pos] * 2;
            if (t > 9) {
                t -= 9;
            }
            sum += t;
        } else {
            sum += str[pos];
        }
    }

    //
    // Choose the last digit so that it causes the entire string to pass the checksum.
    //

    final_digit = (10 - (sum % 10)) % 10;
    str[len - 1] = final_digit;

    // Output the IMEI value.
    t = str.join('');
    t = t.substr(0, len);

    return t;
};

export default generatorImei;