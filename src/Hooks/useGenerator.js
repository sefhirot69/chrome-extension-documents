import React, {useState} from 'react';

const useGenerator = ({initialValue, callback}) => {

    const [value, setValue] = useState(initialValue);

    const setGenerateValue = () => {
        let value = callback();
        setValue(value);
    };

    return {
        value,
        setGenerateValue
    };
};

export default useGenerator;