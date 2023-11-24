import React, { useEffect, useState, useRef } from 'react';
import styles from './speechc.module.css';
import Speech from 'react-speech';

const SpeechC = (props) => {
//   const { text } = props


  const speechRef = useRef(null);
  const [segments, setSegments] = useState([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)

  const text =
    'En finissant le programme, une nouvelle fenêtre s’ouvrira et tu pourras répondre à quelques dernières questions qui nous permettront d’évaluer le programme. Il est donc TRÈS IMPORTANT d’y répondre. Entretemps, nous espérons que tu as apprécié ce programme.';

  useEffect(() => {
    // Split the text into segments (split by sentences)
    const textSegments = text.split('. ');
    setSegments(textSegments);
  }, [text]);

  const handleStartSpeech = () => {
    console.log('uncaught speechRef.current', speechRef)

    if (speechRef.current) {
      speechRef.current.play();
      setIsPlaying(true)
    }
  };

  const handleStopSpeech = () => {
    console.log('uncaught speechRef.current', speechRef)
    if (speechRef.current) {
      speechRef.current.stop();
      setIsPlaying(false)
    }
  };

  return (  
    <div className={styles.bigSpeechBox}>
        <button className={styles.playBtn} onClick={handleStartSpeech}>
          <svg fill="none" viewBox="0 0 15 15" height="30px" width="30px" {...props}>
            <path
              fill='#0054b4'
              d="M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm5.353-9.348l-.353-.353-.707.707.354.354.706-.708zm-.706 5.996l-.354.354.707.707.353-.353-.706-.708zM3.5 9.994h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM13.5 4.498c-.353.354-.354.354-.354.353a.01.01 0 01-.002-.002l.003.003.02.022a3.186 3.186 0 01.386.597c.22.439.447 1.112.447 2.025h1c0-1.086-.272-1.911-.553-2.472a4.198 4.198 0 00-.39-.639 2.932 2.932 0 00-.181-.217l-.014-.015-.005-.005-.002-.002-.001-.001-.354.353zm.5 2.998c0 .913-.228 1.586-.447 2.025a3.184 3.184 0 01-.386.597.83.83 0 01-.02.022l-.003.003.001-.001.001-.001.354.353c.353.354.354.354.354.353h.001l.002-.003.005-.005.014-.014.043-.048c.035-.04.082-.097.137-.17.11-.146.251-.36.391-.639.28-.56.553-1.386.553-2.472h-1z"
            />
          </svg>
        </button>

        <button className={styles.playBtn} onClick={handleStopSpeech}>
          <svg fill="none" height="30px" width="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" fill='#0054b4'/></svg>
        </button>
        

        <Speech
            ref={speechRef}
            voice="Daniel"
            // textAsButton={true}    
            text={text}
        />
    </div>
  );
};

export default SpeechC;
