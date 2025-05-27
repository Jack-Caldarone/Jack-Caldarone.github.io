import picOfMe from '/placeholder.jpg'
import githubLogo from '/github.svg'
import linkedinLogo from '/linkedin.svg'
import './App.css'

function App() {

  return (
    <div>
        <div>
          <a href="https://github.com/Jack-Caldarone" target="_blank">
            <img src={githubLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={linkedinLogo} className="logo" alt="Linkedin logo" />
          </a>
        </div>
        <h1>Hi, I'm Jack C </h1>
        <h1>\ (•◡•) /</h1>
        <img src={picOfMe}/>
    </div>
  )
}

export default App
