import './Bleat.scss'

const Bleat = (props) => {

    const date = new Date(props.bleat_time * 1000)
    const postedAt = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    const time = date.getHours() + ':' + date.getMinutes()

    return (
        <div className="bleatCard">
            <img className="profile-icon-placeholder" src="/images/profile-icon-placeholder.png" alt="A placeholder image for the user profile" />
            <div className="bleatContents">
                <h2><a href={"/"+props.username}>@{props.username}</a></h2>
                <p className="bleatText">{props.bleat}</p>
                <p className="bleatTime"> bleated: {postedAt} at {time}</p>
            </div>
        </div>
    )
}

export default Bleat