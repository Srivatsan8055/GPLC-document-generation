# GPLC-document-generation

to set up the REACT code :

1 . create new react project using create-react-app in the command prompt
2 . go to the folder directory and inside the src folder
3 . Replace the contents of src/App.js with:

import React from 'react';
import GPLCDocumentGenerator from './GPLCDocumentGenerator';

function App() {
  return (
    <div className="App">
      <GPLCDocumentGenerator />
    </div>
  );
}

export default App;

4 . Create a new file src/GPLCDocumentGenerator.js and paste the component code we've been working with.
5 . Create src/GPLCDocumentGenerator.css and add the CSS styles we discussed earlier.

