import { useState,useEffect } from "react";

import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2"

import {MainContainer,ContentContainer,Heading,TextArea,SpeedAdjustingContainer,Speed,ButtonIcon,Button,Greeting,BgContainer} from './styledComponents'

const TextToSpeech = () => {
    const [text, setText] = useState('')
    const [voice,setVoice] = useState('')
    const [minSpeed,setMinSpeed] = useState(1)
    const [secSpeed,setSecSpeed] = useState(0)
    const [isSpeaking, setSpeaking] = useState(false)

    useEffect(() => {
        const getVoice = () => {
            const voices = window.speechSynthesis.getVoices()
            setVoice(voices[4])
        }
        getVoice()

        window.speechSynthesis.onvoiceschanged = getVoice
    },[])

    const convertTextToSpeech = () => {
        const utterancs = new SpeechSynthesisUtterance(text)
        setSpeaking(true)
        utterancs.voice = voice
        utterancs.rate = `${minSpeed}.${secSpeed}`
        utterancs.onend = () => setSpeaking(false)
        window.speechSynthesis.speak(utterancs)
    }

    const onDecreament = () => {
        if (secSpeed === 1 && minSpeed === 0){
            return;
        }
        else if (secSpeed === 0){
            setSecSpeed(9)
            setMinSpeed(minSpeed => minSpeed - 1)
        } else {
            setSecSpeed(secSpeed => secSpeed -1)
        }
    }

    const onIncreament = () => {
        if (secSpeed === 0 && minSpeed === 2){
            return;
        } else if (secSpeed === 9){
            setMinSpeed(minSpeed => minSpeed + 1)
            setSecSpeed(0)
        } else {setSecSpeed(secSpeed => secSpeed + 1 )}
    }

    return(
        <MainContainer>
            <BgContainer>
                <ContentContainer>
                    <Heading>Text To Speech</Heading>
                    <TextArea value={text} onChange={(event) => setText(event.target.value)}/>
                    <SpeedAdjustingContainer>
                        <ButtonIcon onClick={onDecreament}><CiSquareMinus /></ButtonIcon>
                        <Speed>{minSpeed}.{secSpeed}</Speed>
                        <ButtonIcon onClick={onIncreament}><CiSquarePlus /></ButtonIcon>
                    </SpeedAdjustingContainer>
                    <Button isSpeaking={isSpeaking} type='button' onClick={convertTextToSpeech}><HiOutlineSpeakerWave /></Button>
                </ContentContainer>
                <Greeting>Success is not final, <br /> failure is not fatal <br/> It is the courage to continue that counts.</Greeting>
            </BgContainer>
        </MainContainer>
    )
}

export default TextToSpeech