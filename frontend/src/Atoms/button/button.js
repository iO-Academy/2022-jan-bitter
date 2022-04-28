import './Button.scss'

const Button = (props) => {
    return (
        <a href={props.href}>
            <button className={props.style} onClick={props.handleClick}>{props.name}</button>
        </a>
    )
}

export default Button
