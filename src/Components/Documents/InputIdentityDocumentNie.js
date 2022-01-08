import React, {useRef, useState} from 'react';
import generatorNie from "../../Utils/generatorNie";
import GenerateButton from "../Buttons/GenerateButton";
import useGenerator from "../../Hooks/useGenerator";

const InputIdentityDocumentNie = () => {

    let documentNieValue = generatorNie();

    const {value, setGenerateValue} = useGenerator(
        {
            initialValue: documentNieValue,
            callback: generatorNie
        }
    )
    const inputNie = useRef(documentNieValue);

    return <>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">NIE</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-nie"}
                value={value}
                ref={inputNie}
                onChange={setGenerateValue}
            />
            <GenerateButton callbackOnClick={setGenerateValue}/>
        </div>
    </>
};

export default InputIdentityDocumentNie;