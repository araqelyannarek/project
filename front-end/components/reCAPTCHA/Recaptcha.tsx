import React, {useEffect, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha() {
    const [recaptcha, setRecaptcha] = useState("");
    function onChange() {
    }

    return (
        <ReCAPTCHA
            sitekey="6LdVtPwkAAAAAEaWwTlBUM1Y5k8v1Q0Y4B6kmyuh "
            onChange={onChange}
        />
    );
}

export default Recaptcha;