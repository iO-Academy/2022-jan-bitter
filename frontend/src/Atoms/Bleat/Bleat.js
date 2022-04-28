import ProfileImage from "../ProfileImage/ProfileImage";


const Bleat = (props) => {
    return (
        <div className="bleatCard">
            <div className="bleatContents">
                <ProfileImage />
                <h2>{props.username}</h2>
                <p>{props.bleat}</p>
                bleat time
            </div>
        </div>
    )
}