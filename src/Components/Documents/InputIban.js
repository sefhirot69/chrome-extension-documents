import React, {useRef, useState} from 'react';
import GenerateButton from "../Buttons/GenerateButton";
import generatorIban from "../../Utils/generatorIban";
import useGenerator from "../../Hooks/useGenerator";

const InputIban = ({bankIban}) => {

    let bankIbanValue = generatorIban();

    const {value, setGenerateValue} = useGenerator(
        {
            initialValue: bankIbanValue,
            callback: generatorIban
        }
    )
    const inputIban = useRef(bankIbanValue);

    return <>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">IBAN</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"bank-iban"}
                value={value}
                ref={inputIban}
                onChange={setGenerateValue}
            />
            <GenerateButton callbackOnClick={setGenerateValue}/>
        </div>
    </>
};

export default InputIban;