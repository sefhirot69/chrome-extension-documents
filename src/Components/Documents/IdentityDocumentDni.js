import React, {useRef, useState} from 'react';
import generatorDni from "../../Utils/generatorDni";
import GenerateButton from "../Buttons/GenerateButton";

const IdentityDocumentDni = ( {documentDni} ) => {

    const [document, setDocument] = useState(documentDni)
    const inputDni = useRef(documentDni);

    const generateDocument = () => {
        let document = generatorDni();
        setDocument(document);
    };

    return <>

        <div className="input-group mb-3">
            <span className="input-group-text">DNI</span>
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-dni"}
                value={document}
                ref={inputDni}
            />
            <GenerateButton callbackOnClick={generateDocument}/>
        </div>
    </>

};

export default IdentityDocumentDni;