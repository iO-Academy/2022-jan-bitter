import './LandingPage.scss'
import BittrLogo from "../../Atoms/BittrLogo/BittrLogo";
import Button from "../../Atoms/button/button";

const LandingPage = () => {
    return (
        <main>
            <div className={'landing-page-content-container'}>
                <div className={'landing-page-header'}>
                    <div className={'logo-with-text'}>
                        <h1>Bittr</h1>
                        <BittrLogo />
                    </div>
                    <h2>In the grand scheme of things, nothing really matters</h2>
                    </div>
                <div className={'button-and-label'}>
                    <p>Sign up</p>
                    <p>Or don't, I couldn't care less</p>
                    <Button
                        name={'SIGH-N UP'}
                        href={'/auth?show=signup'}
                    />
                </div>
                <div className={'button-and-label'}>
                    <p>Already have an account?</p>
                    <p>Why are you here then?</p>
                    <Button
                        name={'SIGH-N IN'}
                        href={'/auth?show=signin'}
                    />
                </div>
            </div>

        </main>
            )
}

export default LandingPage