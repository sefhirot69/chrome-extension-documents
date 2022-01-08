import React from 'react';
import InputIdentityDocumentDni from "./Documents/InputIdentityDocumentDni";
import generatorDni from "../Utils/generatorDni";
import InputIdentityDocumentNie from "./Documents/InputIdentityDocumentNie";
import generatorNie from "../Utils/generatorNie";
import InputIban from "./Documents/InputIban";
import generatorIban from "../Utils/generatorIban";

const FormGenerator = () => {

    let bankIban = generatorIban();

    return (
        <form>
            <InputIdentityDocumentDni/>
            <InputIdentityDocumentNie/>
            <InputIban bankIban={bankIban}/>
        </form>
    );
};

export default FormGenerator;