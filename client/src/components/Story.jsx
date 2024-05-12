import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Section from './Section';


function Story() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));


  const greyBackgroundStyle = {
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  };

  const textContainerStyle = {
    flex: 1,
    maxWidth: '50%',
    padding: '0 20px', // Padding inside each flex item
  };

  const imageContainerStyle = {
    flex: 1,
    maxWidth: '50%',
    display: 'flex', // Set display to flex to use flexbox properties
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
    padding: '0 20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const responsiveContentStyle = isMobileOrTablet
  ? { ...contentStyle, flexDirection: 'column-reverse' } // column-reverse will put the image on top
  : contentStyle;

const responsiveTextContainerStyle = isMobileOrTablet
  ? { ...textContainerStyle, maxWidth: '100%', textAlign: 'center' }
  : textContainerStyle;

const responsiveImageContainerStyle = isMobileOrTablet
  ? { ...imageContainerStyle, maxWidth: '50%', marginBottom:"5vh" }
  : imageContainerStyle;

  return (
    <Box style={greyBackgroundStyle}>
      <Container maxWidth="lg">
        <Box style={responsiveContentStyle}>
          <Box style={responsiveTextContainerStyle}>

            <Section title="About TCS" isMobileOrTablet={isMobileOrTablet}>
             At TCS, we're more than just a logistics company. We're a trusted partner, dedicated to connecting people, businesses and communities across Pakistan and beyond. Founded in 1983, we've been at the heart of the Pakistani economy for over four decades, providing a comprehensive range of B2B and B2C services that keep the nation moving.
            </Section>

          </Box>
          <Box style={responsiveImageContainerStyle}>
            <img style={imageStyle} src="/assets/TcsGuy.png" alt="TCS Delivery Person" />
          </Box>
        </Box>

            <Section title="Unrivalled Expertise" isMobileOrTablet={isMobileOrTablet}>
            With a team of over 10,000 experienced professionals, we have the knowledge and skills to handle any logistics challenge. From express courier services and ecommerce facilitation to 4PL supply chain management and international road transport (TIR), we're always pushing the boundaries of what's possible.
            </Section>
         
            <Section title="Innovative Solutions" isMobileOrTablet={isMobileOrTablet}>
             Innovation is in our DNA. We're constantly exploring new ways to streamline processes, reduce costs and improve efficiency for our clients. Whether you're a small business or a multinational corporation, we have the tools and expertise to help you succeed.
            </Section>

            <Section title="Global Reach, Local Touch" isMobileOrTablet={isMobileOrTablet}>
              While our roots are firmly in Pakistan, our reach extends far beyond our borders. With a growing presence in the Middle East and Central Asia, and a beachhead in London, we're well-positioned to serve as your logistics partner of choice for the region and beyond.
            </Section>

            <Section title="Introducing Luggage Plus" isMobileOrTablet={isMobileOrTablet}>
            We're excited to introduce our new Luggage Plus service, designed specifically for Pakistanis visiting home and tourists travelling with excess baggage. With competitive rates and a hassle-free process, we make it easy to transport your belongings safely and efficiently.
            </Section>
             
            <Section title="Your Partner in Success" isMobileOrTablet={isMobileOrTablet}>
            At TCS, we're more than just a service provider. We're your partner in success. With our unrivalled expertise, innovative solutions and global reach, we're here to help you navigate the complex world of logistics and achieve your goals. Let us be your bridge to a brighter future.
            </Section>
              
      </Container>
    </Box>
  );
}

export default Story;
