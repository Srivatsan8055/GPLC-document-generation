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
6 . Start the development server : npm start
7 . Open a web browser and go to http://localhost:3000. You should see the GPLC Document Generation interface.
8 . To deploy, you can use the build directory with various hosting services like Netlify, Vercel, or GitHub Pages.

Remember to integrate with your backend API by updating the handleSubmit function in GPLCDocumentGenerator.js to make actual API calls instead of just logging to the console.

