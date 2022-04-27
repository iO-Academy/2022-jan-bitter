import BittrLogo from "../../Atoms/BittrLogo/BittrLogo";
import ProfileImage from "../../Atoms/ProfileImage/ProfileImage";
import Button from "../../button/button";

const Navbar = (props) => {

    return (
        <nav>
            <ProfileImage />
            <BittrLogo />
            <Button />
        </nav>
    )
}

export default Navbar