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