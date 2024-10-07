// // '"// // // };
// // // // import React, { useState } from 'react';
// // // // import { Box, Text, Button, Stack, Heading, Center } from '@chakra-ui/react';
// // // // import Calendar from 'react-calendar';
// // // // import { ArrowForwardIcon } from "@chakra-ui/icons";
// // // // import 'react-calendar/dist/Calendar.css';
// // // // import { Navigate, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to receive the passed state
// // // // import { PaymentGateway } from '../gateway/gateway';

// // // // export const GoPag = () => {
// // // //     const nav = useNavigate();
// // // //     const [date, setDate] = useState(new Date());

// // // //     // Retrieve the passed itemName from the Main component using useLocation
// // // //     const location = useLocation();
// // // //     const { itemName } = location.state || {}; // Destructure itemName from location.state

// // // //     return (
// // // //         <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" maxW="md" margin="auto" mt={10}>
// // // //             <Center mb={4}>
// // // //                 {/* Display the itemName passed from the Main component, or a fallback title */}
// // // //                 <Heading size="lg">{itemName || "Default Header Title"}</Heading>
// // // //             </Center>
// // // //             <Box p={4} borderWidth={5} borderRadius="lg" boxShadow="md" bg="white">
// // // //                 <Heading size="md" mb={4}>Select a Date</Heading>
// // // //                 <Calendar
// // // //                     onChange={setDate}
// // // //                     value={date}
// // // //                     style={{ margin: '0 auto' }}
// // // //                 />
// // // //                 <Text mt={4}>Selected Date: {date.toDateString()}</Text>
// // // //                 <Stack spacing={3} mt={4}>
// // // //                     <Button
// // // //                         rightIcon={<ArrowForwardIcon />}
// // // //                         mt={4}
// // // //                         border="2px solid" colorScheme="teal" size="m"
// // // //                         onClick={() => alert(`You selected: ${date.toDateString()}`)}
// // // //                     >
// // // //                         Confirm Date
// // // //                     </Button>
// // // //                     <Button variant="outline" size="sm" onClick={() => setDate(new Date())}>
// // // //                         Reset Date
// // // //                     </Button>
// // // //                     <Button variant="outline" size="sm" onClick={() => nav('./paymentsect')}>
// // // //                         Pay
// // // //                     </Button>
// // // //                 </Stack>
// // // //             </Box>
// // // //         </Box>
// // // //     );
// // // // };
// // // import React, { useState, useEffect } from 'react';
// // // import Flatpickr from 'react-flatpickr'; // Importing Flatpickr for date selection
// // // import 'flatpickr/dist/flatpickr.css'; // Flatpickr CSS

// // // export const GoPag = () => {
// // //   const [selectedDate, setSelectedDate] = useState('');
// // //   const [slotDuration, setSlotDuration] = useState('');
// // //   const [timeSlot, setTimeSlot] = useState('');
// // //   const [bookedSlots, setBookedSlots] = useState({});
// // //   const [popupMessage, setPopupMessage] = useState('');
// // //   const [popupType, setPopupType] = useState(''); // 'success' or 'error'
// // //   const [timeSlots, setTimeSlots] = useState([]);
// // //   const [backgroundImage, setBackgroundImage] = useState(''); // Background image state

// // //   // Default background before any service is selected
// // //   const defaultBg = 'https://example.com/default-bg.jpg';

// // //   // Time slots in 24-hour format
// // //   const availableTimeSlots = [
// // //     "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
// // //     "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
// // //   ];

// // //   // Use Effect to handle background image based on selected service
// // //   useEffect(() => {
// // //     if (timeSlot) {
// // //       setBackgroundImage(''); // Clear background image when a time slot is selected
// // //     } else {
// // //       setBackgroundImage(defaultBg);
// // //     }
// // //   }, [timeSlot]);

// // //   // Calculate end time based on start time and duration
// // //   const calculateEndTime = (startTime, duration) => {
// // //     const [hours] = startTime.split(':').map(Number);
// // //     let endHours = hours + duration;
// // //     return endHours > 19 ? null : `${String(endHours).padStart(2, '0')}:00`;
// // //   };

// // //   // Convert 24-hour format to 12-hour format with AM/PM
// // //   const convertTo12HourFormat = (time) => {
// // //     const [hours] = time.split(':').map(Number);
// // //     const period = hours >= 12 ? 'PM' : 'AM';
// // //     const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
// // //     return `${adjustedHours}:00 ${period}`;
// // //   };

// // //   // Populate time slots based on selected duration
// // //   const handleSlotDurationChange = (e) => {
// // //     const duration = parseInt(e.target.value);
// // //     setSlotDuration(duration);
// // //     if (duration) {
// // //       const slots = availableTimeSlots.map((slot) => {
// // //         const endTime = calculateEndTime(slot, duration);
// // //         return endTime ? {
// // //           start: slot,
// // //           end: endTime,
// // //           formatted: `${convertTo12HourFormat(slot)} - ${convertTo12HourFormat(endTime)}`
// // //         } : null;
// // //       }).filter(Boolean);
// // //       setTimeSlots(slots);
// // //     } else {
// // //       setTimeSlots([]);
// // //     }
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     if (!timeSlot) {
// // //       displayPopUpMessage("Booking Failed! Please select a time slot.", 'error');
// // //       return;
// // //     }

// // //     const bookingKey = `${selectedDate}-${timeSlot.start}`; // Create a unique key for the booking

// // //     // Check if the time slot is already booked
// // //     if (bookedSlots[bookingKey]) {
// // //       displayPopUpMessage(`Booking Failed! The time slot from ${timeSlot.start} to ${timeSlot.end} is already booked.`, 'error');
// // //       return;
// // //     }

// // //     // Mark the slot as booked
// // //     setBookedSlots(prev => ({ ...prev, [bookingKey]: { date: selectedDate, timeSlot } }));
// // //     displayPopUpMessage(`Appointment Confirmed! Your appointment is scheduled on ${selectedDate} from ${timeSlot.formatted}.`, 'success');
// // //   };

// // //   // Function to display popup message
// // //   const displayPopUpMessage = (message, type) => {
// // //     setPopupMessage(message);
// // //     setPopupType(type);
// // //     setTimeout(() => {
// // //       setPopupMessage('');
// // //     }, 5000);
// // //   };

// // //   return (
// // //     <div
// // //       className="container"
// // //       style={{
// // //         backgroundImage: `url(${backgroundImage || defaultBg})`,
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //         padding: '30px',
// // //         borderRadius: '10px',
// // //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
// // //         maxWidth: '600px',
// // //         margin: '0 auto',
// // //       }}
// // //     >
// // //       <h1>Book an Appointment</h1>

// // //       {popupMessage && (
// // //         <div className={`popup ${popupType}`} style={{
// // //           position: 'fixed',
// // //           top: '20px',
// // //           right: '20px',
// // //           backgroundColor: popupType === 'success' ? '#d4edda' : '#f8d7da',
// // //           color: popupType === 'success' ? '#155724' : '#721c24',
// // //           padding: '15px',
// // //           borderRadius: '5px',
// // //           boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// // //           zIndex: 1000,
// // //         }}>
// // //           {popupMessage}
// // //         </div>
// // //       )}

// // //       <form onSubmit={handleSubmit}>
// // //         <label htmlFor="calendar">Choose Appointment Date</label>
// // //         <Flatpickr
// // //           id="calendar"
// // //           value={selectedDate}
// // //           options={{
// // //             inline: true,
// // //             minDate: "today",
// // //             onChange: date => {
// // //               setSelectedDate(date[0].toISOString().split('T')[0]);
// // //               setBackgroundImage(''); // Reset background after date selection
// // //             }
// // //           }}
// // //         />
// // //         <input type="hidden" id="selectedDate" name="date" value={selectedDate} />

// // //         <label htmlFor="slotDuration">Choose Slot Duration</label>
// // //         <select id="slotDuration" name="slotDuration" value={slotDuration} onChange={handleSlotDurationChange}>
// // //           <option value="">-- Select Duration --</option>
// // //           <option value="2">2 Hours</option>
// // //           <option value="3">3 Hours</option>
// // //           <option value="4">4 Hours</option>
// // //         </select>

// // //         <label htmlFor="timeSlot">Choose Appointment Start Time</label>
// // //         <select id="timeSlot" name="timeSlot" value={timeSlot.start} onChange={(e) => {
// // //           const selectedSlot = timeSlots.find(slot => slot.formatted === e.target.value);
// // //           setTimeSlot(selectedSlot);
// // //         }} disabled={!slotDuration}>
// // //           <option value="">-- Select Start Time --</option>
// // //           {timeSlots.map((slot, index) => (
// // //             <option key={index} value={slot.formatted}>{slot.formatted}</option>
// // //           ))}
// // //         </select>

// // //         <button type="submit" disabled={!selectedDate || !timeSlot}>Book Appointment</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // import React, { useState, useEffect } from 'react';
// // import Flatpickr from 'react-flatpickr'; // Importing Flatpickr for date selection
// // import 'flatpickr/dist/flatpickr.css'; // Flatpickr CSS
// // import { Box, Text, Button, Stack, Heading, Center } from '@chakra-ui/react'; // Importing Chakra UI components
// // import { ArrowForwardIcon } from "@chakra-ui/icons";
// // import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate

// // export const GoPag = () => {
// //     const nav = useNavigate();
// //     const [selectedDate, setSelectedDate] = useState(new Date());
// //     const [slotDuration, setSlotDuration] = useState('');
// //     const [timeSlot, setTimeSlot] = useState('');
// //     const [bookedSlots, setBookedSlots] = useState({});
// //     const [popupMessage, setPopupMessage] = useState('');
// //     const [popupType, setPopupType] = useState(''); // 'success' or 'error'
// //     const [timeSlots, setTimeSlots] = useState([]);
// //     const [backgroundImage, setBackgroundImage] = useState(''); // Background image state

// //     // Default background before any service is selected
// //     const defaultBg = 'https://example.com/default-bg.jpg';

// //     // Time slots in 24-hour format
// //     const availableTimeSlots = [
// //         "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
// //         "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
// //     ];

// //     // Use Effect to handle background image based on selected service
// //     useEffect(() => {
// //         if (timeSlot) {
// //             setBackgroundImage(''); // Clear background image when a time slot is selected
// //         } else {
// //             setBackgroundImage(defaultBg);
// //         }
// //     }, [timeSlot]);

// //     // Calculate end time based on start time and duration
// //     const calculateEndTime = (startTime, duration) => {
// //         const [hours] = startTime.split(':').map(Number);
// //         let endHours = hours + duration;
// //         return endHours > 19 ? null : `${String(endHours).padStart(2, '0')}:00`;
// //     };

// //     // Convert 24-hour format to 12-hour format with AM/PM
// //     const convertTo12HourFormat = (time) => {
// //         const [hours] = time.split(':').map(Number);
// //         const period = hours >= 12 ? 'PM' : 'AM';
// //         const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
// //         return `${adjustedHours}:00 ${period}`;
// //     };

// //     // Populate time slots based on selected duration
// //     const handleSlotDurationChange = (e) => {
// //         const duration = parseInt(e.target.value);
// //         setSlotDuration(duration);
// //         if (duration) {
// //             const slots = availableTimeSlots.map((slot) => {
// //                 const endTime = calculateEndTime(slot, duration);
// //                 return endTime ? {
// //                     start: slot,
// //                     end: endTime,
// //                     formatted: `${convertTo12HourFormat(slot)} - ${convertTo12HourFormat(endTime)}`
// //                 } : null;
// //             }).filter(Boolean);
// //             setTimeSlots(slots);
// //         } else {
// //             setTimeSlots([]);
// //         }
// //     };

// //     // Function to display popup message
// //     const displayPopUpMessage = (message, type) => {
// //         setPopupMessage(message);
// //         setPopupType(type);
// //         setTimeout(() => {
// //             setPopupMessage('');
// //         }, 5000);
// //     };

// //     // Handle form submission
// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         if (!timeSlot) {
// //             displayPopUpMessage("Booking Failed! Please select a time slot.", 'error');
// //             return;
// //         }

// //         const bookingKey = `${selectedDate.toISOString().split('T')[0]}-${timeSlot.start}`; // Create a unique key for the booking

// //         // Check if the time slot is already booked
// //         if (bookedSlots[bookingKey]) {
// //             displayPopUpMessage(`Booking Failed! The time slot from ${timeSlot.start} to ${timeSlot.end} is already booked.`, 'error');
// //             return;
// //         }

// //         // Mark the slot as booked
// //         setBookedSlots(prev => ({ ...prev, [bookingKey]: { date: selectedDate.toISOString().split('T')[0], timeSlot } }));
// //         displayPopUpMessage(`Appointment Confirmed! Your appointment is scheduled on ${selectedDate.toISOString().split('T')[0]} from ${timeSlot.formatted}.`, 'success');
// //     };

// //     return (
// //         <Box
// //             p={6}
// //             borderWidth={1}
// //             borderRadius="lg"
// //             boxShadow="lg"
// //             maxW="md"
// //             margin="auto"
// //             mt={10}
// //             style={{
// //                 backgroundImage: `url(${backgroundImage || defaultBg})`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center',
// //             }}
// //         >
// //             <Center mb={4}>
// //                 <Heading size="lg">Book an Appointment</Heading>
// //             </Center>

// //             {popupMessage && (
// //                 <div className={`popup ${popupType}`} style={{
// //                     position: 'fixed',
// //                     top: '20px',
// //                     right: '20px',
// //                     backgroundColor: popupType === 'success' ? '#d4edda' : '#f8d7da',
// //                     color: popupType === 'success' ? '#155724' : '#721c24',
// //                     padding: '15px',
// //                     borderRadius: '5px',
// //                     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// //                     zIndex: 1000,
// //                 }}>
// //                     {popupMessage}
// //                 </div>
// //             )}

// //             <Box p={4} borderWidth={5} borderRadius="lg" boxShadow="md" bg="white">
// //                 <Heading size="md" mb={4}>Select a Date</Heading>
// //                 <Flatpickr
// //                     id="calendar"
// //                     value={selectedDate}
// //                     options={{
// //                         inline: true,
// //                         minDate: "today",
// //                         onChange: date => {
// //                             setSelectedDate(date[0]);
// //                             setBackgroundImage(''); // Reset background after date selection
// //                         }
// //                     }}
// //                 />
// //                 <Text mt={4}>Selected Date: {selectedDate.toDateString()}</Text>
// //                 <Stack spacing={3} mt={4}>
// //                     <label htmlFor="slotDuration">Choose Slot Duration</label>
// //                     <select id="slotDuration" name="slotDuration" value={slotDuration} onChange={handleSlotDurationChange}>
// //                         <option value="">-- Select Duration --</option>
// //                         <option value="2">2 Hours</option>
// //                         <option value="3">3 Hours</option>
// //                         <option value="4">4 Hours</option>
// //                     </select>

// //                     <label htmlFor="timeSlot">Choose Appointment Start Time</label>
// //                     <select id="timeSlot" name="timeSlot" value={timeSlot.start} onChange={(e) => {
// //                         const selectedSlot = timeSlots.find(slot => slot.formatted === e.target.value);
// //                         setTimeSlot(selectedSlot);
// //                     }} disabled={!slotDuration}>
// //                         <option value="">-- Select Start Time --</option>
// //                         {timeSlots.map((slot, index) => (
// //                             <option key={index} value={slot.formatted}>{slot.formatted}</option>
// //                         ))}
// //                     </select>

// //                     <Button
// //                         rightIcon={<ArrowForwardIcon />}
// //                         mt={4}
// //                         border="2px solid" colorScheme="teal" size="m"
// //                         onClick={handleSubmit}
// //                         disabled={!selectedDate || !timeSlot}
// //                     >
// //                         Confirm Date
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={() => setSelectedDate(new Date())}>
// //                         Reset Date
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={() => nav('./paymentsect')}>
// //                         Pay
// //                     </Button>
// //                 </Stack>
// //             </Box>
// //         </Box>
// //     );
// // };
// import React, { useState, useEffect } from 'react';
// import Flatpickr from 'react-flatpickr'; // Importing Flatpickr for date selection
// import 'flatpickr/dist/flatpickr.css'; // Flatpickr CSS
// import { Box, Text, Button, Stack, Heading, Center, Select, FormControl, FormLabel, useToast, Card } from '@chakra-ui/react'; // Using Chakra UI for styling
// import { ArrowForwardIcon } from "@chakra-ui/icons"; // Importing Arrow icon
// import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to receive the passed state
// import { px } from 'framer-motion';

// export const GoPag = () => {
//   const nav = useNavigate();
//   const toast = useToast(); // Using Chakra's Toast for notifications
//   const [selectedDate, setSelectedDate] = useState('');
//   const [slotDuration, setSlotDuration] = useState('');
//   const [timeSlot, setTimeSlot] = useState('');
//   const [bookedSlots, setBookedSlots] = useState({});
//   const [timeSlots, setTimeSlots] = useState([]);
  
//   // Default background before any service is selected
//   const defaultBg = 'https://example.com/default-bg.jpg';

//   // Time slots in 24-hour format
//   const availableTimeSlots = [
//     "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
//     "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
//   ];

//   // Calculate end time based on start time and duration
//   const calculateEndTime = (startTime, duration) => {
//     const [hours] = startTime.split(':').map(Number);
//     let endHours = hours + duration;
//     return endHours > 19 ? null : `${String(endHours).padStart(2, '0')}:00`;
//   };

//   // Convert 24-hour format to 12-hour format with AM/PM
//   const convertTo12HourFormat = (time) => {
//     const [hours] = time.split(':').map(Number);
//     const period = hours >= 12 ? 'PM' : 'AM';
//     const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
//     return `${adjustedHours}:00 ${period}`;
//   };

//   // Populate time slots based on selected duration
//   const handleSlotDurationChange = (e) => {
//     const duration = parseInt(e.target.value);
//     setSlotDuration(duration);
//     if (duration) {
//       const slots = availableTimeSlots.map((slot) => {
//         const endTime = calculateEndTime(slot, duration);
//         return endTime ? {
//           start: slot,
//           end: endTime,
//           formatted: `${convertTo12HourFormat(slot)} - ${convertTo12HourFormat(endTime)}`
//         } : null;
//       }).filter(Boolean);
//       setTimeSlots(slots);
//     } else {
//       setTimeSlots([]);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!timeSlot) {
//       toast({
//         title: "Booking Failed!",
//         description: "Please select a time slot.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       return;
//     }

//     const bookingKey = `${selectedDate}-${timeSlot.start}`; // Create a unique key for the booking

//     // Check if the time slot is already booked
//     if (bookedSlots[bookingKey]) {
//       toast({
//         title: "Booking Failed!",
//         description: `The time slot from ${timeSlot.start} to ${timeSlot.end} is already booked.`,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       return;
//     }

//     // Mark the slot as booked
//     setBookedSlots(prev => ({ ...prev, [bookingKey]: { date: selectedDate, timeSlot } }));
//     toast({
//       title: "Appointment Confirmed!",
//       description: `Your appointment is scheduled on ${selectedDate} from ${timeSlot.formatted}.`,
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   // Retrieve the passed itemName from the Main component using useLocation
//   const location = useLocation();
//   const { itemName } = location.state || {}; // Destructure itemName from location.state

//   return (
//     <Box
//       p={6}
//       borderWidth={1}
//       borderRadius="lg"
//       boxShadow="lg"
//       maxW="600px"
//       br="10px"
//       margin="0"
//       mt={18}
//       style={{
//         backgroundImage: `url(https://blog.cricheroes.com/wp-content/uploads/2023/12/World-of-Box-Cricket.jpg`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//         <Card style={{position:'absolute'}}
//         maxW="800px"
//         padding="30px"
//         br="10px"
//         ml="35%"
//         boxShadow=" 0 4px 20px rgba(0, 0, 0, 0.1)"
//         display="flex"
//         spacing="8"> 
//       <Center mb={4}>
//         <Heading size="lg">{itemName || "Book an Appointment"}</Heading>
//       </Center>

//       <form onSubmit={handleSubmit}>
//         <FormControl id="calendar" mb={4}>
//           <FormLabel
//           spacing="60">Choose Appointment Date</FormLabel>
//           <Flatpickr
//             value={selectedDate}
//             options={{
//               inline: true,
//               minDate: "today",
//               onChange: date => {
//                 setSelectedDate(date[0].toISOString().split('T')[0]);
//               }
//             }}
//           />
//         </FormControl>

//         <FormControl id="slotDuration" mb={4}>
//           <FormLabel>Choose Slot Duration</FormLabel>
//           <Select value={slotDuration} onChange={handleSlotDurationChange}>
//             <option value="">-- Select Duration --</option>
//             <option value="2">2 Hours</option>
//             <option value="3">3 Hours</option>
//             <option value="4">4 Hours</option>
//           </Select>
//         </FormControl>

//         <FormControl id="timeSlot" mb={4}>
//           <FormLabel>Choose Appointment Start Time</FormLabel>
//           <Select value={timeSlot.start} onChange={(e) => {
//             const selectedSlot = timeSlots.find(slot => slot.formatted === e.target.value);
//             setTimeSlot(selectedSlot);
//           }} disabled={!slotDuration}>
//             <option value="">-- Select Start Time --</option>
//             {timeSlots.map((slot, index) => (
//               <option key={index} value={slot.formatted}>{slot.formatted}</option>
//             ))}
//           </Select>
//         </FormControl>

//         <Stack spacing={7} mt={4}
//         >
//           <Button
//             rightIcon={<ArrowForwardIcon />}
//             colorScheme="teal"
//             size="md"
//             type="submit"
//             isDisabled={!selectedDate || !timeSlot}
//           >
//             Book Appointment
//           </Button>
//            <Button variant="outline" size="sm" onClick={() => nav('./paymentsect')}>
//             Pay
//           </Button>
//         </Stack>
//       </form>
//       </Card>
//     </Box>
//   );
// };
import React, { useState, useEffect, useRef } from 'react';
import Flatpickr from 'react-flatpickr'; // Importing Flatpickr component
import 'flatpickr/dist/flatpickr.min.css'; // Import Flatpickr CSS

export const GoPag = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [slotDuration, setSlotDuration] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState(''); // 'green' for success, 'red' for error
  const popupRef = useRef(null);

  useEffect(() => {
    if (popupRef.current) { // Check if popupRef.current is not null
      popupRef.current.classList.add('show');
      setTimeout(() => {
        if (popupRef.current) { // Check again in case component unmounts
          popupRef.current.classList.remove('show');
        }
      }, 5000);
    }
  }, [popupMessage]); // Ensure this runs when popupMessage changes
  

  const handleDateChange = (date) => {
    const dateStr = date[0].toISOString().split('T')[0]; // Get date as YYYY-MM-DD
    setSelectedDate(dateStr);
    setTimeSlot('');
  };

  const handleDurationChange = (e) => {
    const duration = parseInt(e.target.value);
    setSlotDuration(duration);
    
    const availableSlots = getAvailableTimeSlots(duration);
    setTimeSlots(availableSlots);
  };

  const getAvailableTimeSlots = (duration) => {
    const slots = [
      "08:00", "09:00", "10:00", "11:00", "12:00", 
      "13:00", "14:00", "15:00", "16:00", "17:00", 
      "18:00", "19:00"
    ];

    return slots.map((slot) => {
      const endTime = calculateEndTime(slot, duration);
      return endTime ? `${convertTo12HourFormat(slot)} - ${convertTo12HourFormat(endTime)}` : null;
    }).filter(Boolean);
  };

  const calculateEndTime = (startTime, duration) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + duration;

    if (endHours > 19) return null;

    return `${String(endHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${adjustedHours}:${String(minutes).padStart(2, '0')} ${period}`;
  };

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!timeSlot) {
      displayPopUpMessage("Booking Failed! Please select a time slot.", 'red');
      return;
    }

    const [startTime] = timeSlot.split(' - ');
    const bookingKey = `${selectedDate}-${startTime}`;

    if (bookedSlots[bookingKey]) {
      displayPopUpMessage(`Booking Failed! The time slot from ${startTime} is already booked.`, 'red');
      return;
    }

    setBookedSlots((prev) => ({
      ...prev,
      [bookingKey]: { date: selectedDate, timeSlot },
    }));

    displayPopUpMessage(`Appointment Confirmed! Your appointment is scheduled on ${selectedDate} from ${timeSlot}.`, 'green');
    resetForm();
  };

  const resetForm = () => {
    setSelectedDate('');
    setSlotDuration('');
    setTimeSlot('');
    setTimeSlots([]);
  };

  const displayPopUpMessage = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
  };

  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      <div ref={popupRef} className={`popup ${popupType}`}>
        {popupMessage}
      </div>

      <form id="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="calendar">Choose Appointment Date</label>
        <Flatpickr
          id="calendar"
          onChange={handleDateChange}
          options={{
            inline: true,
            minDate: "today",
          }}
        />
        <input type="hidden" id="selectedDate" value={selectedDate} required />

        <label htmlFor="slotDuration">Choose Slot Duration</label>
        <select id="slotDuration" value={slotDuration} onChange={handleDurationChange} required>
          <option value="">-- Select Duration --</option>
          <option value="2">2 Hours</option>
          <option value="3">3 Hours</option>
          <option value="4">4 Hours</option>
        </select>

        <label htmlFor="timeSlot">Choose Appointment Start Time</label>
        <select id="timeSlot" value={timeSlot} onChange={handleTimeSlotChange} required disabled={!slotDuration}>
          <option value="">-- Select Start Time --</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>

        <button type="submit" id="bookButton" disabled={!timeSlot}>Book Appointment</button>
      </form>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #e8f0f2; /* Default Light gray-blue background */
          display: flex;
          justify-content: center; /* Center horizontally */
          align-items: center; /* Center vertically */
          height: 100vh; /* Full height of the viewport */
          overflow: hidden; /* Prevent scrolling */
        }
        .container {
          max-width: 400px; /* Adjusted width to fit better */
          width: 90%; /* Full width for small screens */
          background-color: rgba(255, 255, 255, 0.9); /* White background with transparency */
          padding: 20px; /* Reduced padding */
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          box-sizing: border-box; /* Ensure padding doesn't affect width */
          overflow-y: auto; /* Allow vertical scrolling within the card if needed */
          max-height: 90vh; /* Limit the height of the container */
        }
        h1 {
          text-align: center;
          color: #4b0082; /* Indigo color for the header */
          margin-bottom: 20px;
          font-size: 24px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333; /* Darker color for the label */
        }
        input, select, button {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          font-size: 16px; /* Increased font size for better readability */
        }
        button {
          background-color: #4caf50; /* Green background for the button */
          color: #fff; /* White text for the button */
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s; /* Smooth transition for hover effect */
        }
        button:hover {
          background-color: #45a049; /* Darker green on hover */
        }
        /* Popup message style */
        .popup {
          position: fixed;
          top: 20px; /* Position at the top of the page */
          right: 20px;
          background-color: #f8d7da; /* Default color for error */
          color: #721c24; /* Default text color for error */
          padding: 15px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          opacity: 0; /* Initially invisible */
          transition: all 0.5s ease; /* Smooth transition */
        }
        .popup.show {
          top: 80px; /* Slide down */
          opacity: 1; /* Become visible */
        }
        .popup.green {
          background-color: #d4edda;
          color: #155724;
        }
      `}</style>
    </div>
  );
};

