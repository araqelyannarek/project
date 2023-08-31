import React, {useEffect, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha() {
    const [recaptcha, setRecaptcha] = useState("");
    function onChange() {
    }

    return (
        <ReCAPTCHA
            sitekey="6LelP-0nAAAAADUxIqMH2mmQOvFu0AuMTk-20huZ"
            onChange={onChange}
        />
    );
}

export default Recaptcha;