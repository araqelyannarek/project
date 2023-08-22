import Footer from "../footer/Footer";
import React from "react";
import Navbar from "../header/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
                <main> {children} </main>
            <Footer />
        </>
    )
}