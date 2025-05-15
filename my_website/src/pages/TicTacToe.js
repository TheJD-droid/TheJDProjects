import '../App.css';
import React, { useEffect } from "react";
import { Button, Modal, Typography, Grid, colors } from '@mui/material';
import Box from '@mui/material/Box';
import TTTBoard from '../components/TicTacToe/TTTBoard';
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import YoutubeEmbed from '../components/YoutubeEmbed';
import './TicTacToe.css';
import TTTState from '../components/TicTacToe/TTTState';
import zIndex from '@mui/material/styles/zIndex';
import TempDrawer from '../components/TempDrawer';
import WinnerAnimation from '../components/WinnerAnimation';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';
import TextureIcon from '@mui/icons-material/Texture';

const SELECTED_BORDER_COLOR = colors.blueGrey[900];
const BORDER_SIZE = '5px';
const BORDER_STYLE = 'solid';
const BORDER_COLOR = colors.blueGrey[300];

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    backgroundColor: '#333842',
    border: '2px solid',
    borderColor: colors.grey[900],
    boxShadow: 24,
    p: 4,
  };
  


function TicTacToe() {

    //initial state information for superTTTBoard
    const initialState = new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank');
    initialState.prevMove = 'None';
    initialState.winningCombo = [];
    
    //superTTTBoard state
    const [superTTTState, setSuperTTTState] = React.useState(initialState);
    const [playerTurn, setPlayerTurn] = React.useState('X');
    
    //State information to open the Modal message for winner
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    //useEffect so that handleOpenModal is only called when there is a change to the superTTT board's winner state
    useEffect(() => {
        if (superTTTState.winner !== 'None') {
            handleOpenModal();
        }
    }, [superTTTState.winner]);


    //Individual board state information. Needed to track this to make resetting the board work.
    const [boardState1, setBoardState1] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState2, setBoardState2] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState3, setBoardState3] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState4, setBoardState4] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState5, setBoardState5] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState6, setBoardState6] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState7, setBoardState7] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState8, setBoardState8] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState9, setBoardState9] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));



    // return (<div className='horizontal-scroll-container'>
    return (<div>
    {/* Fireworks animation, only occurs when the Modal is open. */}
    {openModal && superTTTState.winner !== 'cat' ? <WinnerAnimation /> : <></>}
    {/* Modal to indicate who won */}
    <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        //Makes Backrop of modal transparent, so the WinnerAnimation can be seen more easily behind the modal
        componentsProps={{ backdrop: { style: { backgroundColor: "transparent" } } }}
        // disableScrollLock 
    >
        <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Game over!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {superTTTState.winner === 'cat' ? `Too bad, the ${superTTTState.winner} wins.` : `${superTTTState.winner} wins!`}
            </Typography>
        </Box>
    </Modal>


    {/* Used to contain everything to the size of the screen, while allowing scrolling for the TTT board when it's 
    minimum width leaves it wider than the screen */}
    <div className="horizontal-scroll-container">
        
        {/* Grid containing contents of the page, including the board, Reset button, and How to Play button */}
        <Grid container justifyContent={'center'} alignItems={'center'} direction='column' minWidth={'520px'}>
            <Grid item>
                {/* <h6>Tic Tac Toe</h6> */}
                {/* <h2>Tic Tac Toe</h2> */}
                <p><strong>Super Tic Tac Toe</strong></p>
            </Grid>
            {/*First row of superTTT board*/}
            <Grid container direction='row' justifyContent={'center'} alignItems={'center'}>
                
                {/* Top left TTT Board */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}
                        {superTTTState['topLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('topLeft') && (superTTTState['topLeft'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('topLeft') && (superTTTState['topLeft'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['topLeft'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('topLeft') && superTTTState.winner !== 'None' && superTTTState['topLeft'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topLeft'] === 'blank') || (superTTTState.winningCombo.includes('topLeft')) ? styles.topLeftSelected : styles.topLeft
                            }>
                            <TTTBoard boardState={boardState1} setBoardState1={setBoardState1} boardID={'topLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Top middle TTT board */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}                            
                        {superTTTState['topMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('topMiddle') && (superTTTState['topMiddle'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('topMiddle') && (superTTTState['topMiddle'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['topMiddle'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('topMiddle') && superTTTState.winner !== 'None' && superTTTState['topMiddle'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}                            
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topMiddle'] === 'blank') || (superTTTState.winningCombo.includes('topMiddle')) ? styles.topMiddleSelected : styles.topMiddle
                            }>
                            <TTTBoard boardState={boardState2} setBoardState1={setBoardState2} boardID={'topMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    
                </Grid>
            </Grid>

                {/* Top right TTT board */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}                            
                        {superTTTState['topRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('topRight') && (superTTTState['topRight'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('topRight') && (superTTTState['topRight'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['topRight'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('topRight') && superTTTState.winner !== 'None' && superTTTState['topRight'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}                            
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topRight'] === 'blank') || (superTTTState.winningCombo.includes('topRight')) ? styles.topRightSelected : styles.topRight
                            }>
                            <TTTBoard boardState={boardState3} setBoardState1={setBoardState3} boardID={'topRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            {/* End of First Row of superTTT board */}
            

            {/* Second row of superTTT board */}
            <Grid container direction='row' justifyContent={'center'} alignItems={'center'}>

                {/* Middle left */} 
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                    {/* Symbol of board outcome */}                                                        
                        {superTTTState['middleLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleLeft') && (superTTTState['middleLeft'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleLeft') && (superTTTState['middleLeft'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['middleLeft'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('middleLeft') && superTTTState.winner !== 'None' && superTTTState['middleLeft'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'middleLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleLeft'] === 'blank') || (superTTTState.winningCombo.includes('middleLeft')) ? styles.middleLeftSelected : styles.middleLeft
                            }>
                            <TTTBoard boardState={boardState4} setBoardState1={setBoardState4} boardID={'middleLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>
                    
            
                {/* Middle middle */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                    {/* Symbol of board outcome */}                            
                        {superTTTState['middleMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleMiddle') && (superTTTState['middleMiddle'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleMiddle') && (superTTTState['middleMiddle'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['middleMiddle'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('middleMiddle') && superTTTState.winner !== 'None' && superTTTState['middleMiddle'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'middleMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleMiddle'] === 'blank') || (superTTTState.winningCombo.includes('middleMiddle')) ? styles.middleMiddleSelected : styles.middleMiddle
                            }>
                            <TTTBoard boardState={boardState5} setBoardState1={setBoardState5} boardID={'middleMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>


                {/* Middle right */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}
                        {superTTTState['middleRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleRight') && (superTTTState['middleRight'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('middleRight') && (superTTTState['middleRight'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['middleRight'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('middleRight') && superTTTState.winner !== 'None' && superTTTState['middleRight'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'middleRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleRight'] === 'blank') || (superTTTState.winningCombo.includes('middleRight')) ? styles.middleRightSelected : styles.middleRight
                            }>
                            <TTTBoard boardState={boardState6} setBoardState1={setBoardState6} boardID={'middleRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            {/* End of Second Row of superTTT board */}

            {/* Third row of superTTT board */}
            <Grid container direction='row' justifyContent={'center'} alignItems={'center'}>

                {/* Bottom left */}
                <Grid item>
                {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}
                        {superTTTState['bottomLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomLeft') && (superTTTState['bottomLeft'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomLeft') && (superTTTState['bottomLeft'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['bottomLeft'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('bottomLeft') && superTTTState.winner !== 'None' && superTTTState['bottomLeft'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomLeft'] === 'blank') || (superTTTState.winningCombo.includes('bottomLeft')) ? styles.bottomLeftSelected : styles.bottomLeft
                            }>
                            <TTTBoard boardState={boardState7} setBoardState1={setBoardState7} boardID={'bottomLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>
                

                {/* Bottom middle */}
                <Grid item>
                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}
                        {superTTTState['bottomMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomMiddle') && (superTTTState['bottomMiddle'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomMiddle') && (superTTTState['bottomMiddle'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['bottomMiddle'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('bottomMiddle') && superTTTState.winner !== 'None' && superTTTState['bottomMiddle'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomMiddle'] === 'blank') || (superTTTState.winningCombo.includes('bottomMiddle')) ? styles.bottomMiddleSelected : styles.bottomMiddle
                            }>
                            <TTTBoard boardState={boardState8} setBoardState1={setBoardState8} boardID={'bottomMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                    </Grid>
                </Grid>


                {/* Bottom right */}
                <Grid item>

                    {/* Grid container used to hold TTT Board and Symbol of board outcome */}
                    <Grid container>
                        {/* Symbol of board outcome */}
                        {superTTTState['bottomRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomRight') && (superTTTState['bottomRight'] === 'O')) ? <CheckIcon sx={styles.overlayImage3} /> : <></>}
                        {(superTTTState.winningCombo.includes('bottomRight') && (superTTTState['bottomRight'] === 'X')) ? <CropFreeOutlinedIcon sx={styles.overlayImage3} /> : <></>}
                        {superTTTState['bottomRight'] === 'cat' ? <CopyrightTwoToneIcon sx={styles.overlayImage4} /> : <></>}
                        {(!superTTTState.winningCombo.includes('bottomRight') && superTTTState.winner !== 'None' && superTTTState['bottomRight'] === 'blank') ? <TextureIcon sx={styles.overlayImage5} /> : <></>}
                        {/* TTT Board */}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomRight'] === 'blank') || (superTTTState.winningCombo.includes('bottomRight')) ? styles.bottomRightSelected : styles.bottomRight
                            }>
                            <TTTBoard boardState={boardState9} setBoardState1={setBoardState9} boardID={'bottomRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                </Grid>
                    

            </Grid>
            {/* End of Third Row of superTTT board */}


            {/* Container used to arrange the Reset and How to Play buttons in a column */}
            <Grid container direction='row' justifyContent={'center'} marginTop={'10px'} marginBottom={'20px'} spacing={1}>


                {/* Restart button */}
                <Grid item>
                    <Button variant='contained' onClick={() => {
                        restartGame(superTTTState, setSuperTTTState, initialState, playerTurn, setPlayerTurn, setBoardState1, setBoardState2, setBoardState3, setBoardState4, setBoardState5, setBoardState6, setBoardState7, setBoardState8, setBoardState9);
                    }}>Reset</Button>
                </Grid>

                {/* How to Play button */}
                <Grid item>
                    <TempDrawer DrawerContent={
                                                    <YoutubeEmbed embedId='_Na3a1ZrX7c' />
                        }
                    bttnText={'How to play'}
                    anchorTo={'right'} />
                        
                </Grid> 
            </Grid>
        

        {/* End of item that holds the Reset and How to Play buttons */}        
        </Grid>
      {/* </div> */}
    </div>

</div>);
}

function restartGame(superTTTState, setSuperTTTState, initialState, playerTurn, setPlayerTurn,
    setBoardState1, setBoardState2, setBoardState3, setBoardState4, setBoardState5, setBoardState6, setBoardState7, setBoardState8, setBoardState9

) {
    setSuperTTTState(initialState);
    setPlayerTurn('X');
    
    setBoardState1(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState2(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState3(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState4(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState5(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState6(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState7(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState8(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState9(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));

}





export const styles = {
    topLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    topMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    topRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    overlayImage1: {
        position: 'absolute',
        zIndex: '11',
        color: 'red',
        fontSize: 165,
        opacity: 0.75,
    },
    overlayImage2: {
        position: 'absolute',
        zIndex: '11',
        color: 'blue',
        fontSize: 165,
        opacity: 0.75,
    },
    overlayImage3: {
        position: 'absolute',
        zIndex: '12',
        color: 'black',
        fontSize: 165,
        opacity: 0.75,
    },
    overlayImage4: {
        position: 'absolute',
        zIndex: '11',
        color: colors.purple[500],
        fontSize: 165,
        opacity: 0.75,
    },
    overlayImage5: {
        position: 'absolute',
        zIndex: '11',
        color: colors.grey[500],
        fontSize: 165,
        opacity: 0.5,
    }


}




export default TicTacToe;
