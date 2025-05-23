import React from "react";
import '../../CSSFiles/balloons.css';


// const ROTATIONAL_CENTER = '-18px 16px'
const ROTATIONAL_CENTER = '-11px 9px'

export default function DartIcon(props) {


    const constantStyle = {
            width: 0,
            height: 0,
            transformOrigin: ROTATIONAL_CENTER,
            position: 'relative',
            zIndex: 20,
        }
    const combinedStyles = {...constantStyle, ...props.outerStyle}

    return(<>
    
    <div style={combinedStyles}>

        {/* Rotational center (used for developing) */}
        {/* <div style={{
            position: 'absolute',
            left: ROTATIONAL_CENTER.split(' ')[0],
            top: ROTATIONAL_CENTER.split(' ')[1],
            height: '4px',
            width: '4px',
            backgroundColor: 'red',
            zIndex: 100,
        }}></div> */}

        {/* Dart */}
        <div style={{
            height: '0px',
            width: '0px',
            position: 'relative',
            // border: '10px solid red', 
        }}>
            {/* Vertical Bar */}
            <div style={{
                // height: '38px',
                width: '9px',
                position: 'absolute',
                zIndex: 10,

                // Centers bar
                // left: '-5px',
                // top: '-17px',

                // offset to match dart shaft 
                left: '-26px',
                top: '4px',
                borderBottom: '38px solid black',
                borderRight: '2px solid transparent',
            }}>

            </div>

            {/* Horizontal bar */}
            <div style={{
                height: '10px',
                // width: '38px',
                borderLeft: '38px solid black',
                borderBottom: '0px solid transparent',
                borderTop: '2px solid transparent',
                position: 'absolute',
                
                // Centers bar
                // left: '-19px',
                // top: '-3px',

                // offset to match dart shaft, so dart tip is centered 
                left: '-41px',
                top: '16px',
                zIndex: 12,
                
            }}>

            </div>

            {/* Dart shaft */}
            <div style={{
            
            width: '14px',
            height: '0px',
            borderLeft: '4px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: '24px solid blue',
            transform: 'rotate(45deg)',
            position: 'absolute',

            top: '-2px',
            left: '-16px',
            zIndex: 5,
            
            }}>
                
            </div>
        </div>
    </div>

</>);}