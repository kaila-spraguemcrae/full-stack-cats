import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './Actions';


class Fact extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
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

const mapStateToProps = state => {
  return {
    fact: state.fact,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Fact);