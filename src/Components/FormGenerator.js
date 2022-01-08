import React from 'react';
import InputIdentityDocumentDni from "./Documents/InputIdentityDocumentDni";
import InputIdentityDocumentNie from "./Documents/InputIdentityDocumentNie";
import InputIban from "./Documents/InputIban";
import InputImei from "./Documents/InputImei";

const FormGenerator = () => {

    return (
        <form>
            <InputIdentityDocumentDni/>
            <InputIdentityDocumentNie/>
            <InputIban/>
            <InputImei/>
        </form>
    );
};

export default FormGenerator;