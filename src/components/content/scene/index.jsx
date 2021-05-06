import classnames from 'classnames';

import DialogDesc from '../Dialogs/DialogDesc/index'
import DialogOptions from '../Dialogs/DialogSelectOption/index'
import DialogFeedBack from '../Dialogs/DialogFeedBack/index'
import Personage from '../../personages/personage'

import "./scene.css";

const Scene = ({
    currentStory,
    currentQuestion,
    currentOption,
    scene,
    nextScene,
    selectOption,
    newQuestion,
    
}) => {
 
    const getSide = () => {
        
        if (scene === 'game-feedback')
            return 'left';

        if (selectOption 
            && (currentQuestion?.num % 2) 
            === 0
        )
            return 'left';

        return 'right';
    }

    const personageActionScene = () => {
        if (scene === 'game-options'){
            return 'thinking'
        }

        if (scene === 'game-speak' && currentQuestion.personageAction){
            return currentQuestion.personageAction;
        }
    }

    const CurrentPersonage = () => {
        return (
            <div className={classnames({
                [`personage-${getSide()}`]: true
            })}>
                <Personage
                    name={  scene === 'game-feedback' ?
                        'girl'
                        :
                        currentStory.personage
                    }
                    action={personageActionScene()}
                />
            </div>
        )
    }

    const DialogBox = () => {
        const DialogCustom = () => {
            switch(scene){
                case 'game-feedback':
                    return (
                        <DialogFeedBack 
                            side={getSide()}
                            Personage={CurrentPersonage}
                            currentOption={currentOption}
                            onCall={newQuestion}
                        />
                    )
                case 'game-options':
                    return (
                        <DialogOptions 
                            currentStory={currentStory}
                            currentQuestion={currentQuestion}
                            selectOption={selectOption}
                        />
                    )
                default:
                    return (
                        <DialogDesc
                            side={getSide()}
                            namePersonage={currentStory?.personage}
                            Personage={CurrentPersonage}
                            currentQuestion={currentQuestion}
                            nextScene={nextScene}
                        /> 
                    )
            }
        }
         return (
            <div className="scene-box">
                <DialogCustom />
            </div>
        )
    }

    const PersonageBox = () => {
        return (
            <div className="scene-personage-container">
                <div className="scene-personage">
                    <CurrentPersonage />
                </div>
            </div>            
        )
    }

    // useEffect(()=>{
    //     console.log("historySelected", currentStory)
    // }, [])

    return (
        <div className="scene-container">
            <div className={classnames({
                [currentStory.cover]: true,
                'bg': true
            })}>
                <div className={classnames({
                    "scene-title-container": true,
                    "left": scene !== "game-speak-intro"
                })}>
                    <div className="scene-title-content">
                        <div className={`title-module-${currentStory.id}`}/>
                    </div>
                </div>
                <div className={classnames({
                    "scene-content": true,
                    [getSide()]: true
                })}>  
                    <DialogBox /> 
                    <PersonageBox />
                </div>
            </div>
        </div>
    )
}

export default Scene;