import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import NotAllowedList from './NotAllowedList';
import Section from './Section';

function PrivacyPolicy() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
     
      <Container maxWidth="lg">
            <Typography variant='h1' sx={{fontWeight:600, color: '#2f3135', textAlign:"left", fontSize: isMobileOrTablet ? "20px" : "h1" }}>Privacy Policy</Typography>
            
            <Section title="Introduction" isMobileOrTablet={isMobileOrTablet}>  
            TCS Express Worldwide (&quot;TCS&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) acknowledges the significance of our customers&#39; right to data privacy and is fully committed to protecting their privacy. This Privacy Policy applies to
            all data collected from customers to provide them with satisfactory services. Our core motive in
            developing this policy is to ensure our customers feel self-assured and safe regarding the personal
            information they share with us in the process of using our services and responding to their enquiries
            or complaints. We ensure that our employees are well aware of TCS&#39;s policies and regulations.    
            </Section>


            <Section title="Data Controller" isMobileOrTablet={isMobileOrTablet}>  
            The data controller responsible for your personal data is:
            TCS Express Worldwide 1000 Great West Road London GB TW8 9DW
            If you have any questions about this Privacy Policy, including any requests to exercise your legal
            rights, please contact our Privacy Compliance Officer at info@tcsexpress.co.uk or by mail at the
            address above. 
            </Section>

            <Section title="Personal Data We Collect" isMobileOrTablet={isMobileOrTablet}>  
            TCS may collect certain personal information including, but not limited to:  
            </Section>
            

            <NotAllowedList title="" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Name',
                'Email address',
                'Phone number',
                'GPS location'
             ]}
            </NotAllowedList>
            
            <Section title="" isMobileOrTablet={isMobileOrTablet}>  
            Any information shared by the customer will remain with TCS as per this Privacy Policy.
            </Section>
           
            <Section title="Cookies" isMobileOrTablet={isMobileOrTablet}>  
            Customer cookies and IP addresses are used by TCS to enhance their visit to the website. Website
            cookies, also known as HTTP cookies, are a necessary function for the modern Internet. As a
            fundamental part of website browsing, website cookies help organizations deliver a personalized and
            convenient experience to their customers. If a customer does not disable their cookies, it shall be
            construed as them permitting TCS to use their cookies. TCS does not guarantee proper functioning
            of its website unless the customer has their cookies enabled.
            </Section>

            <Section title="How We Use Your Personal Data" isMobileOrTablet={isMobileOrTablet}>  
            We use your personal data to provide and improve our services to you. This includes:
            </Section>
            <NotAllowedList title="" isMobileOrTablet={isMobileOrTablet}>
            {[
                'Providing and managing your account',
                'Processing your orders and deliveries',
                'Responding to your enquiries and complaints',
                'Personalizing your experience on our website',
                'Sending you marketing communications (if you have opted-in)',
             ]}
            </NotAllowedList>
           
            <Section title="Sharing Your Personal Data" isMobileOrTablet={isMobileOrTablet}>  
            In order to provide services, TCS may engage third-party companies to perform, facilitate, provide,
            or assist in the course of our services. These third-party companies will be performing tasks
            assigned to them on behalf of TCS, hence they will have access to the personal information of the
            customer. However, they are obligated to keep such information confidential and not to use such
            information except for the purpose of exercising or performing its rights and obligations as specified
            by TCS.
            </Section>
            
           <Section title="Data Retention" isMobileOrTablet={isMobileOrTablet}>  
           We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we
            collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
            reporting requirements. We may retain your personal data for a longer period in the event of a
            complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship
            with you.
            </Section>

            <Section title="Your Legal Rights" isMobileOrTablet={isMobileOrTablet}>  
            Under UK GDPR, you have the following rights in relation to your personal data:
            Right to access - You have the right to request copies of your personal data.
            Right to rectification - You have the right to request that we correct any information you
            believe is inaccurate or complete information you believe is incomplete.
            Right to erasure - You have the right to request that we erase your personal data, under
            certain conditions.
            Right to restrict processing - You have the right to request that we restrict the processing
            of your personal data, under certain conditions.
            Right to object to processing - You have the right to object to our processing of your
            personal data, under certain conditions.
            Right to data portability - You have the right to request that we transfer the data that we
            have collected to another organization, or directly to you, under certain conditions.
            If you would like to exercise any of these rights, please contact our Privacy Compliance Officer at
            info@tcsexpress.co.uk or by mail at the address provided in section 2.
            </Section>
            
            <Section title="Security" isMobileOrTablet={isMobileOrTablet}>  
            For TCS, the trust of its valuable customers is important. Thus, we aim to use commercially
            acceptable means to protect the personal information/data of our customers. However, we expect
            our customers to understand that no method of transmission over the Internet, or method of
            electronic storage, is fully secure and reliable. Thus, we cannot guarantee its absolute security and
            accept no responsibility for any leak of such information.
            </Section>


            
            <Section title="Changes to This Privacy Policy" isMobileOrTablet={isMobileOrTablet}>  
            We keep our privacy policy under regular review and places any updates on this web page. This
            privacy policy was last updated on 27 March 2024.
            </Section>

            
        
            <Section title="" isMobileOrTablet={isMobileOrTablet}>  
            TCS reserves the right to update its Privacy Policy from time to time without providing any
            notice to the customer. Thus, the customers are advised to review this page periodically for any
            changes. These changes are effective immediately after they are posted on this page.
            </Section>

           

      </Container>
     
  );
}

export default PrivacyPolicy;
