import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput : React.createRef(),
    
    };
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.textInput.current.value);
  }

  render() {
    return (
      <div>
      <form 
      onSubmit={this.handleSubmit}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <label id="label" style={{position: 'absolute', top: '210px', left: '638px' , marginBottom: '5px', fontSize: '40px'}}><p>Enter a city to begin!</p></label><br />
          <input
          style={{width: '580px', height: '60px', position: 'absolute', top: '368px', left: '627px'}}
          type="text"
         placeholder="Where would you like to explore?"
         ref={this.state.textInput}
         />
   
        <input type="submit" value="Explore!" style={{height:'60px', width: '120px', position: 'absolute', top: '368px', left: '1213px'}}/>
    
      </form>
      </div>
    );
  }
}

export default Search;