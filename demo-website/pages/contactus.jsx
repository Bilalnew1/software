import React from 'react'
import PropTypes from 'prop-types'
import Header from "../section/Header";
import Footer from "../section/Footer";
import ServiseToHero from "../section/serviseHero";
import Contactdetail from "../section/contactus/contactdetail";

const contactus = props => {
  return (
    <>
      <Header />
      <ServiseToHero />
    <Contactdetail/>

      <Footer />
</>
  );
}


export default contactus
