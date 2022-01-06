import React from 'react';
import IdentityDocumentDni from "./Documents/IdentityDocumentDni";
import generatorDni from "../Utils/generatorDni";
import IdentityDocumentNie from "./Documents/IdentityDocumentNie";
import generatorNie from "../Utils/generatorNie";

const FormGenerator = () => {

    let documentDni = generatorDni();
    let documentNie = generatorNie();

    return (
        <form>
            <IdentityDocumentDni documentDni={documentDni}/>
            <IdentityDocumentNie documentNie={documentNie}/>
        </form>
    );
};

export default FormGenerator;