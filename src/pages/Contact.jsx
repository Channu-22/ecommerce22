// import { useForm } from "react-hook-form";

function Contact() {
 

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <form
    
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-rose-500 mb-6">Contact Us</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
         
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          />
          
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
        
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          />
          
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          ></textarea>
        
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;