import './App.css';
import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)
function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

//The tablet to be inserted into the app
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isMobile: false
    }
  }

  render(){
    return(
        <div className="page">
          <Screen/>
        </div>
    )
  }


}

//The tablet screen itself
class Screen extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    return(
        <div className="tabletScreen">
            <Views/>
            <MenuBar/>
        </div>
    )
  }
}

//A manager class/container for all of the possible views within the app.
//This is used to avoid the use of iframes, which can cause graphical pop-in
//as the embedded page is loaded.
class Views extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewShown: "home",
        }
    }

    render() {
        return (
            <div className="views">
                {this.selectScreen()}
            </div>
        );

    }

    selectScreen(){
        switch(this.state.viewShown){
            case "home":
                return this.renderHomeScreen()
            case "about":
                return this.renderAboutMe()
            default:
                return <div id="emptyView"/>
        }
    }
    renderHomeScreen(){
        return <div id="homeScreen">
            <AppButton id="aboutMeButton" icon="book" title="About Me" onClick={null}/>
            <AppButton id="aboutMeButton" icon="book" title="About Me" onClick={null}/>
            <AppButton id="aboutMeButton" icon="book" title="About Me" onClick={null}/>
            <AppButton id="aboutMeButton" icon="book" title="About Me" onClick={null}/>

        </div>;
    }

    renderAboutMe(){
        return <div id="aboutMeScreen">
            <p>AboutMe</p>
        </div>
    }
}

//The tablet's "home" and "back" buttons
class MenuBar extends React.Component{
    render(){
        return(
            <div id="menuBar"/>
        )
    }
}

class AppButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: props.title,
            onClick: props.onClick,
            icon: props.icon,
            id: props.id,
        }
    }

    render(){
        return <div id={this.state.id} className="appButton">
            <div className="appIcon">
                <button onClick={this.state.onClick}>
                    <FontAwesomeIcon icon={this.state.icon}/>
                </button>
            </div>
            <div className="appLabel">
                <b>
                    {this.state.title}
                </b>
            </div>

        </div>
    }
}

export default App;
