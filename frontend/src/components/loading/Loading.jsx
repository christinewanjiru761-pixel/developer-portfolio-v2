import React from 'react';
import './Loading.css';
import {motion} from 'framer-motion'
function Loading() {
  return (
    <div className='loading__container'>
       <motion.p>Kwemange Nyagrowa</motion.p>
       <p>. . . .</p>
    </div>
  )
}

export default Loading;