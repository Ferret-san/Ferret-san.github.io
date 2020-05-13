import React , { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist'
import Delay from 'react-delay'


class Terminal extends Component {
  
  // componentDidMount() {
  //   if(window.location.href === "http://localhost:8000/") {
  //     setTimeout(() => {
  //       window.location.href = '/about';
  //     }, 28000);
  //   }
  // }

 componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown, false);
    }
 componentWillUnmount() {
   document.removeEventListener("keydown", this.handleKeyDown, false);
 }
  handleKeyDown(event){
    if(event.key === 'Enter') {
      window.location.replace(`/about`)
    }
  }  
  

  
  render() {
    const { command1, command2, name, description } = this.props.data;
    
    var description_list = [];
    var sentence = "";
    for(var i = 0; i < description.length; i++) {
      if(description[i] === '>' || i === description.length-1) {
        description_list.push(sentence.trim());
        sentence = "";
      }
      else {
        sentence += description[i];
      }
    }
    
    return (
      <div className="terminal-container">
        <nav className="terminal-nav">
          <div className="circles-container">
            <div className="circle red" style={{ backgroundColor: "#ED3131"}}></div>
            <div className="circle yellow" style={{ backgroundColor: "#EDCF31"}}></div>
            <div className="circle green" style={{ backgroundColor: "#4CED31"}}></div>
          </div>
          <div className="terminal-title">bash</div>
        </nav>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist on
            cursor={{ hideWhenDone: true }}
            avgTypingDelay={25}>
            {command1}
          </Typist>
        </div>
        
        <Delay wait={1500}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              {command2}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={3000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              Hi I'm {name}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={5000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              avgTypingDelay={25}
              cursor={{ hideWhenDone: true }}
            >
              {description_list[0]}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={8000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              avgTypingDelay={25}
              cursor={{ hideWhenDone: true }}
            >
              {description_list[1]}
            </Typist>
          </div>
        </Delay>
        
        
        
        <Delay wait={10000}>
          <div className="row" >
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            Sign In (Yes / No): &nbsp;
            <Typist 
              avgTypingDelay={40}
              cursor={{ hideWhenDone: true }}
            >
              <Typist.Delay ms={90} />
              Yes (PRESS ENTER)
            </Typist>
          </div>
        </Delay>
      </div>
    )
  }
}


const TerminalFunc = ({ data }) => {
  return (
    <div>
      <Terminal data={data.edges[0].node.frontmatter} />
    </div>
  );
}

export default TerminalFunc; 