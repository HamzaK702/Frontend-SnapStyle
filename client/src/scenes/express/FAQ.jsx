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
      question: "What happens if the consignee is not available at home/delivery address?",
      answer: "If the consignee is not available at the given address, our courier will deliver the shipment to a person who is available and will take down the signatures and relation of that person to the consignee. In case no one is available at the given address or if the address is closed, our courier would leave a message card for the consignee. After coordinating with the consignee, our courier will make a second attempt the following day. However, certain sensitive shipments governed by shipper regulations can only be received either by consignee or his/her blood relative at given address."
    },
    {
      id: 'faq2',
      question: "Does TCS also offer Holiday Service for international shipments?",
      answer: "TCS does not offer holiday service for international shipments."
    },
    {
      id: 'faq3',
      question: "In case a shipment is lost, will TCS be liable to give us the market value of the good that has been lost?",
      answer: "If the shipment is insured then yes, TCS is liable to pay the market value of the lost shipment. If the shipment is not insured, then the liability of TCS is limited as mentioned in the terms & conditions of carriage."
    },
    {
      id: 'faq4',
      question: "How much does TCS charge as insurance for high value goods?",
      answer: "Commodity-wide insurance rates vary, ranging from 0.5% to 2% of declared value of goods."
    },
    {
      id: 'faq5',
      question: "How does shipper know if his shipment is dutiable?",
      answer: "Each country establishes its own standards as to which goods are considered dutiable. For further details, please call us at 111-123-456."
    },
    {
      id: 'faq6',
      question: "What happens if an international shipment is pending and no new details are provided?",
      answer: "On all such pending shipments, the shipper will have to send new details within 5 working days from the date informed. If not, then shipper will have to abandon the shipment and it will be destroyed or disposed off. However, shipper still remains liable for all additional costs (including duty and taxes)."
    },
    {
      id: 'faq7',
      question: "If an international shipment is dutiable, how does it affect delivery times?",
      answer: "It doesn't affect delivery time."
    },
    {
      id: 'faq8',
      question: "What happens in case a shipper wants to return an undelivered international shipment to the origin?",
      answer: "For all such shipments, a Return to Origin (RTO) request will be notified in writing by the shipper and all return or redirection duties, taxes billed at destination & RTO charges will be payable by the shipper."
    },
    {
      id: 'faq9',
      question: "How can I claim for my shipment?",
      answer: "All claims for international/domestic shipments must be submitted in writing to TCS within thirty (30) days from the date that TCS accepted the shipment, failing which TCS shall have no liability whatsoever."
    },
    {
      id: 'faq10',
      question: "In case an international shipment is not delivered on the first attempt will TCS make another attempt?",
      answer: "Yes, the courier will automatically attempt delivery to the address the next business day before 5:00 PM. After two attempts, the package will be held at the local agent office until disposal arrangements are made."
    },
    {
      id: 'faq11',
      question: "Who pays duty on goods?",
      answer: "The consignee typically pays the duty charges. However, shipper may also choose to pay them, which means he is requesting Delivery Duty Paid Service."
    },
    {
      id: 'faq12',
      question: "Does TCS consider all shipments as liability?",
      answer: "Every international shipment is transported on a limited liability basis as provided on the airway bill. TCS liability is strictly limited to direct loss. TCS maximum liability in the event of loss or damage to a shipment is US$100 or the value on the airway bill whichever is lesser."
    }
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
