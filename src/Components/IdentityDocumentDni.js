import React, {useRef, useState} from 'react';
import generatorDni from "../Utils/generatorDni";

const IdentityDocumentDni = ( {documentDni} ) => {

    const [document, setDocument] = useState(documentDni)
    const [copiedValue, setCopiedValue] = useState("");
    const inputDni = useRef(documentDni);

    const generateDocument = () => {
        let document = generatorDni();
        setDocument(document);
    };

    const handlerCopy = (e) => {
        setCopiedValue(document);
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="XXXXXXXXX"
                name={"document-dni"}
                value={document}
                ref={inputDni}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                onCopy={(e) => {
                    console.log('Hi!')
                }}
            >
                Copiar
            </button>
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={generateDocument}
            >
                Generar
            </button>
        </div>
    );
};

export default IdentityDocumentDni;