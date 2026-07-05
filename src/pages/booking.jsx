import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import StepService from "../components/StepService";
import styles from "./Booking.module.css";
import { useState } from "react";

function Agendar(){

    return (
        <>
            <Navbar/>
            <br />
            <br />
            <StepService/>

            <Footer/>
        </>
    )
}

export default Agendar