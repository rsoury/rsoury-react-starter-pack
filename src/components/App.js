import React, { PropTypes } from 'react';
import Header from './common/Header';
import Message from './common/Message';

class App extends React.Component{
  // The props children will be sent in through react router.
  render(){
    return (
      <div className="container-fluid">
        <Message/>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
