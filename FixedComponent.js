// BuggyComponent.js - Demonstrates the original error
import React, { useState, useEffect } from 'react';
import MyThirdPartyLibrary from 'my-third-party-library'; // Replace with the actual library

const BuggyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate receiving data with incorrect structure from React Native
    const incorrectData = { x: 10, wrongProperty: 'value' }; 
    MyThirdPartyLibrary.handleData(incorrectData); // Error occurs here
  }, []);

  return (
    <View>
      {/* ... JSX ... */}
    </View>
  );
};

// FixedComponent.js - Demonstrates the solution
import React, { useState, useEffect } from 'react';
import MyThirdPartyLibrary from 'my-third-party-library';

const FixedComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate receiving data from React Native
    const rnData = { x: 10, y: 20 }; 
    const adaptedData = { x: rnData.x, y: rnData.y }; // Adapt the data
    MyThirdPartyLibrary.handleData(adaptedData); 
  }, []);

  return (
    <View>
      {/* ... JSX ... */}
    </View>
  );
};
export default FixedComponent;