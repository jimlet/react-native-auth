import React from 'react';
import { View, Text } from 'react-native';

// Simple functional component.
// These can only present static (from props) data - no fetching, no rerendering.
// It works here, but often a class based component is required.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { textStyle, viewStyle } = styles;

//     return (
//       <View style={viewStyle}>
//         <Text style={textStyle}>{this.props.text}</Text>
//       </View>
//     );
//   }
// }


const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // These numbers are all in pixels
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};

export { Header };
