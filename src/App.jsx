import picOfMe from '/placeholder.jpg'
import githubLogo from '/github.svg'
import linkedinLogo from '/linkedin.svg'
import cacLogo from '/cac.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [text, setText] = useState('')
  const fullText = "Hi, I'm Jack Caldarone!"
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 100) // Adjust speed here
    return () => clearInterval(interval)
  }, [])
  

  return (
    <div className='main-column'>
        <div>
          <a href="https://github.com/Jack-Caldarone" target="_blank">
            <img src={githubLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://www.linkedin.com/in/jack-caldarone-6093b2256/" target="_blank">
            <img src={linkedinLogo} className="logo" alt="Linkedin logo" />
          </a>
        </div>
        <h1 className='header-text'>{text}</h1>
        <p className='paragraph-text'>Full-Stack Software/Web Developer, Soon-to-be-Graduate</p>
        <p>\ (•◡•) /</p>
        <img src={picOfMe}/>
        <h1 className='header-text'>About Me</h1>
        <p className='paragraph-text'>{loremIpsum}</p>
        <h1 className='header-text'>Experience</h1>
        <p className='paragraph-text'>{loremIpsum}</p>
        <h1 className='header-text'>Projects</h1>
        <p>{loremIpsum}</p>
    </div>
  )
}

export default App
