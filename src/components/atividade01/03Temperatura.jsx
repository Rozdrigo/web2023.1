import React from "react";

export const Temperatura = (props) => {
    var celsiusParaFahrenheit = (c = props.celcios) => {
        return (c * 9/5) + 32;
    }
    var fahrenheitParaCelsius = (f = props.fahrenheit)  => {
        return (f - 32) * 5/9;
    }
    var kelvin = (k = props.kelvin) => {
        return {
            celcios: k - 273.15,
            fahrenheit: (k - 273.15) * 9/5 + 32,
        }
    }
    return (
        <div className="eu-card-component">
            <h1>FUNC01: {celsiusParaFahrenheit()}</h1>
            <h1>FUNC02: {fahrenheitParaCelsius()}</h1>
            <h1>FUNC03: C: {kelvin().celcios}, F: {kelvin().fahrenheit}</h1>
        </div>
    )
}