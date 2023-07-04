import React, { Component } from "react"

class ErrorBoundary extends Component {

    constructor(props) { // Constructor es para definir un estado base
        super(props) // Super viene del componente extendido
        this.state = { 
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // esto es igual que this.state.hasError = true PEROOO...
        // una función estatica no tiene acceso a los datos de la instacia
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Con esto podemos motrar o enviar la información del error
        console.log(error, errorInfo)
    }

    render() {
        return (
            this.state.hasError
            ? (<h1>Hay un error</h1>)
            : (this.props.children)
        )
    }
}
export default ErrorBoundary