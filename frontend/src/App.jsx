import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView

const App = () => {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [messsage, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  ;

  const handleSubscribe = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      showMessage("Invalid email.")
      return;
    }
    showMessage("Subscribed successfully.")
    setIsSubscribed(true);
    setShowSubscribePopup(false);
    localStorage.setItem('subscribed_oolkar', true);
    await fetch(`${process.env.REACT_APP_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
  }

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: false, // Whether animation should happen only once (optional)
    });

    const isSubscribed = localStorage.getItem('subscribed_oolkar');
    if (isSubscribed) {
      setIsSubscribed(true);
    }

  }, []);

  return (
    <>
      <main className="w-full h-screen overflow-y-scroll scroll-snap-type-y-mandatory">
        {/* Hero Section */}
        <section className="hero w-full h-screen relative scroll-snap-align-start">
          {/* Oolkar Logo */}
          <motion.img
            ref={ref} // Attach the ref to the image
            src="/white_transparent.png"
            alt="Oolkar logo"
            className="absolute top-4 left-4 z-10 w-52 h-auto"
            initial={{ opacity: 0, x: -100 }} // Initial state
            animate={{
              opacity: inView ? 1 : 0, // Animate opacity based on inView
              x: inView ? 0 : -100, // Animate position
            }}
            transition={{ duration: 1 }} // Animation duration
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] flex flex-col justify-center items-center">
            <span className="loader"></span>
            <p className="styled_text text-[8rem] text-center">
              Launching <br /> Soon!
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full h-screen flex justify-center items-center scroll-snap-align-start relative">

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5">
            <h2 className="text-gray-400 text-2xl text-center">ABOUT</h2>

            <p className="text-white text-4xl text-justify leading-10 tracking-wider h-[32vh]">
              Oolkar is an innovative booking platform connecting salon and parlor service providers with users seeking hassle-free appointments. Enjoy the convenience of booking services without any platform charges or fees. Oolkar is made with love by our dedicated team for everyone!
            </p>

            {
              showSubscribePopup ?
                /* From Uiverse.io by vinodjangid07 */
                <div className="input-wrapper">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                      <g data-name="inbox">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        ></rect>
                        <path
                          d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <input type="text" name="text" value={email} onChange={e => setEmail(e.target.value)} className="input" placeholder="info@gmail.com" />
                  <button className="Subscribe-btn" onClick={handleSubscribe}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="10"
                      viewBox="0 0 38 15"
                      className="arrow"
                    >
                      <path
                        d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                      ></path></svg
                    >Subscribe
                  </button>
                </div>

                :
                <button onClick={() => !isSubscribed && setShowSubscribePopup(true)} type="button" className="btn">
                  <strong>{isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE NOW"}</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
            }
            {
              <p className='text-white text-sm'>{messsage}</p>
            }
          </div>

        </section>

        {/* Services Section */}
        <section className="w-full h-screen flex flex-col justify-between items-start text-white scroll-snap-align-start">
          <div className="services w-screen h-[70vh] flex justify-center items-center bg-cover bg-center animate-vibrate">
            <p className="text-[4rem] text-white text-center tracking-widest leading-relaxed font-semibold">
              Styling & Beauty <br /> Services Made <br /> Easy, Just for <br /> You!
            </p>
          </div>

          <footer className="flex justify-evenly items-center w-screen px-4 pb-20">
            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-gray-400 text-xl text-center">CONTACT US</h3>
              <a href="https://wa.me/9671323707" target="_blank" rel="noopener noreferrer" className="text-white text-2xl text-center">+91 9671323707</a>
              <a href="mailto:hello.oolkar@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl text-center">hello.oolkar@gmail.com</a>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-gray-400 text-xl text-center">BETA TESTING LOCATION</h3>
              <p className="text-white text-2xl text-center">&#9679; Gurugram</p>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-gray-400 text-xl text-center">FOLLOW US ON IG & FB</h3>
              <a href="https://www.instagram.com/hello.oolkar?igsh=MXQwaWg2cWkwYXo1eA==" target="_blank" rel="noopener noreferrer" className="text-white text-2xl text-center cursor-pointer">@hello.oolkar</a>
            </div>
          </footer>
        </section>
      </main >
    </>
  );
};

export default App;
