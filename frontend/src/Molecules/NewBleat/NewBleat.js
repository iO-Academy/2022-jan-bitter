import './NewBleat.scss'
import {useState} from "react";
import sentiment from 'wink-sentiment';

const NewBleat = () => {

    const [bleatText, setBleatText] = useState('')
    const [bleatLength, setBleatLength] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const [sentimentError, setSentimentError] = useState('')

    const updateInputValue = (event) => {
        setBleatText(event.target.value)
        setBleatLength(bleatText.length)
        setErrorMessage('')
        if (bleatText.length > 250) {
            setErrorMessage('Bleat must be 250 characters or less')
        }
        if (bleatText.length > 10 && sentiment(bleatText).score > 0) {
            setSentimentError("You're not being Bittr enough!")
        } else {
            setSentimentError('')
        }
    }

    const createBleat = async () => {
        let response = await fetch('http://127.0.0.1:3001/bleats', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userId": '176d1e13-36cf-4338-85e3-611234464345',
                "bleat": bleatText
            })
        })
        console.log(response)
    }

    return (
        <div className={'newBleat-container'}>
            <div>
                <img className={'newBleat-profile-picture'} src={'images/profile-icon-placeholder.png'} alt={'lots of lemons!'}/>
            </div>
            <div className={'newBleat-text-container'}>
                 <textarea
                     className={'newBleat-textarea'}
                     id={'newBleat-textarea-id'}
                     name={'newBleat'}
                     onChange={event => updateInputValue(event)}
                 />
                <div>
                    <p className={'newBleat-sentiment-error'}>{sentimentError}</p>
                    <p className={'newBleat-length-text'}>Length: {bleatLength}</p>
                    <p className={'newBleat-error-message'}>{errorMessage}</p>
                    <div className={'newBleat-submit-button-container'}>
                        <button className={'newBleat-submit-button'} onClick={createBleat}>BLEAT</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewBleat