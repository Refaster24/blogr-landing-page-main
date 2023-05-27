import './App.css';
import { useState } from 'react';

function Header(){

  document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      // console.log(currentDropdown)
      currentDropdown.classList.add("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })


  const [state, setState] = useState(false);

  let icon;

  let nav;

  if(state){
    // document.getElementById('sec').style.display='none'
    icon = require('./images/icon-close.svg').default
    nav = 
    (<div className='menu'>
      <ul  className="dropdown-menu" >
        
              <div data-dropdown>
                <button data-dropdown-button >Product</button>              
                <div   className="dropdown first-one">
                  <a href="#">Overview</a>
                  <a href="#">Pricing</a>
                  <a href="#">Marketplace</a>
                  <a href="#">Features</a>
                  <a href="#">Integrations</a>
                </div>
              </div>

              <div data-dropdown>
                <button data-dropdown-button>Company</button>
                <div className="dropdown">
                  <a href="#">About</a>
                  <a href="#">Team</a>
                  <a href="#">Blog</a>
                  <a href="#">Careers</a>
                </div>
              </div>
              
              <div data-dropdown>
                <button  data-dropdown-button>Connect</button>
                <div className="dropdown">
                  <a href="#">Contact</a>
                  <a href="#">Newsletter</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>

            </ul>
            <div className="account">
              <button className="button1">Login</button>
              <button className="button2">Sign Up</button>
            </div>
      </div>)
    
  } else{
    // document.getElementById('sec').style.display = 'block'
    icon = require('./images/icon-hamburger.svg').default
  }

  return(
    <div className="Header">
      <header>

        
        <div>
          <img src={require('./images/logo.svg').default} alt="logo" />
          
          <nav>
            <ul  className="dropdown-menu" >
              <div data-dropdown>
                <button data-dropdown-button >Product</button>
              
                <div   className="dropdown first-one">
                  <a href="#">Overview</a>
                  <a href="#">Pricing</a>
                  <a href="#">Marketplace</a>
                  <a href="#">Features</a>
                  <a href="#">Integrations</a>
                </div>
              </div>
              <div data-dropdown><button data-dropdown-button>Company</button>
              <div className="dropdown">
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </div></div>
              <div data-dropdown><button  data-dropdown-button>Connect</button>
              <div className="dropdown">
                <a href="#">Contact</a>
                <a href="#">Newsletter</a>
                <a href="#">LinkedIn</a>
              </div></div>
              
              
            </ul>
          </nav>
          
        </div>
        <div className="account">
            <button className="button1">Login</button>
            <button className="button2">Sign Up</button>
        </div>

        <img src={icon} alt="menu-icon" onClick={()=>setState(!state)}/>

      </header>
      {nav}
      <section /*id='sec'*/>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="account">
          <button className="button1">Start for Free</button>
          <button className="button2">Learn More</button>
        </div>
      </section>

    </div>
  )
}


function Main(){

  let illustrationEditor;
  let mobile;
  let illustrationLaptop;
  if(window.innerWidth <= 491){
    illustrationLaptop = require('./images//illustration-laptop-mobile.svg').default
    illustrationEditor = require('./images/illustration-editor-mobile.svg').default
    mobile = <img  id='img-mobile' src={require('./images/illustration-phones.svg').default} alt="illustration phones" />
  } else {
    illustrationLaptop = require('./images//illustration-laptop-desktop.svg').default
    illustrationEditor = require('./images/illustration-editor-desktop.svg').default
  }

  return(
    <main>

      <section className="sec1">

        <h2>Designed for the future</h2>

        <div className="content">
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
        
        <div className="image">
          <img id='background-img' src={illustrationEditor} alt="illustration Editor" />
        </div>

      </section>
      {mobile}
      <img  id='img' src={require('./images/illustration-phones.svg').default} alt="illustration phones" />
      <section className="sec2">
      
        <div>
          
          <img src={require('./images/bg-pattern-circles.svg').default} alt="background circles" />
        </div>
        
        
        <div>
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>

      </section>

      <section className="sec3">

        <div className="content">
          <div>
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </div>

        <div className="image">
          <img src={illustrationLaptop} alt="illustration Laptop" />
        </div>

      </section>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <div>
        <img src={require('./images/logo.svg').default} alt="logo" />
      </div>
      
      <div>
        <h6>Product</h6>

        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Integrations</a></li>
        </ul>

      </div>

      <div>
        <h6>Company</h6>

        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        
      </div>

      <div>
        <h6>Connect</h6>

        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
        
      </div>

    </footer>
  )
}





function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;