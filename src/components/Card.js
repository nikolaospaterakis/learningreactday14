import React from "react";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
    return(
        <div className="cards-all">
            <cards>
                <img alt="topio"
                src={props.item.imageUrl}>
                </img>
                <descr>
                    <p className="sec1">
                        <FontAwesomeIcon icon={faLocationDot} className="dot"/>
                        &nbsp;{props.item.location}
                        &nbsp;&nbsp;&nbsp;<a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </p>
                    <h2>{props.item.title}</h2>
                    <section2>
                        <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    </section2>
                    <p className="des">{props.item.description}</p>
                </descr>
            </cards>
        </div>
    )
}