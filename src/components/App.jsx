import React from 'react'
import UserCreate from '/src/components/UserCreate'

export default class App extends React.Component{
  state = {
    language: 'english'
  }
  onLanguageChange = language => {
    this.setState({language})
  }
  style = {
    fontSize: '1.5rem',
    lineHeight: 2,
    marginTop: '40px',
  }
  render() {
    return (<div className="ui container" style={this.style}>
      <span>Select a language: </span>
      <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
      <i className="flag pl" onClick={()=>this.onLanguageChange('polish')}></i>
      <UserCreate/>
    </div>
    )
  }
}