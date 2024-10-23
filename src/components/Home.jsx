import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About'
import Products from './Products'
import Reviews from './Reviews'
import Payment from './Payment'
import Faq from './Faq'
import Contact from './Contact'
import wavingBot from '../assets/wavingBot.png' // Import the bot PNG
import { IoSend, IoClose } from 'react-icons/io5' // Import IoClose icon



const Home = () => {
  const navigate = useNavigate()
  const [showChatbot, setShowChatbot] = useState(false)
  const [message, setMessage] = useState('') // Add state for message input

  const handleOrderNow = () => {
    navigate('/payment')
  }

  const handleScheduleCall = () => {
    window.location.href = 'tel:+49 711 60192327.'
  }

  const handleSendMessage = () => {
    console.log('Sending message:', message)
    setMessage('') // Clear the input after sending
  }

  return (
    <div className="font-poppins">
      <div className="relative w-full h-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-panels-hero-desktop.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback image in case video doesn't load */}
        <img 
          src="https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_1280.jpg" 
          alt="Solar panels" 
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ display: 'none' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center gap-[60px]">
          <div className="text-center text-white">
            <h1 className="text-4xl mt-[100px] font-bold mb-4 font-sans">Power Your Home with Clean Energy.</h1>
            <p className="text-[2Opx]">Affordable, easy-to-install solar solutions for urban living.</p>
          </div>
          <div className='flex gap-4'>
            <button
              onClick={handleOrderNow}
              className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300'
            >
              Order Now
            </button>
            <button
              onClick={handleScheduleCall}
              className='bg-transparent text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300'
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      
      {/* Chatbot button */}
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 z-50 transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chatbot dialogue box */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-72 bg-white rounded-lg shadow-xl overflow-hidden z-50 animate-slide-up">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Chatbot</h3>
            <button onClick={() => setShowChatbot(false)} className="text-white hover:text-gray-200">
              <IoClose size={20} />
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 mr-2 relative">
                <img 
                  src={wavingBot} 
                  alt="Waving Bot" 
                  className="w-full h-full object-contain animate-wave"
                />
              </div>
              <div className="text-gray-700 mt-2">
                <p className="font-semibold text-black">Bot</p>
                <p className="text-sm text-black">Hi there! How can I help you today?</p>
              </div>
            </div>
            
            {/* Message input and send button */}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow text-black p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                <IoSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <About />
      <Products />
      <Reviews />
      <Payment />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home
