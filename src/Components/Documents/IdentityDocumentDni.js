import React, {useRef, useState} from 'react';
import generatorDni from "../../Utils/generatorDni";

const IdentityDocumentDni = ( {documentDni} ) => {

    const [document, setDocument] = useState(documentDni)
    const inputDni = useRef(documentDni);

    const generateDocument = () => {
        let document = generatorDni();
        setDocument(document);
    };


    return <>
        <label htmlFor="basic-url" className="form-label">
            DNI
        </label>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-dni"}
                value={document}
                ref={inputDni}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={generateDocument}
            >
                Generar
            </button>
        </div>
    </>

};

export default IdentityDocumentDni;