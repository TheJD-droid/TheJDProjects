import React from "react";
import Pdf from '../assets/TheBalloonProblem.pdf'


//TODO: FIX WINDOW SIZING

export default function BalloonProblemPDF() {


    //const heightOutput = 
    //const widthOutput = document.querySelector("#width");
    const [height, setHeight] = React.useState(window.innerHeight)
    const [width, setWidth] = React.useState(window.innerWidth)

    function updateSize() {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    //updateSize();
    window.addEventListener("resize", updateSize);
    //const onOpen = open(Pdf, "_blank")
    //const newWindow = window.open(Pdf, '_blank');
    return (
        
    <>
    {/* <p>Resize the browser window to fire the <code>resize</code> event.</p> */}
{/* <p>Window height: {height}</p> */}
{/* <p>Window width: {width}</p> */}
        <iframe class="pdf" 
                src={Pdf}
            width={width > 200 ? width - 100 : width - 10} height={height - 160}>
        </iframe>
        </>
    )

}