import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/uU9b7LBA01u46O4i-Xh3WyNsbaVVD4mmVNMUF0dhp3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc" alt=""/>
          <button>save<Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 daya ago</span></h3>
          <h2>senior UI/UX Designer</h2>
          <div>
            <h4>Pert Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div>
        <div className="bottom">
          <div>
            <h3>$120</h3>
            <p>Mumbai,India</p>
          </div>

        </div>
        <button>Apply link</button>
      </div>
    </div>
  
  )
}

export default App
