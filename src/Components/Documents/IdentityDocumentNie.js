import React, {useRef, useState} from 'react';
import generatorNie from "../../Utils/generatorNie";
import GenerateButton from "../Buttons/GenerateButton";

const IdentityDocumentNie = ({documentNie}) => {

    const inputNie = useRef(null);
    const [document, setDocument] = useState(documentNie);

    const generateDocument = () => {
        setDocument(generatorNie());
    }

    return <>
        <div className="input-group mb-3">
            <span className="input-group-text">NIE</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-nie"}
                value={document}
                ref={inputNie}
            />
            <GenerateButton callbackOnClick={generateDocument}/>
        </div>
    </>
};

export default IdentityDocumentNie;