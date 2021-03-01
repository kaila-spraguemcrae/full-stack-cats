import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';


class Fact extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render(){
    const { error, isLoading, fact } = this.props;
    if(error) {
      return <>Error: {error.message} </>;
    } else if (isLoading) {
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