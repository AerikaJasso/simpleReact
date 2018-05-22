import React from 'react';

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

export default Action;

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
