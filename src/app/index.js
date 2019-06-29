
class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: null,
      description: "[Click a button!]"
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playClip = this.playClip.bind(this);
  }
  componentDidMount() {
    // console.log('component did mount, handleKeyPress added');
    window.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
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
  handleKeyPress(event) {
    // console.log('handleKeyPress triggered; current state is: clip ' + this.state.clip + ' and description ' + this.state.description);
    switch(event.keyCode) {
      case 81: // letter Q
        this.setState({
          clip: document.getElementById('Q'),
          description: "Dhol"
        }, function() {
          // console.log('handleKeyPress has updated state to: clip ' + this.state.clip + ' and description ' + this.state.description);
          this.playClip();
        });
        break;
      case 87: // letter W
        this.setState({
          clip: document.getElementById('W'),
          description: "Dholak"
        }, function() {
          this.playClip();
        });
        break;
      case 69: // letter E
        this.setState({
          clip: document.getElementById('E'),
          description: "Hand Drum"
        }, function() {
          this.playClip();
        });
        break;
      case 65: // letter A
        this.setState({
          clip: document.getElementById('A'),
          description: "Ocean Drum"
        }, function() {
          this.playClip();
        });
        break;
      case 83: // letter S
        this.setState({
          clip: document.getElementById('S'),
          description: "Plastic"
        }, function() {
          this.playClip();
        });
        break;
      case 68: // letter D
        this.setState({
          clip: document.getElementById('D'),
          description: "Snare Tap"
        }, function() {
          this.playClip();
        });
        break;
      case 90: // letter Z
        this.setState({
          clip: document.getElementById('Z'),
          description: "Snare Throw"
        }, function() {
          this.playClip();
        });
        break;
      case 88: // letter X
        this.setState({
          clip: document.getElementById('X'),
          description: "Snare"
        }, function() {
          this.playClip();
        });
        break;
      case 67: // letter C
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
  playClip() {
    // console.log('playClip triggered');
    this.state.clip.play(); // play the audio elem currently stored in state.clip
  }
  render() {
    return (
    <div id="drum-box" className="container-center">
      <h1>Drum Machine</h1>
      <div className="drum-pad" id="dhol" onClick={this.handleClick}><audio className="clip" id="Q"><source src="media/dhol.mp3" type="audio/mpeg"></source></audio>Q</div>
      <div className="drum-pad" id="dholak" onClick={this.handleClick}><audio className="clip" id="W"><source src="media/dholak.mp3" type="audio/mpeg"></source></audio>W</div>
      <div className="drum-pad" id="hand_drum" onClick={this.handleClick}><audio className="clip" id="E"><source src="media/hand_drum.mp3" type="audio/mpeg"></source></audio>E</div>
      <div className="drum-pad" id="ocean_drum" onClick={this.handleClick}><audio className="clip" id="A"><source src="media/ocean_drum.mp3" type="audio/mpeg"></source></audio>A</div>
      <div className="drum-pad" id="plastic" onClick={this.handleClick}><audio className="clip" id="S"><source src="media/plastic.mp3" type="audio/mpeg"></source></audio>S</div>
      <div className="drum-pad" id="snare_tap" onClick={this.handleClick}><audio className="clip" id="D"><source src="media/snare_tap.mp3" type="audio/mpeg"></source></audio>D</div>
      <div className="drum-pad" id="snare_throw" onClick={this.handleClick}><audio className="clip" id="Z"><source src="media/snare_throw.mp3" type="audio/mpeg"></source></audio>Z</div>
      <div className="drum-pad" id="snare" onClick={this.handleClick}><audio className="clip" id="X"><source src="media/snare.mp3" type="audio/mpeg"></source></audio>X</div>
      <div className="drum-pad" id="tribal_drum" onClick={this.handleClick}><audio className="clip" id="C"><source src="media/tribal_drum.mp3" type="audio/mpeg"></source></audio>C</div>
      <div id="display">{this.state.description}</div> {/* display a description of the clip being played */}
      <p id="footer">Designed & Coded 2019 by Jamie Ev.</p>
    </div>
    );
  }
}

ReactDOM.render(<Drums />, document.getElementById('drum-machine'));

