import React from 'react';
import EcomHeader from './header/header';
import EcomFooter from './footer/Footer';
import EcomContent from './content/Content';


const EcomLayout = (props) => (
  // console.log(props.menu)
  <>
    <EcomHeader />
    <EcomContent />
    <EcomFooter />

  </>
);
export default EcomLayout;










