import React,{useState} from 'react'
import HeaderItems from './headerItems'


function header() {
    let [toggle,setToggle]= useState(false)



    const handleClick =()=>{
      setToggle(!toggle)
      console.log(toggle);
    }
    
    return (
        <React.Fragment>
        <div className='header'>
            <div style={{fontWeight:'bolder',
        marginLeft:'1rem',
        color:'blue',
        fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
        letterSpacing:'3px'
        }}>
            
            LIDHISH C</div>
           <HeaderItems className="container" mobileTogleFn={handleClick}/>
        </div>
        {toggle && <div className='menuItems'>
        <a className="menuitem" href="#home" onClick={handleClick}>
            Home
          </a>
          <a className="menuitem" href="#about" onClick={handleClick}>
            About
          </a>
          <a className="menuitem" href="#works" onClick={handleClick}>
            Works
          </a>
          <a className="menuitem" href="#footer" onClick={handleClick}>
            Contact
          </a>
        </div>}
        </React.Fragment>
    )
}

export default header
