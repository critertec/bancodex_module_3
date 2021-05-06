import "./containerApp.css"
import React from 'react';
import { useState, useEffect } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'

import useSound from 'use-sound';
import SoundBG from '../../../assets/SOUNDS/bensound-memories.mp3'

const ContainerApp = (props) => {
    const { stateSound, children } = props;

    const [soundBg, soundBgOptions] = useSound(SoundBG, {
        volume: '0.15',
        interrupt: true,
        soundEnabled: true
    });

    useEffect(()=>{
        // console.log('soundBgOptions', soundBgOptions);
        if (!stateSound){
          soundBgOptions.stop();
          return;
        }
    
        if (soundBgOptions.sound && !soundBgOptions.isPlaying){
          soundBg();
        //   console.log('playyy')
        }
        
      }, [!soundBgOptions.sound, !stateSound, !soundBgOptions.isPlaying])

    return (
        <div className="layout-container">
            <Header  
                {...props}
            />

            <div className="layout-content">
                { children }
            </div>

            {props.scene === 'selectLevel' &&
                <div className="layout-footer">
                    <Footer  
                        {...props} 
                    />
                </div> 
            }

        </div>
    )
}

export default ContainerApp;