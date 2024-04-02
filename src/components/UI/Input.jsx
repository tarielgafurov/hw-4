import "./Input.css"

const Input = ({ placeholder , onChange , type , id}) => {  // playceholder , onChange , type

    // const { placeholder , onChange , type} = props

    return (
        <input placeholder={placeholder} onChange={onChange} type={type} id={id} />
    )
}

export default Input