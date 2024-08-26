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
