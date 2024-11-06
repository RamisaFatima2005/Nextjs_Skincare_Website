import React from 'react';

function Contact() {
    return (
        <div className='bg-gradient-to-r from-slate-200 via-slate-300 to-gray-400 w-auto h-auto'>
            <h2 className="text-3xl font-bold text-center mb-6 pt-8">Contact Us</h2>
            <form className="space-y-6">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 border border-black rounded-lg"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 border border-black rounded-lg"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-4 border border-black rounded-lg"
                        rows={6}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
