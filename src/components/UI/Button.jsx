import "./Button.css"

const Button = (props) => {
    return (
        <button onClick={props.onClick} >{props.name}</button>
    )
}

export default Button