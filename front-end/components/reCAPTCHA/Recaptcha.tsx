import React, {useEffect, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha() {
    const [recaptcha, setRecaptcha] = useState("");
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <ReCAPTCHA
            sitekey="6LdVtPwkAAAAAEaWwTlBUM1Y5k8v1Q0Y4B6kmyuh "
            onChange={onChange}
        />
    );
}

export default Recaptcha;