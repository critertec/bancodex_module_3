// import { useEffect } from 'react'
import "./DialogSelectOption.css"

import SELECT_OPTION from '../../../../assets/INTERFACE/SELECT_OPTION.svg'
import Option from './Option/index'

const DialogSelectOption = ({
    currentQuestion,
    selectOption
}) => {

    // useEffect(()=>{
        // console.log('selectOptin', currentQuestion)
    // }, [])
    const onSelected = (option) => {
        // console.log(option)
        selectOption({option}) 
        
    }

    return (
        <div className="dialogSelectOption-container">
            <div className="dialogSelectOption-header">
                <img 
                    src={SELECT_OPTION}
                    alt=""
                />
            </div>
            <div className="dialogSelectOption-content">
                <div className="dialogSelectOption-boxText">
                    <div className="options-container">
                        {currentQuestion.options.map(option => (
                            <Option 
                                key={option.option}
                                {...option}
                                onCall={(event)=>{
                                    // event.stopPropagation();
                                    onSelected(option)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogSelectOption;