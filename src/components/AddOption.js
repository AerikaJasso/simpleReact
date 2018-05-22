import React from 'react';

export default class AddOption extends React.Component {
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