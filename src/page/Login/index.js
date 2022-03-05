import React, { useState, useEffect } from "react"
import TopBar from "../../component/view/appBar";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({ 
        user: {
          username: "", 
          password: "" 
        },
      });
    
      const handleChange = (e) => {
        setFormData({
          user: {
            ...formData.user,
            [e.target.name]: e.target.value,
          },
        });
      };
      const handleLogin =  (data) => {
        // let form = { ...state, testTapping: selectBank() };
        // data.preventDefault();
        // navigate('/private');
        navigate('/');
      }
      return (
          <>
          {/* <TopBar /> */}
          <figure className="h-screen bg-white  mt-24">
          <div className="  w-full  max-w-md  m-auto  text-center pt-5  text-3xl mt-28 mb-8	font-extrabold	">Login</div>
        
          <div className="w-full max-w-md m-auto bg-gray-300 rounded-lg border  border-primaryBorder shadow-default py-10 px-1">
           
            
            <div className="text-primary m-6">
        
          <form>
            <label className="text-left text-gray-600 text-xl	  font-family:roboto font-bold">Email</label>
            <input
              name="email"
              type="text"
              value={formData.user.email}
              onChange={handleChange}
              placeholder="Email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-8"
              }
            />
            <label className="text-left text-gray-600 text-xl font-family:roboto font-bold">Password</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-12"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={ 
                  "bg-blue-700 w-full max-w-md  hover:bg-blue-500 py-2 px-4 text-xl rounded-lg border border-blue focus:outline-none text-white focus:border-blacks"
                }
                value="Login"
onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          {/* <div className="flex items-center mt-3 justify-center">
          <button className={"justify-center text-blue-500 hover:underline"}>
            Need to register? Sign up for free
          </button>
          </div> */}
        </div>
            
          </div>
        </figure>

          </>
      );
  }
export default Login



