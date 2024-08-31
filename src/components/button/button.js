import "./button.css"

const displayLabel = ({label}) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label}) => {
    return(
        <button class="btn" onClick={() => {displayLabel({label})}}>
            Botao aaaaaaaaaaaaaaaaaaaaaaaaaa
        </button>
    )
}

export default Button