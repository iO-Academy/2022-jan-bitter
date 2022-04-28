import './Bleat.scss'

const Bleat = (props) => {
    return (
        <div className="bleatCard">
            <img className="profile-icon-placeholder" src="/images/profile-icon-placeholder.png" alt="A placeholder image for the user profile" />
            <div className="bleatContents">
                <h2>@{props.username}</h2>
                <p className="bleatText">{props.bleat}</p>
                <p className="bleatTime"> bleated: {props.bleatTime}</p>
            </div>
        </div>
    )
}

export default Bleat