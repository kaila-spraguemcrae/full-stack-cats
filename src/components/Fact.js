import React from 'react';


class Fact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fact: []
    };
  }

  makeApiCall = () => {
    fetch(`https://catfact.ninja/fact`)
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      this.setState({
        isLoaded: true,
        fact: jsonifiedResponse.fact
      });
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render(){
    const { error, isLoaded, fact } = this.state;
    if(error) {
      return <>Error: {error.message} </>;
    } else if (!isLoaded) {
      return <>Loading...</>
    } else {
      
      return(
        <>
          <h1>FACT!</h1>
          <ul>
            <p>{fact}</p>
          </ul>
        </>
      );
    }
  }
}

export default Fact;