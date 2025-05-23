import '../../CSSFiles/balloons.css'
import React, { useEffect, useCallback } from 'react';
import balloonPopSound from '../../assets/balloonpop.mp3';
import DartIcon from './DartIcon';



export default function Balloon(props) {

    

    

    const randomColor = useCallback(() => {
        // console.log('randomColor called')
        let firstNum = Math.floor(255 * Math.random())
        let secondNum = Math.floor(100 * Math.random())
        if (props.idNum === -2) {
            let thirdNum = Math.floor(30 * Math.random()) + 40
            return (`hsl(${firstNum.toString()},${secondNum.toString()}%,${thirdNum.toString()}%)`);
        }
        else {
            let thirdNum = Math.floor(60 * Math.random()) + 20
            return (`hsl(${firstNum.toString()},${secondNum.toString()}%,${thirdNum.toString()}%)`);
        }
    }, [props.idNum])
    
    
    function randomAnimationDuration() {
        let duration = Math.floor(19 * Math.random()) + 1
        return (`${duration}s`);
    }
    
    function randomPopDuration() {
        let duration = ((0.25 * Math.random()) + 0.75)
        return (`${duration}s`)
    }

    // Pick a random number (between 1 and 5) that is not equal to the number passed as an argument
    function pickRandNotNum(num) {
        
        // Numbers that can be chosen
        let possibleNumbers = [1,2,3,4,5];
        
        // Checks if num is among possible numbers
        const index = possibleNumbers.indexOf(num)
        
        // If num is in possibleNumbers, remove it
        if (index > -1) {
            possibleNumbers.splice(index, 1)
        }

        // Pick a random number from among the remaining possibleNumbers
        let randomNum = Math.floor(possibleNumbers.length * Math.random());
        
        return possibleNumbers[randomNum];
    }



    const [balloonState, setBalloonState] = React.useState('balloon');

    const [chosenColor, setChosenColor] = React.useState(() => {return randomColor()});
    const [chosenDuration, setChosenDuration] = React.useState(() => {return randomAnimationDuration()});
    const [hitAnimation, setHitAnimation] = React.useState(0);
    const [popDuration, setPopDuration] = React.useState(() => {return randomPopDuration()});
    // const [isHit, setIsHit] = React.useState(0)

    function playSound() {
        new Audio(balloonPopSound).play()
    }


    useEffect(()=> {
        if (props.onReset) {
            //console.log('props.onReset === true')
            setChosenColor(randomColor());
            setChosenDuration(randomAnimationDuration());
            setPopDuration(randomPopDuration());
            setBalloonState('balloon');
            setHitAnimation(0);
            
        }
    }, [props.onReset, randomColor])

    
    useEffect(() => {
        if (balloonState === 'balloon popped') {
            playSound()
            
        }
    }, [balloonState])
    

    useEffect(() => {
        
        if((props.toBePopped === props.idNum) && (balloonState !== 'balloon popped')) {
            setBalloonState('balloon popped')
            props.gameState.balloonsPopped = props.gameState.balloonsPopped + 1
            props.handleGameState()
        }
        

    }, [props, balloonState])




    useEffect(() => {
        if ((props.toBePopped === props.idNum)) {
            
            setHitAnimation(pickRandNotNum(hitAnimation))

            props.handlePop(-1)
        }
    }, [props.toBePopped, props.idNum, props, hitAnimation])

    

    const style = {
        
        sliderBalloon: {
            display: 'inline-block',
            width: '30px',
            height: '36px',
            background: chosenColor,
            borderRadius:'80%',
            position:'relative',
            boxShadow:'inset -10px -10px 0 rgba(0,0,0,0.07)',
            margin:'10px 0px',
            zIndex: 10,
        },

        sliderBalloonAfter: {
            
            //content:"▲",
            fontSize:'10px',
            color: chosenColor,
            display:'block',
            textAlign:'center',
            width:'100%',
            position:'absolute',
            bottom:'-6px',
            zIndex:-100,
        },


        default: {
            display: 'inline-block',
            width: '60px',
            height: '72px',
            background: chosenColor,
            borderRadius:'80%',
            position:'relative',
            boxShadow:'inset -10px -10px 0 rgba(0,0,0,0.07)',
            margin:'20px 0px',
            transition: 'transform 0.5s ease',
            zIndex: 10,
            animation: 'balloons 10s ease-in-out infinite',
            transformOrigin: 'bottom center',
            animationDuration: chosenDuration,
        },

        balloonAfter: {
            
            //content:"▲",
            fontSize:'20px',
            color: chosenColor,
            display:'block',
            textAlign:'center',
            width:'100%',
            position:'absolute',
            bottom:'-12px',
            zIndex:-100,
        },
        
        // Not sure if I should make the animation 1s or 0.75s?
        popped: {
            background: chosenColor,
            animation: 'pop ' + popDuration + ' cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards',
        },


        onHit1: {
            position: 'absolute',
            zIndex: '11',
            color: 'black',
            fontSize: 60,
            opacity: 1,
            animation: 'spotHit1 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'
            
        },
        onHit2: {
            position: 'absolute',
            zIndex: '11',
            color: 'black',
            fontSize: 60,
            opacity: 1,
            animation: 'spotHit2 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'
            
        },
    }


    return (
        <>
        {/* {props.idNum === -2 ? <></> : <ClearIcon style={isHit(hitAnimation)}  */}
        {props.idNum === -2 ? <></> : <DartIcon outerStyle={getHitAnimation(hitAnimation)}

        // onAnimationStart={(e) => {
        //     // props.handleSetHitAnimationInProgress(true)
        //     e.stopPropagation();
        // }}

        // onAnimationEnd={(e) => {
        //     // props.handleSetHitAnimationInProgress(false)
        //     e.stopPropagation();
        // }} 
        />}
        <div className={props.idNum === -2 ? 'sliderBalloon' : balloonState} style={balloonState === 'balloon popped' ? style.popped : props.idNum === -2 ? style.sliderBalloon : style.default}>
            <div style={props.idNum === -2 ? style.sliderBalloonAfter : style.balloonAfter}>
            ▲
            </div>
        </div>
        {/* <Button onClick={() => {
            handleClick();
            }}>THIS BUTTON</Button> */}
        </>

    );
}



function getHitAnimation(hitMarker) {


    


    return style_outer[`onHit${hitMarker}`]
    

}


const style_outer = {
        
    

    onHit0: {
            width: '0px',
            height: '0px',
            position: 'absolute',
            zIndex: '11',
            opacity: 0,
            transform: 'translate(35px, 50px)',
            
        },

    onHit1: {
        width: '0', 
        height: '0',
        position: 'absolute',
        zIndex: '11',
        transform: 'translate(35px, 50px)',
        animation: 'spotHit1 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'

    },
    onHit2: {
        width: '0', 
        height: '0',
        position: 'absolute',
        zIndex: '11',
        transform: 'translate(35px, 50px)',
        animation: 'spotHit2 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'

    },
    onHit3: {
        width: '0', 
        height: '0',
        position: 'absolute',
        zIndex: '11',
        transform: 'translate(35px, 50px)',
        animation: 'spotHit3 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'

    },
    onHit4: {
        width: '0', 
        height: '0',
        position: 'absolute',
        zIndex: '11',
        transform: 'translate(35px, 50px)',
        animation: 'spotHit4 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'

    },
    onHit5: {
        width: '0', 
        height: '0',
        position: 'absolute',
        zIndex: '11',
        transform: 'translate(35px, 50px)',
        animation: 'spotHit5 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'

    },
}