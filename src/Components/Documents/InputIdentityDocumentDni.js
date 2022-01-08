import React, {createRef, useRef, useState} from 'react';
import generatorDni from "../../Utils/generatorDni";
import GenerateButton from "../Buttons/GenerateButton";
import useGenerator from "../../Hooks/useGenerator";

const InputIdentityDocumentDni = () => {

    let documentDniValue = generatorDni();
    const {value, setGenerateValue} = useGenerator(
        {
            initialValue: documentDniValue,
            callback : generatorDni
        })

    const inputDni = useRef(documentDniValue);

    return <>

        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">DNI</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-dni"}
                value={value}
                ref={inputDni}
                onChange={setGenerateValue}
            />
            <GenerateButton callbackOnClick={setGenerateValue}/>
        </div>
    </>

};

export default InputIdentityDocumentDni;