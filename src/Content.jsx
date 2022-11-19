import profile1 from "./assets/profile-1.jpg"
import profile2 from "./assets/profile-2.jpg"
import profile3 from "./assets/profile-3.jpg"
import hero from "./assets/illustration-intro.png"
import files from "./assets/icon-access-anywhere.svg"
import security from "./assets/icon-security.svg"
import collaboration from "./assets/icon-collaboration.svg"
import otherFile from "./assets/icon-any-file.svg"
import stayProductive from "./assets/illustration-stay-productive.png"
import arrow from "./assets/icon-arrow.svg"
import quotes from "./assets/bg-quotes.png"

export default function Content () {
    return (
        <main>
            <section className="topContent">
                <img src={hero} alt="" />
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className="btn">Get Started</button>
            </section>
            <section className="middleContent">
                    <section className="box">
                        <div className="boxImg">
                        <img src={files} alt="" />
                        </div>
                        <h2>Access your files, anywhere</h2>
                        <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </section>
                    <section className="box">
                        <div className="boxImg">
                        <img src={security} alt="" />
                        </div>
                        <h2>Security you can trust</h2>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </section>
                    <section className="box">
                        <div className="boxImg">
                        <img src={collaboration} alt="" />
                        </div>
                        <h2>Real-time collaboration</h2>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </section>
                    <section className="box">
                        <div className="boxImg">
                        <img src={otherFile} alt="" />
                        </div>
                        <h2>Store any type of file</h2>
                         <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </section>
            </section>
            <section className="bottomContent">
                <div className="box">
                    <img src={stayProductive} alt="" />
                </div>
                <div className="productiveContent">
                <h2 className="subtitle">Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a href="#">See how Fylo works <img src={arrow} alt="" className="arrowIcon" /></a>
                </div>
            </section>
            <article>
                <img src={quotes} alt="" className="quote" />
                <div className="quotesContent">
            <div className="quoteBox">
                <p>Fylo has improved our team producpity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="containerUser">
                    <div className="user">
                    <img src={profile1} alt="" className="profile" />
                    </div>
                    <div className="userInfo">
                    <h4>Satish Patel</h4>
                    <p>Founder & CEO, Huddle</p>
                </div>
                </div>
                </div>
                <div className="quoteBox">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="containerUser">
                    <div className="user">
                    <img src={profile2} alt="" className="profile" />
                    </div>
                    <div className="userInfo">
                    <h4>Bruce McKenzie</h4>
                    <p>Founder & CEO, Huddle</p>
                </div>
                </div>
                </div>
                <div className="quoteBox">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="containerUser">
                    <div className="user">
                    <img src={profile3} alt="" className="profile" />
                    </div>
                    <div className="userInfo">
                    <h4>Iva Boyd</h4>
                    <p>Founder & CEO, Huddle</p>
                </div>
                </div>
                </div>
                </div>
            </article>
        </main>
    )
}