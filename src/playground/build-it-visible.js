class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
   this.setState((prevState) =>{
    return {
      visibility: !prevState.visibility
    }
   });
  }


  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>

        { this.state.visibility && (
          <p>These are the Deets!</p>
         ) }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () =>{
//   visibility = !visibility;
//   renderToggleApp();
// }

// const renderToggleApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>

//       <button onClick={toggleVisibility}>
//         { visibility ? 'Hide details' : 'Show details'}
//       </button>
//       { visibility && (
//         <p> These are the deets! </p>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }
// renderToggleApp();