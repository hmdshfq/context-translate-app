import React from 'react';
import UserCreate from '/src/components/UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class App extends React.Component {
  state = {
    language: 'english',
  };
  onLanguageChange = language => {
    this.setState({ language });
  };
  style = {
    fontSize: '1.5rem',
    lineHeight: 2,
    marginTop: '40px',
  };
  render() {
    return (
      <div className='ui container' style={this.style}>
        <span>Select a language: </span>
        <i
          className='flag us'
          onClick={() => this.onLanguageChange('english')}
          style={{ cursor: 'pointer' }}></i>
        <i
          className='flag pl'
          onClick={() => this.onLanguageChange('polish')}
          style={{ cursor: 'pointer' }}></i>
        <ColorContext.Provider value={this.state.language === 'english'?'primary':'red'}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
