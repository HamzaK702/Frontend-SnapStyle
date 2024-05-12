// import React from 'react';
// import { List, ListItem, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import MDBox from '../../components/MDBox';
// import ComplexStatisticsCard from '../../components/StatsCard';
// const Stats = () => {
//   const navigate = useNavigate(); // Hook from react-router-dom to navigate

//   // Function to navigate based on the button's text
 

//   return (
//      <>
//      <Box  maxWidth={"10vw"} sx={{mb:1.5}}>
//     <ComplexStatisticsCard
//       color="#528aae"
//       icon="store"
//       title="Total Revenue"
//       count="34k"
//       percentage={{
//         color: "#528aae",
//         // amount: "+1%",
//         // label: "than yesterday",
//       }}
//     />
//     </Box>
   
//     <Box  maxWidth={"10vw"} sx={{mb:1.5}}>
//     <ComplexStatisticsCard
//      icon="leaderboard"
//      color="red"
//      title="Total Orders"
//      count="2,300"
//      percentage={{ color: "success", amount: "3%", label: "than last month"  }}
//     />
//     </Box> 

//     <Box  maxWidth={"10vw"} sx={{mb:1.5}}>
//     <ComplexStatisticsCard
//       color="#528aae"
//       icon="store"
//       title="Paid Orders"
//       count="34k"
//       percentage={{
//         color: "#528aae",
//         // amount: "+1%",
//         // label: "than yesterday",
//       }}
//     />
//     </Box>

//     <Box  maxWidth={"10vw"} sx={{mb:1.5}}>
//     <ComplexStatisticsCard
//       color="#528aae"
//       icon="store"
//       title="Pending Orders"
//       count="34k"
//       percentage={{
//         color: "#528aae",
//         // amount: "+1%",
//         // label: "than yesterday",
//       }}
//     />
//     </Box>

// </>
   
//   );
// };

// export default Stats;


// import React from 'react';
// import Box from '@mui/material/Box';
// import ComplexStatisticsCard from '../../components/StatsCard'; // Adjust the import path as needed
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PaymentIcon from '@mui/icons-material/Payment';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

// const Stats = () => {
//   return (
//     <Box display="flex" flexWrap="wrap">
//       <Box sx={{ m: 1.5 }}>
//         <ComplexStatisticsCard
//           color="#528aae"
//           icon={<MonetizationOnIcon />} // Replaced with more appropriate icon
//           title="Total Revenue"
//           count="34k"
//           percentage={{ color: "#528aae" }}
//         />
//       </Box>

//       <Box sx={{ m: 1.5 }}>
//         <ComplexStatisticsCard
//           icon={<ShoppingCartIcon />} // Replaced with more appropriate icon
//           color="red"
//           title="Total Orders"
//           count="2,300"
//           percentage={{ color: "success", amount: "3%", label: "than last month" }}
//         />
//       </Box> 

//       <Box sx={{ m: 1.5 }}>
//         <ComplexStatisticsCard
//           color="#528aae"
//           icon={<PaymentIcon />} // Replaced with more appropriate icon
//           title="Paid Orders"
//           count="34k"
//           percentage={{ color: "#528aae" }}
//         />
//       </Box>

//       <Box sx={{ m: 1.5 }}>
//         <ComplexStatisticsCard
//           color="#528aae"
//           icon={<PaymentIcon />} // Replaced with more appropriate icon
//           title="Unpaid Orders"
//           count="34k"
//           percentage={{ color: "#528aae" }}
//         />
//       </Box>

//       <Box sx={{ m: 1.5 }}>
//         <ComplexStatisticsCard
//           color="#528aae"
//           icon={<HourglassEmptyIcon />} // Replaced with more appropriate icon
//           title="Pending Orders"
//           count="34k"
//           percentage={{ color: "#528aae" }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Stats;

import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ComplexStatisticsCard from '../../components/StatsCard'; // Adjust the import path as needed
import CurrencyPound from '@mui/icons-material/CurrencyPound';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';

const Stats = () => {
    const [stats, setStats] = useState({
        totalOrdersThisMonth: 0,
        totalRevenueThisMonth: 0, 
        paidOrdersThisMonth: 0,
        unpaidOrdersThisMonth: 0,
        totalOrdersPendingThisMonth: 0,
        paidRevenueThisMonth:0,
        unpaidRevenueThisMonth:0,
      });

     


      useEffect(() => {
        // Function to fetch stats from the API
        const fetchStats = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/stats`);   
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStats({
              totalOrdersThisMonth: data.totalOrdersThisMonth,
              totalRevenueThisMonth: data.totalRevenueThisMonth,
              paidOrdersThisMonth: data.paidOrdersThisMonth,
              unpaidOrdersThisMonth: data.unpaidOrdersThisMonth,
              totalOrdersPendingThisMonth: data.totalOrdersPendingThisMonth,
              paidRevenueThisMonth:data.paidRevenueThisMonth,
              unpaidRevenueThisMonth:data.unpaidRevenueThisMonth
            });
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
        };
      
        // Call the fetch function
        fetchStats();
      }, []);



  return (
    <Box display="flex"  justifyContent="space-around" sx={{ '& > *': { flexBasis: '19%', flexGrow: 1, m: 1, mt:"5vh" } }}>
      
      
      <ComplexStatisticsCard
        color="#60bd68"
        icon={<CreditScoreIcon />} // Use an appropriate icon
        title="Paid Orders"
        count={stats.paidOrdersThisMonth}
        percentage={{ color: "#528aae", amount:"Revenue", label:"£"+stats.paidRevenueThisMonth }}
      />
      <ComplexStatisticsCard
        color="#f15854"
        icon={<CreditCardOffIcon />} // Use an appropriate icon
        title="Pending Orders"
        count={stats.unpaidOrdersThisMonth}
        percentage={{ color: "#528aae", amount:"Revenue", label:"£"+stats.unpaidRevenueThisMonth }}
      />
      <ComplexStatisticsCard
        color="#faa43a"
        icon={<HourglassEmptyIcon />} // Use an appropriate icon
        title="In-Process Orders"
        count={stats.totalOrdersPendingThisMonth}
        percentage={{ color: "#528aae" }}
      />

    <ComplexStatisticsCard
        icon={<ShoppingCartIcon />} // Use an appropriate icon
        color="#5da5da"
        title="Total Orders"
        count={stats.totalOrdersThisMonth}
        percentage={{ color: "success" }}
        // percentage={{ color: "success", amount: "3%", label: "than last month" }}
      />


    <ComplexStatisticsCard  
        color="#60bd68"
        icon={<CurrencyPound />} // Use an appropriate icon
        title="Total Revenue"
        count={"£"+stats.totalRevenueThisMonth}
        percentage={{ color: "#528aae" }}
      />

    </Box>

    
  );
};

export default Stats;
;

