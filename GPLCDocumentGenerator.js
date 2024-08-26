import React, { useState } from 'react';
import './GPLCDocumentGenerator.css';
// Main component for GPLC Document Generation
function GPLCDocumentGenerator() {
  // State hooks for form inputs
  const [documentType, setDocumentType] = useState('');
  const [description, setDescription] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle document generation logic here
    console.log('Generating document:', documentType, description);
    // TODO: Add API call to backend for document generation
  };

  // Component's JSX structure
  return (
    <div className="gplc-document-generator">
      <h1>GPLC Document Generation</h1>
      <p>Interactive Generation of Legal Documents</p>
      
      {/* Form for document generation inputs */}
      <form onSubmit={handleSubmit}>
        {/* Document Type input field */}
        <div className="form-group">
          <label htmlFor="documentType">Document Type</label>
          <input
            type="text"
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)} // Update state on input change
            placeholder="Service agreement"
          />
        </div>
        
        {/* Description textarea */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update state on textarea change
            rows="4"
          />
        </div>
        
        {/* Submit button */}
        <button type="submit" className="init-generation-btn">
          Init Document Generation
        </button>
      </form>
    </div>
  );
}

// Export the component for use in other parts of the application
export default GPLCDocumentGenerator;
