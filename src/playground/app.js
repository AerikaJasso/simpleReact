class IndecisionApp extends React.Component {
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


const Header = (props) => {
  return(
    <div> test text
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// convert class component to stateless functional component:
const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What Should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started </p>}
     {
       props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          //adding the prop to pass down to child
          handleDeleteOption={props.handleDeleteOption}

        />
       ))
     }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove All</button>

//        {
//          this.props.options.map((option) => <Option key={option} optionText={option} />)
//        }
//        <Option />
//       </div>
//     );
//   }
// }

// Remove Option Text
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={()=> {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//        {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    // Use component state to display a change in state on this component
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // Update error state on form submission
    // this.setState(() => {
    //   return { error: error };
    // });
    // refactor setState() to implicitly return an object
    this.setState(() => ({error: error}));

    // clear form input if valid data is submitted.
    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
   return (
    <div>
      {/* set up error msg */}
      {this.state.error && <p> {this.state.error} </p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
   );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));