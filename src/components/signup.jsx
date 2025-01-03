import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <div className="flex bg-antiquewhite overflow-hidden p-5 rounded-lg w-[1000px] mx-auto my-auto justify-center items-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-5">Create an Account</h1>
          <form className="flex flex-col w-4/5">
            <label htmlFor="email" className="text-base mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              className="p-2 mb-5 border border-gray-300 rounded-md text-base"
            />

            <label htmlFor="password" className="text-base mb-1">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
              className="p-2 mb-5 border border-gray-300 rounded-md text-base"
            />

            <button 
              type="submit" 
              className="p-3 text-base text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-5 text-base">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>

        <div className="flex-1 rounded-lg bg-center bg-cover" style={{ backgroundImage: "url('/assets/krishna.jpg')" }}>
          <img src="/assets/krishna.jpg" alt="Image of Krishna" className="h-[600px] object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
