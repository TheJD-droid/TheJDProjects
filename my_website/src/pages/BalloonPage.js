import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
//import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
//import { useState } from "react";
import { Slider } from "@mui/material";
import BalloonGameState from "../components/BalloonGame/BalloonGameState";

export default function BalloonPage() {
    
      //let popSound = new Audio('../../assets/balloonpop-83760.mp3');

    //   document.addEventListener("DOMContentLoaded",() => {
    //     let bubbleWrap = document.getElementById("balloon"),
    //         popSound = new Audio('../../assets/balloonpop-83760.mp3')
    //     bubbleWrap.addEventListener("change",() => {
    //         popSound.play();
    //     });
    // });
    //const [poppingSoundNow, setPoppingSoundNow] = React.useState(false);
    const [onReset, setOnReset] = React.useState(false)
    //const [onPopped, setOnPopped] = React.useState(false)
    const [toBePopped, setToBePopped] = React.useState(-1);
    //const numberOfBalloons = 10;

    const [numberOfBalloons, setNumberOfBalloons] = React.useState(10)

    //const [whichBalloonToPop, setWhichBalloonToPop] = React.useState(1);
    const [triggerReset, setTriggerReset] = React.useState(false)
    const [gameState, setGameState] = React.useState(new BalloonGameState(true, 0, 10))
    const [animationResetFlag, setAnimationResetFlag] = React.useState(false);


    const handleChangeOfBalloons = (event, newValue) => {
        setNumberOfBalloons(newValue)
        //gameState.numberOfBalloons = numberOfBalloons
        setOnReset(true)
        //setOnReset(true)
        //setOnReset(false)
        //setOnReset(false)

    }

    useEffect(() => {

        setOnReset(false)

    }, [triggerReset]) 
    
    
    // function triggerReset() {
    //     console.log('triggerReset called')
    //     if (onReset) {
    //         setOnReset(false)
    //     }
    //     if (!onReset) {
    //         setOnReset(true)
    //     }
    //     if (onReset) {
    //         setOnReset(false)
    //     }
    //     setGameState(new BalloonGameState(true, 0, numberOfBalloons))
    //     //console.log(gameState)
    // }



    useEffect(() => {
        console.log('onReset change registered')
        if (onReset) {
            console.log('reset triggered')
            setToBePopped(-1)
            setGameState(new BalloonGameState(true, 0, numberOfBalloons))
            setTriggerReset(true)
            
        }

        if (!onReset) {
            setTriggerReset(false)
        }
        
        
    }, [onReset, gameState, numberOfBalloons]);

    useEffect(() => {
        console.log('numberOfBalloons change detected')
        console.log(numberOfBalloons)
        //setGameState(new BalloonGameState(gameState.ongoing, gameState.balloonsPopped, numberOfBalloons))
        //console.log(gameState)
        //triggerReset()
    }, [numberOfBalloons])

    useEffect(() => {
        if (toBePopped > numberOfBalloons) {
            setToBePopped(-1)
        }
    }, [toBePopped, numberOfBalloons]);


      const handlePop = (x) => {
        setToBePopped(x)
      }
      const handleAnimationReset = (x) => {
        console.log('handleAnimationReset called with value:')
        console.log(x)
        setAnimationResetFlag(x)
      }


    

    return(
        <Grid container direction='column' alignItems='center' style={{border: '2px solid green', margin: '5px'}}>
            
            
            <Grid item style={{marginLeft: '5vw', marginRight: '5vw'}}>
            
            <Grid container direction='row' justifyContent='center' style={{ marginLeft:'150px', marginRight: '150px', background:'hsl(70, 31%, 85%)', textAlign: 'center', width: 'fit-content', maxWidth: '600px'}}>
                

                {createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, animationResetFlag, handleAnimationReset)}
                
                
            </Grid>
            
            
            </Grid>
            <Grid item>
            <Grid container direction='column' style={
                {
                    // border: '2px solid green', 
                    maxWidth: '80vw'

                }
                }>
                <Grid item style={{maxWidth: '80vw'}}>
                    <div>
                    <Button onClick={() => {
                            // setToBePopped(whichBalloonToPop);
                            // setWhichBalloonToPop(((whichBalloonToPop % 10) + 1))
                            //handlePop(-1);
                            console.log('handle animation reset called by line 146:')
                            handleAnimationReset(true)
                            //handleAnimationReset(true)
                            console.log('animationResetFlag as seen by balloonPage:')
                            if (animationResetFlag) {
                                console.log(`true: ${animationResetFlag}`)
                            }
                            if (!animationResetFlag) {
                                console.log(`false: ${animationResetFlag}`)
                            }
                            // setToBePopped(-1)
                            console.log('toBePopped as seen by balloonPage:')
                            console.log(toBePopped)
                            if (onReset) {
                                setOnReset(false)
                            }
                            let trialOutcome = trial(numberOfBalloons)
                            console.log(trialOutcome)
                            if (trialOutcome !== 0) {
                                setToBePopped(trialOutcome)
                            }
                            else if (trialOutcome === 0) {
                                //setOnReset(true)
                            }
                            //console.log(window)


                        }}>Pop</Button>
                        <Button onClick={() => {
                            
                            setOnReset(true)
                            
                            }}>Reset</Button>
                    <Button onClick={() => {
                            // setToBePopped(5);
                            console.log('current state:')
                            console.log('onReset')
                            console.log(onReset)
                            console.log('toBePopped');
                            console.log(toBePopped);
                            console.log('numberOfBalloons')
                            console.log(numberOfBalloons)
                            console.log('gameState:')
                            console.log(gameState)
                        }}>Print State</Button>
                    </div>
                </Grid>
                <Grid item style={{width: '80vw', maxWidth: '60vw'}}>
                    <Grid container direction='row'>
                        {/* <Grid item style={{width: '20vw', border:'2px solid green'}} /> */}
                        {/* <Grid item style={{width: '80vw', border: '2px solid red'}}> */}
                         
                                <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" value={numberOfBalloons} onChange={handleChangeOfBalloons}/>
                          
                        {/* </Grid> */}
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        
    );
}


// function randomColor() {
//     let firstNum = Math.floor(255 * Math.random())
//     let secondNum = Math.floor(100 * Math.random())
//     let thirdNum = Math.floor(60 * Math.random()) + 20

//     return (`hsl(${firstNum.toString()},${secondNum.toString()}%,${thirdNum.toString()}%)`);
// }

// function randomAnimationDuration() {
//     let duration = Math.floor(16 * Math.random()) + 4
//     return (`${duration}s`);
// }


function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, animationResetFlag, handleAnimationReset) {
    // let list = new ArrayList[];
    let result = []
    //let row = new Array()
    //result = wrapWithRow(result)
    for (let i = 0; i < numberOfBalloons; i++) {
        //console.log(i)
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop} gameState={gameState} animationResetFlag={animationResetFlag} handleAnimationReset={handleAnimationReset}></Balloon></Grid>));
        
        //result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
        // row = row.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
        // if (i % 20 == 0 || i == numberOfBalloons - 1) {
        //     result = result.concat(wrapWithRow(row))
        //     row = []
        // }
    }
    // console.log('result:')
    // console.log(result)
    // if (numberOfBalloons <= 20) {
    //     result = wrapWithRow(result)
    // }
    return result;
}


// function wrapWithRow(toBeWrapped) {
//     let result = []
//     result = result.concat(<Grid container direction='row' alignItems='center' children={toBeWrapped} style={{border:'2px solid red', textAlign: 'center'}}></Grid>)
//     return result;
// }

/*
function createBalloonStates(numberOfBalloons) {
    let result = new Array()
    for (let i = 0; i < numberOfBalloons; i++) {
        const [balloonState, setBalloonState] = React.useState('balloon');
        result.concat({i: {balloonState, setBalloonState}});
    }
}
*/
function trial(numberOfBalloons) {
    let coinFlip = Math.floor(2 * Math.random())

    //Heads
    if (coinFlip === 1) {
        console.log('heads')
        return (Math.floor(numberOfBalloons * Math.random()) + 1);

    }
    //Tails
    else if (coinFlip === 0) {
        console.log('tails')
        // return 0;
        return 1;

    }
    //Impossible
    else {
        console.log('Error, coinFlip did not come up heads or tails')
    }

}