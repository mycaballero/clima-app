import React from "react"
import ErrorBoundary from "./ErrorBoundary"

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary,
}

const ComponentWithoutError = () => <h1>sin errores</h1>
const prop = undefined
const ComponentWithError = () => <h1>{prop.hola}</h1>

export const ErrorBoundaryExample = () => (
<ErrorBoundary>
    <ComponentWithoutError/>
</ErrorBoundary>
)

export const ErrorBoundaryWithError = () => (
<ErrorBoundary>
    <ComponentWithError/>
</ErrorBoundary>
)