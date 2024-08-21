"use client";

import { useState } from 'react';
import Link from 'next/link'
import style from '@/style/Header.module.css'
import React from 'react';
import Chat from './Chat';

export default function Header (){
    return(
        <>
    <nav class="bg-green border-green-200 dark:bg-green-900 fixed top-0 left-0 right-0 z-40">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/asset/images/logo.webp" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AgriMarket</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className={style.conexion}>
                <Chat/>
                <Link href="/connexion"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">se connecter</button></Link>
                <Link href="/login"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">s'inscrire</button></Link>
            </div>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gren-100 rounded-lg bg-green-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-900 dark:border-gray-700">
            <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="#service" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>

        </>
    )
}

// export function Chat() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
  
//     const toggleChat = () => {
//       setIsOpen(!isOpen);
//     };
  
//     const handleMessageChange = (e) => {
//       setMessage(e.target.value);
//     };
  
//     const handleSendMessage = () => {
//       if (message.trim() !== "") {
//         setMessages([...messages, message]);
//         setMessage("");
//       }
//     };
  
//     return (
//       <>
//       <div
//           style={{
//             position: 'fixed',
//             bottom: '20px',
//             right: '20px',
//             zIndex: 1000,
//             cursor: 'pointer',
//           }}
//           onClick={toggleChat}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="48"
//             height="48"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20 2H4c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6.83L4 16.83V4h16v10z" />
//           </svg>
//       </div>
  
//         {isOpen && (
//           <div
//             style={{
//               position: 'fixed',
//               bottom: '80px',
//               right: '20px',
//               width: '300px',
//               height: '400px',
//               backgroundColor: 'white',
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               zIndex: 1000,
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             <div
//               style={{
//                 padding: '10px',
//                 borderBottom: '1px solid #ccc',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: '#f7f7f7',
//                 borderTopLeftRadius: '8px',
//                 borderTopRightRadius: '8px',
//               }}
//             >
//               <span>Chat</span>
//               <button
//                 onClick={toggleChat}
//                 style={{
//                   border: 'none',
//                   background: 'transparent',
//                   cursor: 'pointer',
//                 }}
//               >
//                 X
//               </button>
//             </div>
//             <div
//               style={{
//                 padding: '10px',
//                 overflowY: 'auto',
//                 flex: 1,
//               }}
//             >
//               {messages.map((msg, index) => (
//                 <div key={index} style={{ marginBottom: '10px' }}>
//                   {msg}
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 padding: '10px',
//                 borderTop: '1px solid #ccc',
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={handleMessageChange}
//                 placeholder="Écrire un message..."
//                 style={{
//                   flex: 1,
//                   padding: '8px',
//                   borderRadius: '4px',
//                   border: '1px solid #ccc',
//                   marginRight: '10px',
//                 }}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 style={{
//                   padding: '3px 12px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   borderRadius: '4px',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Envoyer
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }