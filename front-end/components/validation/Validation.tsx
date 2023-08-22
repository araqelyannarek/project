import React from "react";

import {
    PinInput,
    PinInputField
} from "@chakra-ui/pin-input";

export default function PinVerifyInput({
   placeholder,
   onChange,
   onComplete,
   fieldStyle,
   ...props
}: any) {

const [value, setValue] = React.useState("");

const handleChange = (value: React.SetStateAction<string>) => {
    setValue(value);
    onChange(value);
};

    return (
        <PinInput
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            {...props}
        >
            <PinInputField style={fieldStyle} />
            <PinInputField style={fieldStyle} />
            <PinInputField style={fieldStyle} />
            <PinInputField style={fieldStyle} />
            <PinInputField style={fieldStyle} />
            <PinInputField style={fieldStyle} />
        </PinInput>
    );
}
