const hideUtilsMock = `
  /**
   * Hide only visually, but have it available for screen readers:
   * http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
   */
  
  .u-hidden-visually {
    
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;

  }
    
  /**
   * Hide visually and from screen readers.
   */
  
  .u-hidden {
    display: none !important;
  }

`;


export default hideUtilsMock;
