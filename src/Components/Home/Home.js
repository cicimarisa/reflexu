import watch from "../../img/watch.svg";
import illustration from "../../img/coding.svg";
import dots from "../../img/dots.svg";
import './Home.scss';
/* import { db } from "../../firebases.js";
import { useState } from "react"; */

function Home() {
    /* const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        }).then(() => {
            alert('Message has been submitted');
            setLoader(false);
        }).catch(error => {
            alert(error.message);
            setLoader(false);
        })
    }; */
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div><div className="left-col">
                        <p className="subhead">It's ReflexU School</p>
                    </div>
                        <h1>Classrooms for Geeks</h1>

                        <div className="hero-cta">
                            <a href="#" className="primary-cta">Learn HTML</a>
                            <a href="#" className="watch-video-cta">
                                <img src={watch} alt="Watch a video" />Watch video clases
                            </a>
                        </div>
                    </div>
                    <img src={illustration} className="hero-img" alt="Illustraion" />
                </div>
            </section>
            <section className="features-section">
                <div className="container">
                    <ul className="features-list">
                        <li>Multi Language Website</li>
                        <li>User Friendly</li>
                        <li>Free Courses</li>
                        <li>Owned International Forums</li>
                        <li>Other Awesome Features</li>
                    </ul>
                </div>
                <img src={dots} className="dots-img" alt="Dots Image" />
            </section>
            {/* <section className="testimonials-section">
                <div className="container">
                    <ul>
                        <li>
                            <img src={person} alt="Person" />
                            <span>"Consectetur cillum eu officia commodo."</span>
                            <cite>Jane-Doe</cite>
                        </li>
                        <li>
                            <img src={person} alt="Person" />
                            <span>"Consectetur cillum eu officia commodo."</span>
                            <cite>Jane-Doe</cite>
                        </li>
                        <li>
                            <img src={person} alt="Person" />
                            <span>"Consectetur cillum eu officia commodo."</span>
                            <cite>Jane-Doe</cite>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="contact-left">
                        <h2>Contact</h2>

                        <form className="form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input required type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />

                            <label htmlFor="email">Email</label>
                            <input required type="email" id="email" name="email" placeholder="youremail@something.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="message">Message</label>
                            <textarea required name="message" id="message" cols="30" rows="10" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                            <input type="submit" className="send-message-cta" value="Send Message" style={{ background: loader ? "#000" : "#d5592a" }} />
                        </form>
                    </div>

                    <div className="contact-right">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021124.9257541316!2d103.28509422027959!3d1.3139374995972444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1625005637951!5m2!1sen!2ssg"></iframe>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Home;