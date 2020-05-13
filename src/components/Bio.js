import React from "react"
import picture from "../images/about-picture.jpg"

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="bio-line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 </p>
        </div>
        <div className="bio-divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p>// Swamphacks VI cup stacking finalist.</p>
              <p>// Professional at turning caffeine into code.</p>
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#FF97FF"}}>.Info</span> &#123; </p>
                    <p className="tag-info">Diego Ferrer</p>
                    <p className="tag-info">Contact:</p>
                    <p className="tag-info">diego.ferrer@ufl.edu</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#86FFF8"}}>.bio</span> &#123; </p>
                    <p className="tag-info">I'm a senior Computer Science student based in the sunshine state. Passionate about learning, building, and love collaborating with others in order to create awesome products. In my spare time you can find me reading non-fiction books, listening to podcasts or coding for fun. </p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                    <p className="tag-info">Programming Language: C++;</p>
                    <p className="tag-info">Programming Language: Java;</p>
                    <p className="tag-info">Programming Language: ;</p>
                    <p className="tag-info">Web: HTML;</p>
                    <p className="tag-info">Web: CSS;</p>
                    <p className="tag-info">Web: Javascript;</p>
                    <p className="tag-info">Framework: React;</p>
                    <p className="tag-info">Framework: Nodejs;</p>
                    <p className="tag-info">Framework: Express;</p>
                    <p className="tag-info">Database: Oracle DB (PL/SQL);</p>
                    <p className="tag-info">Cloud Platform: Heroku;</p>
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} alt=""/> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
