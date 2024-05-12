// CustomizedAccordions.js

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const faqs = [
    {
      id: 'faq1',
      question: "What is Luggage Plus?",
      answer: "Luggage Plus is a specialised service designed to securely and efficiently transport large volumes of personal items for overseas Pakistanis visiting family and tourists with extensive shopping. It caters to the cultural and personal needs of individuals who require a reliable means of sending gifts and personal belongings back to Pakistan without the hassle of carrying them during travel."
    },
    {
      id: 'faq2',
      question: "How does Luggage Plus differ from standard luggage services?",
      answer: "Luggage Plus stands out by focusing on the specific needs of its target market, offering an addition or enhancement to standard luggage services. This implies more value, service, and care for the customer's belongings, making it a specialist in its field."
    },
    {
      id: 'faq3',
      question: "Who can use Luggage Plus?",
      answer: "Luggage Plus targets two main customer profiles: 1. Overseas Pakistanis travelling back to Pakistan. 2. Tourists carrying large amounts of shopping, focusing on personal items excluding electronic items and vehicles."
    },
    {
      id: 'faq4',
      question: "Is luggage insurance available?",
      answer: "Yes, luggage insurance is available to provide additional peace of mind for your belongings during transit."
    },
    {
      id: 'faq5',
      question: "Are there any restrictions on what I can send?",
      answer: "Yes, Luggage Plus focuses on personal items excluding electronic items and vehicles. For a detailed list of restricted items, please refer to our terms and conditions."
    },
    {
      id: 'faq6',
      question: "How are customs duties handled?",
      answer: "Customs duties may be applicable depending on the destination country's regulations and the value of the goods being shipped. The value of the goods is a determining factor for customs duty."
    },
    {
      id: 'faq7',
      question: "How much does it cost to send a package?",
      answer: "Luggage Plus offers competitive rates designed to accommodate various shipping needs. For packages up to 25 kg, the minimum rate is £155, with an additional charge of £5 per kg for packages exceeding this weight. For packages over 25 kg and up to 30 kg, a fixed rate of £175.50 applies, with an additional rate of £5 per kg beyond 30 kg."
    },
     
    {
        id: 'faq8',
      question: "How can I book a shipment?",
      answer: "You can book a shipment through our intuitive online booking system. Creating an account with us will streamline the booking process and allow you to manage your shipments easily."
    },
    {
      id: 'faq9',
      question: "Can I track my shipment?",
      answer: "Yes, you can track your shipment using our online tracking system. This will provide you with real-time updates on the status of your shipment."
    },
    
  ];
  
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      
      {faqs.map((faq, index) => (
        <Accordion 
          key={faq.id || index} 
          expanded={expanded === `panel${index}`} 
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
