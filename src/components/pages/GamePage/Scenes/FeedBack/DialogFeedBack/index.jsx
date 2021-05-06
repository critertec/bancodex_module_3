import { useEffect} from 'react'
import classnames from 'classnames'
import "./DialogFeedBack.css"
import Button from '../../../../../content/button'
import GIRL_MOBILE from '../../../../../../assets/PERSONAJES/GIRL_MOBILE.svg'

const DiaglogFeedBack = ({
    Personage,
    currentOption,
    onCall
}) => {

    // useEffect(()=>{
    //     console.log('diagloFeed', type)
    // }, [])

    return (
        <div className="dialogFeedBack-container">
            <div className={classnames({
                "dialogFeedBack-content-container": true
            })}>
                <div className={classnames({
                    "dialogFeedBack-content": true,
                    'success': currentOption?.type == 'buena',
                    'warning': currentOption?.type === 'neutral',
                    'danger': currentOption?.type === 'mala'
                })}>
                    <div className="dialogFeedBack-boxText">

                        <div className="avatar-mobile-container">
                            <div className="avatar-mobile">
                                <img src={GIRL_MOBILE}  alt="" />
                            </div>
                        </div>

                        <div className="dialogFeedBack-text">
                            {currentOption.feedback}
                        </div>
                        {/* <div className="dialogFeedBack-text-question">
                            ?Lorem ipsum dolor sit amet consectetur adipisicing elit ?
                        </div> */}
                    </div>
                </div>

                <div className="dialogFeedBack-footer">
                    <div className="dialogFeedBack-btn-next">
                        <Button 
                            type="next"
                            onClick={onCall}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaglogFeedBack;