import React, {useRef, useState} from 'react';
import GenerateButton from "../Buttons/GenerateButton";
import generatorIban from "../../Utils/generatorIban";

const InputIban = ({bankIban}) => {

    const [iban, setIban] = useState(bankIban);
    const inputIban = useRef(bankIban);

    const generateIban = () => {
        let iban = generatorIban();
        setIban(iban);
    };

    return <>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">IBAN</span>
            <input
                type="text"
                className="form-control-sm col-sm-3"
                placeholder="XXXXXXXXX"
                name={"bank-iban"}
                value={iban}
                ref={inputIban}
            />
            <GenerateButton callbackOnClick={generateIban}/>
        </div>
    </>
};

export default InputIban;