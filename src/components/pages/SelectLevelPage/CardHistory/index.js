import { useState } from 'react';
import classNames from 'classnames'

import "./CardHistory.css"

import icon_eye from '../../../../assets/INTERFACE/ICON_EYE.svg'
import icon_eye_close from '../../../../assets/INTERFACE/ICON_EYE_CLOSE.svg'

import Button from '../../../content/button'
import Personage from '../../../personages/personage'

import HeaderStars from '../../../content/HeaderStars/index'

const CardHistory = ({
    story,
    onCall
}) => {
    const {
        title,
        cover,
        desc,
        personage,
        score,
     } = story;
    const [showDesc, setShowDesc] = useState(false);

    return (
        <div className="cardHistory-container">
                <div className="btn-eye-container">
                    <div 
                        className="btn-eye"
                        onClick={()=> {setShowDesc(!showDesc)}}
                    >
                        <img 
                            className="img"
                            src={!showDesc ? icon_eye : icon_eye_close}
                            alt=""
                        />
                    </div>
                </div>
            <div className="cardHistory-stars">
                <HeaderStars 
                    story={story}
                    puntage={score}
                />
            </div>
            <div className="cardHistory-content">
                <div className={classNames({
                    "cardHistory-content-bg": true,
                    "desc": showDesc
                })}>
                    {
                        !showDesc ?
                        <>
                            <div className="cardHistory-content-personage">
                                <Personage 
                                    name={personage}
                                />
                            </div>
                            <div className={cover} />
                        </>
                        :
                        <div className="cardHistory-content-text">
                            {desc}
                        </div>
                    }
                </div>

            </div>
            <div className="cardHistory-btn-next-container">
                <div 
                    className="cardHistory-btn-next"
                    onClick={onCall}
                >
                    <Button 
                        type={title}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardHistory;