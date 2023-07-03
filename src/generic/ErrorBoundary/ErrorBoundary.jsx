import React, { Component } from "react"

class ErrorBoundary extends Component {

    constructor(props) { // Constructor es para definir un estado base
        super(props) // Super viene del componente extendido
        this.state = { 
            isActivated: false, 
        }
    }

    isActivated = () => this.state.isActivated ? "Está activado" : "No está activado"

    onClickHandler = () => {
        this.setState({ isActivated: true })
    }

    // Eventos del ciclo de vida
    componentDidMount() { 
        console.log("component ha sido montado!") // Esto se ejecuta en la primera renderización
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("estado previo: ", prevState.isActivated) // muestra estado previo
        console.log("estado acutal: ", this.state.isActivated) // Muestra estado actual
        console.log("Componente ha sido acutalizado") // mensaje de acutalizado
    }

    componentWillUnmount() {
        console.log("coponente desmontado.")
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    Activado
                </button>
                <h1>
                    Algo falló. {this.props.saludo}
                    {this.isActivated()}
                </h1>
            </div>
        )
    }
}
export default ErrorBoundary