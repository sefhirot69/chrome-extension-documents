import React, {useRef, useState} from 'react';
import generatorNie from "../../Utils/generatorNie";

const IdentityDocumentNie = ({documentNie}) => {

    const inputNie = useRef(null);
    const [document, setDocument] = useState(documentNie);

    const generateDocument = () => {
      setDocument(generatorNie());
    }

    return <>
        <label htmlFor="basic-url" className="form-label">
            NIE
        </label>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control-sm"
                placeholder="XXXXXXXXX"
                name={"document-nie"}
                value={document}
                ref={inputNie}
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

export default IdentityDocumentNie;