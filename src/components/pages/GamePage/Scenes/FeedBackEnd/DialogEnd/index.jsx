import {  useEffect } from 'react'
import Button from '../../../../../content/button'
import HeaderStars from '../../../../../content/HeaderStars/index'
import "./DialogEnd.css"

const DialogEnd = ({
    currentStory,
    currentQuestion,
    currentPuntage,
    onCallNext,
    onCallReturn
}) => {

    useEffect(()=>{
        console.log('DialogEnd', currentQuestion)
    }, [])

    const TextDesc = () => {
        if (!currentQuestion) return '';
        let desc = "";
        let question;

        if (currentQuestion.pages){
            desc = currentQuestion?.pages[0]?.desc;
            question = currentQuestion?.pages[0]?.question;
        }

        if (currentQuestion.feedback){
            desc = currentQuestion.feedback;
        }

        return (
            <>
                { Array.isArray(desc) ? 
                        desc.map( (t, index) => (
                            <div 
                                key={index}
                                className="dialogHistory-text"
                            >
                                { t }
                            </div> 
                        ))
                    :
                    <div className="dialogHistory-text">
                        { desc }
                    </div>  
                }
                { question && (
                    <div className="dialogHistory-text" style={{
                        textAlign: 'center',
                        marginTop: '10px'
                    }}> 
                        {question } 
                    </div>)
                }
            </>
        )
    }

    return (
        <div className="dialogEnd-container">
            <div className="dialogEnd-stars-container">
                <div className="dialogEnd-stars">
                    <HeaderStars 
                        story={currentStory}
                        puntage={currentPuntage}
                    />
                </div>
            </div>

            <div className="dialogEnd-content-container">
                <div className="dialogEnd-content">
                    <div className="dialogEnd-text-container">
                        {/* <div className="dialogEnd-text-content"> */}
                        {/* <div> */}
                            <TextDesc />
                        {/* </div> */}
                    </div>

                    <div className="dialogEnd-footer">
                        <div className="dialogEnd-footer-content">
                            <div className="dialogEnd-btn-next">
                                <Button 
                                    type="next"
                                    onClick={onCallNext}
                                />
                            </div>
                            <div className="dialogEnd-btn-return">
                                <Button 
                                    type="return"
                                    onClick={onCallReturn}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DialogEnd;