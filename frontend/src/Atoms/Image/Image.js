const Image = (props) => {
    return (
        <>
            <img className={props.class} src={props.src} alt={props.alt}/>
        </>
    )
}

export default Image