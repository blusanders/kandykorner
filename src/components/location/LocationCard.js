import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => {

    return (
    <>
    <section className="location">
        <h3 className="location__name">Name: {location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
        <div className="location__squareFootage">Sq Ft: {location.squareFootage}</div>
        <div className="location__accessible">Accessible: {location.accessible ? "yes" : "no"}
        </div>
    </section>
    </>
    )
}