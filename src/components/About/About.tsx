import "./About.css";
const About = () => {
  return (
    <div className="bcard bg">
      <header className="head">
        <h1>About</h1>
      </header>
      <section className="about">
        <h2 id="description">Description</h2>
        <p>
          This is a web app that translates emojies to thier meaning. Built
          using ReactJS.
        </p>
        <h2 id="live-link">Github Link</h2>
        <p>
          <a href="https://github.com/SJTGSHIVAM/know-your-emotion-mark-eight">
            https://github.com/SJTGSHIVAM/know-your-emotion-mark-eight
          </a>
        </p>
        <h2 id="salient-features-are">Salient features are</h2>
        <ul>
          <li>Built using ReactJS.</li>
          <li>Have more than 10 emojis.(json data from 3rd party is used)</li>
          <li>Display name of emoji on click</li>
          <li>Display name of emoji on search</li>
          <li>Display a message emoji not available if npt found</li>
        </ul>
      </section>
    </div>
  );
};
export default About;
