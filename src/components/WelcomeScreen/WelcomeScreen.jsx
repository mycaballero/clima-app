import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null) // se le pasa null proque inicialemnte retorna null
    const [vanta, setVanta] = useState(0) // vanta va a ser inicializado en "0"
    console.log("my ref div",myRefDiv.current)// el valor inicial es nulo
    useEffect(() => {
        console.log("my ref div useEfect",myRefDiv.current)
        if (!vanta) {
            // Activo el efecto "clouds"
            setVanta(
                Clouds({
                    THREE,
                    el:myRefDiv.current
            })) // vata está inicializado vanta = 1
            console.log("valor de vanta diferente a 0")
        }
        // Al salir de la pantalla no sigua funcionandoñ
        // desasociar todos los recursos (div + vanta effect)
        return () => {
            // realizar la limpieza y procesos necesarios
            if (vanta) {
                vanta.destroy()
                console.log("recursos liberados")
            }
        }
    }, [vanta]) // se agrega el estado vanta al array e dependenias para mejorar la eficiencia

    return (
        <div className="fixed | w-full h-screen" ref={myRefDiv} >
            {children}
        </div>
    )
}
WelcomeScreen.prototypes = {
    children: PropTypes.node,
}

export default WelcomeScreen