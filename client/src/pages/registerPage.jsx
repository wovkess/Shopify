import NavBar from '../components/NavBar';
import "../App.css"
import React, { useEffect } from 'react';

const RegisterPage = () =>{
        useEffect(() => {
          const script = document.createElement('script');
          script.src = 'https://cdn.lordicon.com/lordicon.js';
          script.async = true;
          document.body.appendChild(script);
      
          return () => {
            document.body.removeChild(script);
          };
        }, []);
    return(
        <>
            <NavBar />
            <div>
            <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: '50px', height: '50px' }}
            ></lord-icon>
            </div>
       </>
    )
    
}

export default RegisterPage;