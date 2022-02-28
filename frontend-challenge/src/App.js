import React , {useState} from 'react'
import './App.css';
import logo from './images/logo-bookmark.svg'
import firstImage from './images/illustration-hero.svg'
import slider1 from './images/illustration-features-tab-1.svg'
import slider2 from './images/illustration-features-tab-2.svg'
import slider3 from './images/illustration-features-tab-3.svg'
import logoChrome from './images/logo-chrome.svg'
import logoFirefox from './images/logo-firefox.svg'
import logoOpera from './images/logo-opera.svg'
import dotsBar from './images/bg-dots.svg'
import logoFacebook from './images/icon-facebook.svg'
import logoTwitter from './images/icon-twitter.svg'
import logoFooter from './images/logo-bookmark-footer.svg'
import burgerLogo from './images/icon-hamburger.svg'

function App() {
  const [slider, setSlider] = useState('simple');
  const [question, setQuestion] = useState(0);
  const [contacto, setContacto] = useState('');
  const [options, setOptions] = useState(false);

  const handleChange = (e) => {
    setSlider([e.target.value] = e.target.name)
  }

  const open = (e) => {
    e.preventDefault()
    if(e.target.value === '1') setQuestion(1);
    else if(e.target.value === '2') setQuestion(2);
    else if (e.target.value === '3') setQuestion(3);
    else if (e.target.value === '4') setQuestion(4);
    else setQuestion(0)
  }

  const validador = (e) => {

    setContacto([e.target.name] = e.target.value)
  }

  const validacion = () => {
    let exp = 'expresion regular'
    if(contacto !== exp) return setContacto('error');
    setContacto('success')
  }

  const opciones =() => {
    setOptions(true);

  }

  return (
    <>
      <nav class="navBar">
        <div class="logo">
          <img src={logo} alt='logo'/>
        </div>
        <div class='burgerLogo'>
          <img src={burgerLogo} alt='burguer' onClick={opciones}/>
        </div>
        <ul class="buttons-navBar">
          <a class="button-navBar" href="#features">FEATURES</a>
          <a class="button-navBar" href="#pricing">PRICING</a>
          <a class="button-navBar" href="#contact">CONTACT</a>
          <button class="button-login">LOGIN</button>
        </ul>
      </nav>
      <section class="first-section">
        <div class="first-section-desc">
          <h1>A Simple Bookmark Manager</h1>
          <p> A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.</p>
          <div class='first-buttons'>
            <button class="first-section-buttons chromeButt">Get it on Chrome</button>
            <button class="first-section-buttons firefoxButt">Get it on Firefox</button>
          </div>
        </div>
        <div class="first-section-img-container">
          <div class='forma'>
            <div class='square'> </div>
            <div class='circle'> </div>
          </div>
          <img src={firstImage} alt='first'/>
  
        </div>
      </section>
    
      <section id="features" class="second-section">
        <div class="second-section-desc">
          <h2>Features</h2>
          <p>Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div >
          <nav class="second-section-buttons">
            <button
            class="second-section-button"
            name='simple'
            onClick={handleChange}
            >Simple Bookmarking</button>
            <button 
            class="second-section-button"
            name='speedy'
            onClick={handleChange}
            >Speedy Searching</button>
            <button
            class="second-section-button"
            onClick={handleChange}
            name='easy'
            >Easy Sharing</button>
          </nav>
          
        <div class='form-slide'>
            <div class='sliders'>
            { slider === 'simple' ?
              <div id="simple" class="center-slider">
                <div class='forma2'>
                  <div class='square2'> </div>
                  <div class='circle2'> </div>
                </div>
                <div>
                  <img src={slider1} alt='slider1'/>
                </div>
                <div class='sliders-desc'>
                  <h2>Bookmark in one click</h2>
                  <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</p>
                  <button class='sliders-button'>More Info</button>
                </div>
              </div>
              : slider === 'speedy' ?
              <div id="speedy" class="center-slider">
                <div class='forma2'>
                  <div class='square2'> </div>
                  <div class='circle2'> </div>
                </div>
                <div>
                  <img src={slider2} alt='slider2'/>
                </div>
                <div class='sliders-desc'>
                  <h2>Intelligent search</h2>
                  <p>Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.</p>
                  <button class='sliders-button'>More Info</button>
                </div>
              </div>
              :
              <div id='easy' class="center-slider">
                <div class='forma2'>
                  <div class='square2'> </div>
                  <div class='circle2'> </div>
                </div>
                <div>
                  <img src={slider3} alt='slider3'/>
                </div>
                <div class='sliders-desc'>
                  <h2>Share your bookmarks</h2>
                  <p>Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.</p>
                  <button class='sliders-button'>More Info</button>
                </div>
              </div>
          }
            </div>
          </div>
        </div>
      </section>
      
      <section class="third-section">
        <div class="third-section-desc">
          <h2>Download the extension</h2>
          <p> We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
        </div>
    
        <div class="extensions">
          <div class="extension ext-chrome">
            <img 
            src={logoChrome} 
            alt='logo-chrome'
            class="extLogos"
            />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <img 
            src={dotsBar} 
            alt="dotsBar"
            class="dotsBar"
            />
            <button class="ext-buttons">Add & Install Extension</button>
          </div>
    
          <div class="extension ext-firefox">
            <img 
            src= {logoFirefox}
            alt="logo-firefox"
            class="extLogos"
            />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <img 
            src={dotsBar}
            alt="dotsBar"
            class="dotsBar"
            />
            <button class="ext-buttons">Add & Install Extension</button>
          </div>
    
          <div class="extension ext-opera">
            <img 
            src={logoOpera}
            alt="logo-opera"
            class="extLogos"
            />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <img 
            src={dotsBar}
            alt="dotsBar"
            class="dotsBar"
            />
            <button class="ext-buttons">Add & Install Extension</button>
          </div>
        </div>
      </section>

      <section class='questions'>
        <div>
          <h2>Frequently Asked Questions</h2>
          <p> Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
        </div>

        <div class='question-slides'>

          <div class='question-slide' >
            <hr></hr>
            <button 
            value= '1' 
            onClickCapture={open}
            className='questionButtons'
            >
            What is Bookmark?
            </button>
            <ul className={question === 1 ? 'answer2' : 'answer'} >
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
              justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
              </li>
            </ul>
          </div>
      
          <div class='question-slide'>
            <hr></hr>
            <button
            value= '2' 
            onClick={open}
            className='questionButtons'>
            How can I request a new browser?
            </button>
            <ul className={question === 2 ? 'answer2' : 'answer'} >
              <li>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
              Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
              ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
              Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
              </li>
            </ul>
          </div>

          <div class='question-slide'>
            <hr></hr>
            <button 
            value='3'
            onClickCapture={open}
            className='questionButtons'>
            Is there a mobile app?
            </button>
            <ul className={question === 3? 'answer2' : 'answer'} >
              <li>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
              urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
              sollicitudin ex et ultricies bibendum.
              </li>
            </ul>
          </div>

          <div class='question-slide'>
            <hr></hr>
            <button 
            value='4'
            onClickCapture={open}
            className='questionButtons'>
            What about other Chromium browsers?
            </button>
            <ul className={question === 4 ? 'answer2' : 'answer'} >
              <li>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                vitae neque eget nisl gravida pellentesque non ut velit.
              </li>
            </ul>
            <hr></hr>
          </div>
 
        </div>
        <div>
          <button class='info-button'>More Info</button>
        </div>
      </section>
      <section id="contact" class="contact">
          <div className='contactForm'>
          <div>
          <p style={{color:'white'}}>35,000+ already joined</p>
          </div>
          <div>
          <h2 style={{color:'white'}}>Stay up-to-date with what we’re doing</h2>
          </div>
        <form class='form'>
          <input 
          type='email' 
          class='input'
          onChange={validador}
          placeholder='Enter your email address'
          required
          />
          <button class='contact-button' onClick={validacion}>Contact Us</button>
        </form>
        </div>
      </section>
    
      <section class="footer">
        <nav class='footerBar'>
        <div class='footerBar-options'>
        <img src={logoFooter} alt='logo' class='footerLogo'/>
          <a class="footerBar-option" href="#features">FEATURES</a>
          <a class="footerBar-option" href="#pricing">PRICING</a>
          <a class="footerBar-option" href="#contact">CONTACT</a>
        </div>
        <div class='footerBar-logos'>
          <img src={logoFacebook} alt='logo-facebook' className='logoFacebook'/>
          <img src={logoTwitter} alt='logo-twitter' className='logoTwitter'/>
        </div>
        </nav>
      </section>
    
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="_blank">Miguel Coronel</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
