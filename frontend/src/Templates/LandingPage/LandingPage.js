import './LandingPage.scss'
import BittrLogo from "../../Atoms/BittrLogo/BittrLogo";

const LandingPage = () => {
    return (
        <main className={'landing-page-main'}>
            <div className={'landing-page-image-container'}>
                <img src={'images/lemons-background.png'} alt={'lots of lemons!'}/>
            </div>
            <div className={'landing-page-content-container'}>
                <div>
                    <div className={'landing-page-header'}>
                        <h1 className={'landing-page-h1'}>Bittr</h1>
                        <BittrLogo style={'landing-page-bittr-header-logo'}/>
                    </div>
                    <h2>In the grand scheme of things, nothing really matters</h2>
                </div>
                <div className={'landing-page-signup-in'}>
                    <p className={'landing-page-p'}>Sign up</p>
                    <p className={'landing-page-subtext'}>...or don't, it's up to you</p>
                    <a href={'/auth?show=signup'} className={'landing-page-button sign-up-button '}>SIGH-N UP</a>
                </div>
                <div className={'landing-page-signup-in'}>
                    <p className={'landing-page-p'}>Already have an account?</p>
                    <p className={'landing-page-subtext'}>What are you doing here then?</p>
                    <a href={'/auth?show=signin'} className={'landing-page-button sign-in-button'}>SIGH-N IN</a>
                </div>
            </div>
        </main>
            )
}

export default LandingPage