import styled from 'styled-components'

export const MainContainer = styled.div`
    background-image: url('https://m.media-amazon.com/images/I/71LRVysdhaL.png');
    height: 100vh;
    width: 100vw;
    background-size: cover;
`

export const BgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #00000050;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    height: 70%;
    width: 80%;
    border-radius: 8px;
    background-color: #00000050;
    box-shadow: #ffffff 0px 0px 5px;
    border: blueviolet 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
`

export const Heading = styled.h1`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    color: #ffffff;
    text-shadow: #00008B 2px 2px 5px;
    height: 10%;
`

export const TextArea = styled.textarea`
    height: 80%;
    width: 80%;
    font-family: Roboto;
    font-size: 15px;
    border-radius: 6px;
    border: deepskyblue 1px solid;
    background-color: #ffffff80;
    flex-grow: 1;
    resize: none;
    color: black;
    padding: 7px;
    outline: none;
`

export const SpeedAdjustingContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Speed = styled.p`
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    font-size: 15px;
`

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    color: #ffffff;
    margin: 0px 5px;
    outline: none;
`

export const Button = styled.button`
    background-color: ${({isSpeaking}) => isSpeaking ? `#6495ED` : `grey`};
    padding: ${({isSpeaking}) => isSpeaking ? `11px 10px` : `10px 9px`} ;
    border-radius: 50%;
    border: none;
    margin: 10px;
    color: #fff;
    font-size: ${({isSpeaking}) => isSpeaking ? `23px` : `20px`};
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Greeting = styled.p`
    font-family: Roboto;
    font-weight: 500;
    color: #fff;
    font-size: 18px;
    text-shadow: #191970 1px 1px 5px;
`