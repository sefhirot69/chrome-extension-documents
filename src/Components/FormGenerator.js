import React from 'react';
import IdentityDocumentDni from "./IdentityDocumentDni";
import generatorDni from "../Utils/generatorDni";

const FormGenerator = () => {

    let document = generatorDni();

    return (
        <form>
            <IdentityDocumentDni documentDni={document}/>
        </form>
    );
};

export default FormGenerator;