import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import NotAllowedList from './NotAllowedList';
import Section from './Section';

function ProhibitedItems() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
     
      <Container maxWidth="lg">
            <Typography variant='h1' sx={{fontWeight:600, color: '#2f3135', textAlign:"left", fontSize: isMobileOrTablet ? "20px" : "h1" }}>Prohibited Items for Excess Baggage</Typography>
            <Section title="" isMobileOrTablet={isMobileOrTablet}>
            To ensure the safety and security of your shipment, as well as compliance with international regulations, the following items are prohibited for transport as excess baggage:            
            </Section>

            <NotAllowedList title="Dangerous Goods" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Corrosives, acids, alkalis, and wet cell batteries',
                'Disabling devices such as mace, pepper spray, stun guns, and electro shock weapons',
                'Firearms, guns, and other devices that discharge projectiles, including toy guns, replicas, component parts, compressed air guns, flare pistols, bows, crossbows, harpoon guns, and slingshots',
                'Explosives, flammable substances, smoke-generating canisters, and smoke-generating cartridges'
             ]}
            </NotAllowedList>

            <NotAllowedList title="Sharp Objects and Weapons" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Scissors, knives, tools, screwdrivers, nail cutters, and hypodermic needles',
                'Sporting equipment that may pose a safety risk',
             ]}
            </NotAllowedList>

            <NotAllowedList title="Hazardous Materials" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Chemical and toxic substances that pose a risk to health, safety, or security',
                'Liquids, aerosols, and gels in containers larger than 100ml',
                'Lithium batteries, either loose or in devices, that exceed specified limits',
                'Christmas crackers, party poppers, and fireworks',
             ]}
            </NotAllowedList>

            <NotAllowedList title="Perishables and Plants" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Unpackaged goods or items not packed safely and securely to withstand transport',
                'Chilled or frozen food, meat, and seafood',
                'Living or dead plants, trees, seeds, and flowers',
             ]}
            </NotAllowedList>

            <NotAllowedList title="Fragile and Valuable Items" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Artwork, antiques, ceramics, glass, porcelain, and other fragile items',
                'Cash, credit cards, deeds, passports, and negotiable financial instruments',
                'Perfume, toiletries, and nail polish',
                'Laptops, mobile phones, tablets, and other valuable electronics',
             ]}
            </NotAllowedList>
            	
            <Section title="" isMobileOrTablet={isMobileOrTablet}>
            Please note that this list is not exhaustive, and additional restrictions may apply depending on the destination and mode of transport. If you have any questions about the acceptability of a specific item, please contact our customer service team for further assistance.
            </Section>

      </Container>
     
  );
}

export default ProhibitedItems;
