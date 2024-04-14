
import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Btn({
    label,
    onClick = () => {},
    className,
    type = "button",
    icon = "",
    disabled
}) {
   

    return (
        <>
            <Btn
                type={type}
                className={className}
                onClick={onClick} // Usa la función handleButtonClick como manejador de clics
                disabled={disabled}
            >
            
                {label}
            </Btn>
            <Button variant="primary" size="lg" className="custom-button">
                Mi Botón
            </Button>
       </>
    );
}