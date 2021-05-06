import { useState, useEffect } from 'react'

import BTN_BACK from '../../../assets/INTERFACE/BTN_BACK.svg'
import select_level from '../../../assets/INTERFACE/SELECT_LEVEL.svg'
import select_level_mobile from '../../../assets/INTERFACE/SELECT_LEVEL_BG_BLUE.svg'

import TITLE_MODULE_1 from '../../../assets/INTERFACE/TITLE_MODULE_1.svg'
import TITLE_MODULE_1_MOBILE from '../../../assets/INTERFACE/TITLE_MODULE_1_MOBILE.svg'

import TITLE_MODULE_2 from '../../../assets/INTERFACE/TITLE_MODULE_2.svg'
import TITLE_MODULE_2_MOBILE from '../../../assets/INTERFACE/TITLE_MODULE_2_MOBILE.svg'

import TITLE_MODULE_3 from '../../../assets/INTERFACE/TITLE_MODULE_3.svg'
import TITLE_MODULE_3_MOBILE from '../../../assets/INTERFACE/TITLE_MODULE_3_MOBILE.svg'

import MenuHome from '../../content/MenuHome/index'
import Button from '../../content/button/index'

import "./header.css"

const showBtn = {
    "back": ['welcome', 'selectLevel', 'game-speak-intro'],
    "select-level": ['selectLevel'],
    "title-module": ['welcome']
};

const Header = ({
    scene,
    state,
    backScene,
    goToScene,
    modalHome,
    modalHelp,

    stateSound,
    setStateSound,

    titleModule
}) => {
    const [mobile, setMobile] = useState(false);

    const imgTitleModule = () => {

        switch(titleModule){
            case '2': 
                return mobile ? 
                    TITLE_MODULE_2_MOBILE 
                    : 
                    TITLE_MODULE_2
            case '3':
                return mobile ? 
                    TITLE_MODULE_3_MOBILE 
                    : 
                    TITLE_MODULE_3                
            default: 
                return mobile ? 
                    TITLE_MODULE_1_MOBILE 
                    : 
                    TITLE_MODULE_1
        }
    }

    useEffect(()=>{
        setMobile(window.innerWidth < 650)
    }, [])

    return (
        <div className="header-container">
            <div className="header-content">
                
                {(showBtn['back'].includes(scene)) && 
                    <div 
                        className="btn-return"
                        onClick={backScene}
                    >
                        <img 
                            src={BTN_BACK}
                            alt=""
                        />
                    </div>           
                }
                {(showBtn['select-level'].includes(scene)) && 
                    <div className="select-level">
                        <img 
                            src={mobile ? 
                                select_level_mobile 
                                : 
                                select_level
                            }
                            alt=""
                        />
                    </div>
                }

                {(showBtn['title-module'].includes(scene)) && 
                    <div className="select-level">
                        <img 
                            src={imgTitleModule()}
                            alt=""
                        />
                    </div>
                }       

                <div className="menu-btns">
                    <MenuHome
                        onCallHome={modalHome}  
                        onCallMusic={()=> {setStateSound(!stateSound) }}
                        stateSound={stateSound}
                    />
                </div> 

                <div className="header-mobile">
                    <div className="header-mobile-btn-container">
                        <div className="header-mobile-btn">
                            <Button 
                                type="home"
                                onClick={modalHome}
                            />
                        </div>
                        <div className="header-mobile-btn">
                        {(showBtn['back'].includes(scene)) && 
                            <Button 
                                type="back"
                                onClick={backScene}
                            />
                        }   
                        </div>
                    </div>

                    <div className="header-mobile-btn-container">
                        <div className="header-mobile-btn">
                            <Button 
                                type={`${stateSound ? "music" : "music muted"}`}
                                onClick={()=> {setStateSound(!stateSound) }}
                                
                            />
                        </div>
                        <div className="header-mobile-btn">
                            <Button 
                                type="help"
                                onClick={modalHelp}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;