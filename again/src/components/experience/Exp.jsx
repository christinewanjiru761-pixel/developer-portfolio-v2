import React from 'react';
import './exp.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {motion} from "framer-motion";
import Tilt from 'react-tilt';
import { FaReact } from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import {GrNode} from 'react-icons/gr';
import {FaMobileAlt, FaBootstrap, FaDigitalOcean} from 'react-icons/fa';
import {SiCsswizardry, SiMysql, SiPython,
  SiJavascript, SiTailwindcss, SiDjango, SiMongodb} from 'react-icons/si';

import {CgFigma} from 'react-icons/cg';

function Exp() {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>Skill Stack</h2>
      <div className='exp__details'>
          <div className="details__container">
            <div className="exp__container">
              <h1><FaReact /></h1>
              <h5>React JS</h5>
              <small>High performance javascript library used for front-end website development</small>
              <small><h5>rating:</h5>4.7/5</small>
            </div>
            <div className="exp__container">
              <h1><AiFillHtml5 /></h1>
              <h5>HTML</h5>
              <small>Standard markup language for static websites and simple web pages</small>
              <small><h5>rating:</h5>4.1/5</small>
            </div>
            <div className="exp__container">
              <h1><GrNode/></h1>
              <h5>Node Js</h5>
              <small>Cross-platform javascript server environment that can run on Windows, Linux, Unix, macOS, and more.</small>
              <small><h5>rating:</h5>3.8/5</small>
            </div>
            <div className="exp__container">
              <h1><FaMobileAlt/></h1>
              <h5>React Native</h5>
              <small>UI software framework for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP applications</small>
              <small><h5>rating:</h5>4.5/5</small>
            </div>
          </div>
          <div className="details__container">
            <div className="exp__container">
              <h1>< SiCsswizardry /></h1>
              <h5>CSS</h5>
              <small>A cornerstone technology of the World Wide Web, alongside HTML and JavaScript. Used for UI/UX</small>
              <small><h5>rating:</h5>3.5/5</small>
            </div>
            <div className="exp__container">
              <h1><SiMysql/></h1>
              <h5>MySQL</h5>
              <small>A relational database management system that uses Structured Query Language</small>
              <small><h5>rating:</h5>3.0/5</small>
            </div>
            <div className="exp__container">
              <h1><SiJavascript/></h1>
              <h5>Javascript</h5>
              <small>A technology for dynamic content, multimedia control, animation and much more</small>
              <small><h5>rating:</h5>4.3/5</small>
            </div>
            <div className="exp__container">
              <h1><FaBootstrap /></h1>
              <h5>Bootstrap</h5>
              <small>CSS framework for responsive, mobile-first front-end web development.</small>
              <small><h5>rating:</h5>4.9/5</small>
            </div>
          </div>
          <div className="details__container">
            <div className="exp__container">
              <h1><SiTailwindcss /></h1>
              <h5>Tailwindcss</h5>
              <small>A css framework that is similar to Bootstrap but more flexible.</small>
              <small><h5>rating:</h5>4.9/5</small>
            </div>
            <div className="exp__container">
              <h1><SiMongodb/></h1>
              <h5>Mongodb</h5>
              <small>A cross-platform document-oriented database program, classified as a NoSQL database program.</small>
              <small><h5>rating:</h5>3.7/5</small>
            </div>
            <div className="exp__container">
              <h1><SiDjango/></h1>
              <h5>Django</h5>
              <small>A cross-platform document-oriented database program. Classified as a NoSQL database program.</small>
              <small><h5>rating:</h5>4.4/5</small>
            </div>
            <div className="exp__container">
              <h1><SiPython/></h1>
              <h5>Python</h5>
              <small>High-level, general-purpose programming language for data science, web development e.t.c </small>
              <small><h5>rating:</h5>4.4/5</small>
            </div>
          </div>
          <div className="details__container">
            <div className="exp__container">
              <h1><CgFigma /></h1>
              <h5>Figma</h5>
              <small>Interface for designing web applications.</small>
              <small><h5>rating:</h5>3.2/5</small>
            </div>
            <div className="exp__container">
              <h1><FaDigitalOcean/></h1>
              <h5>Digital Ocean</h5>
              <small>Hosting platform</small>
              <small><h5>rating:</h5>3.6/5</small>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Exp