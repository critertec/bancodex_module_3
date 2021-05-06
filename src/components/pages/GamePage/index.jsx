
// import DialogHistory from './DialogHistory/index'
// import DialogEnd from './DialogEnd/index'
// import SelectOption from './SelectOption/index'
// import FeedBack from './FeedBack/index'
import Personage from '../../personages/personage'

import "./GamePage.css";

const GamePage = ({
    currentStory
}) => {
    return (
        <div className="game-container">
            <div className="bg-mechanics-1">
                <div className="game-title-container">
                    <div className="game-title-content">
                        <div className="title-module-1-1" />
                    </div>
                </div>
                <div className="game-content">  
                    <div className="game-box">
                        {/* <DialogHistory /> */}
                        {/* <SelectOption 
                        
                        /> */}

                        {/* <FeedBack /> */}

                        {/* <DialogEnd /> */}

                    </div>  
                    <div className="game-personage-container">
                        <div className="game-personage">
                            <Personage 
                                name={'gloria'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;