import React from 'react';

import './App.css';
import  Header from './components/Header';
import  SideBar from './components/SideBar';
import  Footer from './components/Footer';
import  Content from './components/Content';
class App extends React.Component {
  // state = {
  //   country: "Armenia"
  // }
  constructor(props){
    super(props);
  }
  //
  // handleOnChangeCountry () {
  //   this.setState({country: "USA"})
  // }
  render () {
    return (
        <>
          <Header />
          <SideBar />
          <Content />
          <Footer />
        </>
    )
  }
}
export default App;
