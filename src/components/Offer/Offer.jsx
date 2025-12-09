import "./Offer.css";

export default function Offer() {
  return (
    <div class="wrapper">
      <main>
        <div className="hero">
          <div className="hero-text">
            <h1>Maximize skill, minimize budget</h1>
            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button>Get Started</button>
          </div>
          <div className="hero-img">
            <img src="./images/image-hero-mobile.png" alt="main pic" />
          </div>
        </div>
        <section className="content-section">
          <div className="head-cont">
            <h2>Check out our most popular courses!</h2>
          </div>
          <div className="content">
            <div className="content-img">
              <img src="./images/icon-animation.svg" alt="icon-animation" />
            </div>
            <h3>Animation</h3>
            <p>
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <span>Get Started</span>
          </div>
          <div className="content design">
            <div className="content-img">
              <img src="./images/icon-design.svg" alt="icon-design" />
            </div>
            <h3>Design</h3>
            <p>
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
            <span>Get Started</span>
          </div>
          <div className="content">
            <div className="content-img">
              <img src="./images/icon-photography.svg" alt="icon-photography" />
            </div>
            <h3>Photography</h3>
            <p>
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <span>Get Started</span>
          </div>
          <div className="content">
            <div className="content-img">
              <img src="./images/icon-crypto.svg" alt="icon-crypto" />
            </div>
            <h3>Crypto</h3>
            <p>
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <span>Get Started</span>
          </div>
          <div className="content">
            <div className="content-img">
              <img src="./images/icon-business.svg" alt="icon-business" />
            </div>
            <h3>Business</h3>
            <p>
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>
            <span>Get Started</span>
          </div>
        </section>
      </main>
    </div>
  );
}
