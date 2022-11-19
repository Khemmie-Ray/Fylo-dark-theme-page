import location from "./assets/icon-location.svg"
import phone from "./assets/icon-phone.svg"
import email from "./assets/icon-email.svg"
import Logo from "./assets/logo.svg"
import facebook from "./assets/icon-facebook.svg"
import twitter from "./assets/icon-twitter.svg"
import instagram  from "./assets/icon-instagram.svg"


export default function Footer() {
    return (
        <footer>
            <div className="popUp">
            <section className="access">
            <h3>Get early access today</h3>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            </section>
            <div className="forInput">
            <input type="text" />
            <button className="smallerBtn">Get Started For Free</button>
            </div>  
            </div>
            <div className="footContainer">
            <div class="container">
            <img src={Logo} alt="" className="footlogo"/>
            <div className="footLinks">
            <div className="place">
            <img src={location} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="contact">
            <p><img src={phone} alt="" /><span>+1-543-123-4567</span></p>
            <p><img src={email} alt="" /><span>example@fylo.com</span></p>
            </div>
            <ul className="links1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            </ul>
            <ul className="links2">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            </ul>
            <ul class="socials">
          <li class="socials-img"><input type="image" src={facebook} alt="facebook" /></li>
          <li class="socials-img"><input type="image" src={twitter} alt="twitter" /></li>
          <li  class="socials-img"><input type="image" src={instagram} alt="instagram" /></li>
        </ul>
            </div>
            <address>
            <p>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Khemmie-Ray</a>.
            </p>
            </address>
            </div>
            </div>
        </footer>
    )
}