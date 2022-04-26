const Button = (props) => {
    return (
        <div>
            <button className={props.style} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default Button
