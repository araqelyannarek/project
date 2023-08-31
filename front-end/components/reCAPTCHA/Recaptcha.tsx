import React, {useEffect, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha() {
    const [recaptcha, setRecaptcha] = useState("");
    function onChange() {
    }

    return (
        <ReCAPTCHA
            sitekey="6LdVobInAAAAAEqLVE1otFWb2aA0sefNhWpHP-YE"
            onChange={onChange}
        />
    );
}

export default Recaptcha;