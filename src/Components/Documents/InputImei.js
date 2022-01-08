import React, {useRef} from 'react';
import GenerateButton from "../Buttons/GenerateButton";
import useGenerator from "../../Hooks/useGenerator";
import generatorImei from "../../Utils/generatorImei";

const InputImei = () => {

    let inputImeiValue = generatorImei();

    const {value, setGenerateValue} = useGenerator({
        initialValue: inputImeiValue,
        callback: generatorImei
    });

    const inputImei = useRef(inputImeiValue);

    return <>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">IMEI</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"imei"}
                value={value}
                ref={inputImei}
                onChange={setGenerateValue}
            />
            <GenerateButton callbackOnClick={setGenerateValue}/>
        </div>
    </>;
};

export default InputImei;