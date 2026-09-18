import { Paperclip } from "lucide-react";
import React from "react";

export default function ContactForm() {
  return (
    <div className="flex justify-center py-9  min-h-screen">
      <div className="w-full max-w-lg wrapper rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Let&apos;s Connect
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-black font-medium mb-1 text-left">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-black text-left font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1 text-left">
              Subject
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-black text-left font-medium mb-1">
              Attachment
            </label>
            <div className="relative">
              <input
                type="file"
                id="fileUpload"
                required
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
              />
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white">
                <Paperclip className="text-gray-500 mr-2" />
                <span className="text-gray-600">Choose a file...</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-black font-medium mb-1 text-left">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full button1 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
