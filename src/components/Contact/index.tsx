'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { log } from 'console';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [disabled, setDisabled] = useState(true);
  const [bgColor, setBgColor] = useState("#24252D");
  const [loading, setLoading] = useState(false); // Loading state

  console.log(bgColor);
  
  useEffect(() => {
    if (name.length > 2 && email.includes('@') && message.length > 2) {
      setDisabled(false);
      setBgColor("#00CCBB");
    } else {
      setDisabled(true);
      setBgColor("#24252D");
    }
  }, [name, email, message]);

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post('/api', {
        name,
        email,
        message,
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
      <section className="w-full min-h-screen overflow-y-auto pb-6 pt-24 container mx-auto" id="contact">
        <div className="flex items-center gap-x-4">
          <h2 className="flex items-center gap-x-2 text-2xl font-bold dark:text-gray-700 text-white">
            <span className="rounded  text-pink-500 backdrop-blur ">03.</span>Contact Me
          </h2>
          <div className="relative top-[2px] h-[1px] flex-grow animate-bounce dark:bg-neutral-950/10 bg-white/20"></div>
        </div>
        <div className="grid gap-6 dark:text-gray-700 text-white pt-12 text-center">
          <h3 className="text-3xl sm:text-4xl">Get in touch with me</h3>
          <p className="text-center">
            Want to talk about your project?<br />Just fill out the form below and I’ll get back to you as soon as I can.
          </p>
        </div>
        <form onSubmit={sendEmail} className="mx-auto mt-12 flex rounded-lg dark:text-gray-700 dark:border-[1px] dark:border-pink-300 text-white flex-col gap-x-6 gap-y-4 dark:bg-white/70 p-6 outline outline-1 outline-neutral-500/30 backdrop-blur bg-neutral-900/70 dark:outline-neutral-200/10 md:w-full">
          <div className="grid w-full gap-6 md:grid-cols-2">
            <div className="flex w-full flex-col gap-y-2">
              <label className="indent-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col gap-y-2">
              <label className="indent-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-y-2">
            <label className="indent-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="peer rounded-md h-[7rem] border-0 bg-transparent p-2.5 leading-7 tracking-wider ring-1 ring-neutral-500/40 dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center gap-x-4 self-end">
            <button 
              type='submit' 
              className={`flex h-[2rem] w-[8.2rem] items-center justify-center gap-x-2 rounded text-primary ring-1 ring-pink-400 backdrop-blur transition hover:bg-pink-600/90 hover:text-white hover:ring-pink-400 focus:ring-pink-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={disabled || loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center my-10'>
          <p className='text-white dark:text-gray-700 font-medium'>© 2023 - Karan Kumar</p>
        </div>
      </section>
  );
};

export default Contact;
