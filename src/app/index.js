// React code
var React = require('react');
var ReactDOM = require('react-dom');

// the main React component
class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: null, // the audio clip to be played
      description: "[Click a button!]" // the display name of that clip
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playClip = this.playClip.bind(this);
  }
  // add event listener for keyboard input
  componentDidMount() {
    // console.log('component did mount, handleKeyPress added');
    window.addEventListener("keydown", this.handleKeyPress);
  }
  // remove event listener for keyboard input
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
  // handle click on one of the clip trigger buttons
  handleClick(event) {
    // console.log('handleClick triggered; current state is: clip ' + this.state.clip + ' and description ' + this.state.description);
    this.setState({
      clip: event.target.firstElementChild, // the audio elem within the .drum-pad div
      description: event.target.id // the .drump-pad div id is set to the description
    }, function() {
      // console.log('handeClick has updated clip to ' + this.state.clip + ' and description to ' + this.state.description);
      this.playClip(); // pass this in as a callback function to setState() so it only plays once state has been updated
    });
  }
  // handle keyboard input for the clip trigger buttons
  handleKeyPress(event) {
    // console.log('handleKeyPress triggered; current state is: clip ' + this.state.clip + ' and description ' + this.state.description);
    // determine next steps based on the keycode
    switch(event.keyCode) {
      case 81: // letter Q
        // reset the clip if it was just clicked
        if (this.state.description === "Dhol") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('dhol').classList.add('black');
        setTimeout(function(){ document.getElementById('dhol').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('Q'),
          description: "Dhol"
        }, function() {
          // console.log('handleKeyPress has updated state to: clip ' + this.state.clip + ' and description ' + this.state.description);
          this.playClip();
        });
        break;
      case 87: // letter W
        // reset the clip if it was just clicked
        if (this.state.description === "Dholak") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('dholak').classList.add('black');
        setTimeout(function(){ document.getElementById('dholak').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('W'),
          description: "Dholak"
        }, function() {
          this.playClip();
        });
        break;
      case 69: // letter E
        // reset the clip if it was just clicked
        if (this.state.description === "Hand Drum") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('hand_drum').classList.add('black');
        setTimeout(function(){ document.getElementById('hand_drum').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('E'),
          description: "Hand Drum"
        }, function() {
          this.playClip();
        });
        break;
      case 65: // letter A
        // reset the clip if it was just clicked
        if (this.state.description === "Ocean Drum") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('ocean_drum').classList.add('black');
        setTimeout(function(){ document.getElementById('ocean_drum').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('A'),
          description: "Ocean Drum"
        }, function() {
          this.playClip();
        });
        break;
      case 83: // letter S
        // reset the clip if it was just clicked
        if (this.state.description === "Plastic") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('plastic').classList.add('black');
        setTimeout(function(){ document.getElementById('plastic').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('S'),
          description: "Plastic"
        }, function() {
          this.playClip();
        });
        break;
      case 68: // letter D
        // reset the clip if it was just clicked
        if (this.state.description === "Snare Tap") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('snare_tap').classList.add('black');
        setTimeout(function(){ document.getElementById('snare_tap').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('D'),
          description: "Snare Tap"
        }, function() {
          this.playClip();
        });
        break;
      case 90: // letter Z
        // reset the clip if it was just clicked
        if (this.state.description === "Snare Throw") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('snare_throw').classList.add('black');
        setTimeout(function(){ document.getElementById('snare_throw').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('Z'),
          description: "Snare Throw"
        }, function() {
          this.playClip();
        });
        break;
      case 88: // letter X
        // reset the clip if it was just clicked
        if (this.state.description === "Snare") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('snare').classList.add('black');
        setTimeout(function(){ document.getElementById('snare').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('X'),
          description: "Snare"
        }, function() {
          this.playClip();
        });
        break;
      case 67: // letter C
        // reset the clip if it was just clicked
        if (this.state.description === "Tribal Drum") {
          this.state.clip.currentTime = 0;
        }
        // mimic keyboard click (:active) CSS change
        document.getElementById('tribal_drum').classList.add('black');
        setTimeout(function(){ document.getElementById('tribal_drum').classList.remove('black'); }, 150);
        // update the current clip and play it
        this.setState({
          clip: document.getElementById('C'),
          description: "Tribal Drum"
        }, function() {
          this.playClip();
        });
        break;
      default:
        break;
    }
  }
  // play the currently selected audio file
  playClip() {
    // console.log('playClip triggered');
    this.state.clip.play(); // play the audio elem currently stored in state.clip
  }
  render() {
    return (
    <div id="drum-box" className="container-center">
      <h1>Drum Machine</h1>
      <div className="drum-pad" id="dhol" aria-label="dhol" role="button" onClick={this.handleClick}><audio className="clip" id="Q"><source src="media/dhol.mp3" type="audio/mpeg"></source></audio>Q</div>
      <div className="drum-pad" id="dholak" aria-label="dholak" role="button" onClick={this.handleClick}><audio className="clip" id="W"><source src="media/dholak.mp3" type="audio/mpeg"></source></audio>W</div>
      <div className="drum-pad" id="hand_drum" aria-label="hand drum" role="button" onClick={this.handleClick}><audio className="clip" id="E"><source src="media/hand_drum.mp3" type="audio/mpeg"></source></audio>E</div>
      <div className="drum-pad" id="ocean_drum" aria-label="ocean drum" role="button" onClick={this.handleClick}><audio className="clip" id="A"><source src="media/ocean_drum.mp3" type="audio/mpeg"></source></audio>A</div>
      <div className="drum-pad" id="plastic" aria-label="plastic" role="button" onClick={this.handleClick}><audio className="clip" id="S"><source src="media/plastic.mp3" type="audio/mpeg"></source></audio>S</div>
      <div className="drum-pad" id="snare_tap" aria-label="snare tap" role="button" onClick={this.handleClick}><audio className="clip" id="D"><source src="media/snare_tap.mp3" type="audio/mpeg"></source></audio>D</div>
      <div className="drum-pad" id="snare_throw" aria-label="snare throw" role="button" onClick={this.handleClick}><audio className="clip" id="Z"><source src="media/snare_throw.mp3" type="audio/mpeg"></source></audio>Z</div>
      <div className="drum-pad" id="snare" aria-label="snare" role="button" onClick={this.handleClick}><audio className="clip" id="X"><source src="media/snare.mp3" type="audio/mpeg"></source></audio>X</div>
      <div className="drum-pad" id="tribal_drum" aria-label="tribal drum" role="button" onClick={this.handleClick}><audio className="clip" id="C"><source src="media/tribal_drum.mp3" type="audio/mpeg"></source></audio>C</div>
      <div id="display">{this.state.description}</div> {/* display a description of the clip being played */}
      <p id="footer">Designed & Coded 2019 by Jamie Ev.</p>
    </div>
    );
  }
}

// render the component to the DOM
ReactDOM.render(<Drums />, document.getElementById('drum-machine'));

