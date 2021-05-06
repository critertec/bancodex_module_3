import {  useEffect } from 'react'
import Button from '../../../../../content/button'
import HeaderStars from '../../../../../content/HeaderStars/index'
import "./DialogEnd.css"

const DialogEnd = ({
    currentQuestion
}) => {

    useEffect(()=>{
        // console.log('DialogEnd', currentQuestion)
    }, [])

    const TextDesc = () => {
        if (!currentQuestion) return '';

        const desc = currentQuestion?.pages[0]?.desc 

        return (
            <div>
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
            </div>
        )
    }

    return (
        <div className="dialogEnd-container">
            <div className="dialogEnd-stars-container">
                <div className="dialogEnd-stars">
                    <HeaderStars />
                </div>
            </div>

            <div className="dialogEnd-content-container">
                <div className="dialogEnd-content">
                    <div className="dialogEnd-text-container">
                        <div>
                            <TextDesc />
                        </div>
                    </div>

                    <div className="dialogEnd-footer">
                        <div className="dialogEnd-btn-next">
                            <Button 
                                type="history 1"
                            />
                        </div>
                        <div className="dialogEnd-btn-next">
                            <Button 
                                type="history 2"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DialogEnd;