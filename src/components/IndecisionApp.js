import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  // read didUpdate data and set state
  componentDidMount() {
  // filter out invalid json data by trying to run the code. If the json data isn't valid, it goes to the catch.
    try {
      // get array.
      const json = localStorage.getItem('options');
      // flatten array to a string for saving on localstorage
      const options = JSON.parse(json);
  
      if (options) {
          // pass in updater function implicitly return an object, options object(key), options array string(value) have the same name but are not referencing the same thing.
          this.setState(() => ({ options: options}));
      }

    } catch(e) {
      // do nothing at all
    }
  
  }

  // saving data to local storage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    // refactor function body
    this.setState(() => ({ options:[] }));

  }

  // delete single option
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }


  handlePick() {
    
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
 
  }

  handleAddOption(option) {
    // Add validation
    if (!option) {
      return 'Enter Valid Value to Add Option';
    } else if (this.state.options.indexOf(option) > -1 ) {
        return 'This Option Already Exists';
    }
    
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   }
    // });

    //refactor this.setState()
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }


  render(){
    const subtitle = 'Put your life in the hands of a computer';
    return (
      
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          //pass handleDeleteOption down to child.
          handleDeleteOption={this.handleDeleteOption}
        
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
