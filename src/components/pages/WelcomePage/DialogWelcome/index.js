import classNames from 'classnames'
import "./DialogWelcome.css";
import Button from '../../../content/button'
// import Personage from '../../../personages/personage'

const DialogWelcome = ({
    texts,
    nextScene
}) => {
    return (
        <>
        <div className="welcome-dialog-container">
            <div className={classNames({
                "welcome-fl-left-container": true,

            })}>
                <div className={classNames({ 
                    "welcome-fl" : true,
                })}/>
            </div>
            <div className="welcome-dialog-content">
                <div className="welcome-dialog-boxText">
                    
                    {/* <div className="avatar-mobile-container">
                        <div className="avatar-mobile">
                            <Personage />
                        </div>
                    </div> */}

                    { texts.title &&   
                        <div className="welcome-dialog-title">
                            { texts.title }
                        </div>
                    }

                    { texts.p.map((text, index) => (
                        <div 
                            key={index}
                            className="welcome-dialog-text"
                        >
                            { text }
                        </div>
                    ))}
                    
                    {/* <div className="welcome-dialog-text-question">
                    ?Lorem ipsum dolor sit amet consectetur adipisicing elit ?
                    </div> */}
                </div>
            </div>
            <div className="welcome-dialog-footer">
                {/* <div className="welcome-dialog-btns-container">
                </div> */}
                <div className="welcome-dialog-btn-next">
                    {/* <div className="welcome-dialog-btn-right">
                        <Button 
                            type="arrow right"
                        />
                    </div> */}

                    <Button 
                        type="next"
                        onClick={nextScene}
                    />
                    {/* <div className="welcome-dialog-btn-left">
                        <Button 
                            type="arrow left"
                        />
                    </div> */}
                </div>
            </div>
            <div className={classNames({
                    "welcome-fl-bottom-container": true,

                })}>
                    <div className={classNames({ 
                        "welcome-fl" : true,
                    })}/>
                </div>
        </div>
        </>
    )
}

export default DialogWelcome;