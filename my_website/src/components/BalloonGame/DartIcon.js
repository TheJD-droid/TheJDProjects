import React from "react";
import '../../CSSFiles/balloons.css';


// const ROTATIONAL_CENTER = '-18px 16px'
// const ROTATIONAL_CENTER = '-11px 9px'
const ROTATIONAL_CENTER = '-18px 14px'

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
            backgroundColor: 'pink',
            zIndex: 100,
        }}></div> */}


        <div style={{
            position: 'absolute',
            left: '-26px',
            top: '16px',
            height: '10px',
            width: '10px',
            backgroundColor: 'yellow',
            // borderRadius: '10px',
            borderTopRightRadius: '8px',
            borderTopLeftRadius: '7px',
            borderBottomLeftRadius: '9px',
            borderBottomRightRadius: '7px',
            
            zIndex: 100,
        }}></div>

        <div style={{
            position: 'absolute',
            left: '-23px',
            top: '19px',
            height: '4px',
            width: '4px',
            backgroundColor: 'black',
            borderRadius: '10px',
            // borderTopRightRadius: '8px',
            // borderTopLeftRadius: '8px',
            // borderBottomLeftRadius: '8px',
            // borderBottomRightRadius: '8px',
            
            zIndex: 100,
        }}></div>


        

        {/* Dart */}
        <div style={{
            height: '0px',
            width: '0px',
            position: 'relative',
            // border: '10px solid red', 
        }}>
            
            {/* Vertical Bar */}
            <div style={{
                height: '38px',
                width: '10px',
                position: 'absolute',
                zIndex: 10,

                // Centers bar
                // left: '-5px',
                // top: '-17px',

                // offset to match dart shaft 
                left: '-25px',
                top: '4px',
                backgroundColor: 'black',
                borderTop: '10px solid black',
                borderRight: '5px solid red',
                borderLeft: '2px solid red',
                borderBottom: '10px solid black',
                // borderRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
            }}>

            </div>

            {/* Horizontal bar */}
            <div style={{
                backgroundColor: 'black',
                height: '8px',
                width: '38px',
                borderRight: '10px solid black',
                borderLeft: '10px solid black',
                borderTop: '5px solid red',
                borderBottom: '2px solid red',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',

                position: 'absolute',
                
                // Centers bar
                // left: '-19px',
                // top: '-3px',

                // offset to match dart shaft, so dart tip is centered 
                left: '-41px',
                top: '17px',
                zIndex: 12,
                
            }}>

            </div>

            {/* Dart shaft */}
            <div style={{
            
            width: '14px',
            height: '0px',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '16px solid blue',
            transform: 'rotate(45deg)',
            position: 'absolute',

            top: '7px',
            left: '-21px',
            zIndex: 5,
            
            }}>
                
            </div>
        </div>
    </div>

</>);}