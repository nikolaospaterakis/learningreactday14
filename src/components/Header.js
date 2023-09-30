import React from "react";
import {faEarthAmerica} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
    return(
        <header>
            <FontAwesomeIcon icon={faEarthAmerica} className="earth"/>
            <h4>my travel journal</h4>
        </header>
        
    )
}