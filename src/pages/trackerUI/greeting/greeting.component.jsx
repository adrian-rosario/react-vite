import { Link } from "react-router-dom";
import pageCopy from "./greeting.pageCopy"; // wip, page text isolated for localization/i18n
import hero from "../../../images/challenge/temp-hero.png";
import landView from "../../../images/challenge/temp-city.jpg";
import "./greeting.component.css";
import { motion, useScroll, useTransform } from "framer-motion";
// useScroll, for scroll events/how far user has scrolled, returns an {} with useful properties
// useTransfrorm, to allow us to transform values to values we can use in animations

export default function ChallengeGreeting() {
  const { scrollY } = useScroll();

  const transformCity = useTransform(scrollY, [0, 200], [1, 0]); // value to transform from events, breakpoints, what to do in breakpoints
  const parralaxCity = useTransform(scrollY, [0, 200], [0, -100]); // move container/image up -100 as we scroll down

  const transformHero = useTransform(scrollY, [0, 200], [1, 0.25]);
  const parralaxHero = useTransform(scrollY, [0, 500], [1, -50]);

  const parralaxText = useTransform(scrollY, [0, 300], [1, 2]);

  return (
    <>
      <header id='challengeWelcome-header'>
        <motion.div
          className='challengeWelcome-wrapper'
          style={{ scale: parralaxText }}
        >
          <h1>{pageCopy.h1}</h1>
          <Link to='/challenge-tracker'>{pageCopy.h1cta}</Link>
        </motion.div>

        <motion.img
          style={{ opacity: transformCity, y: parralaxCity }}
          src={landView}
          alt=''
          id='land-view'
        />
        <motion.img
          style={{ opacity: transformHero, y: parralaxHero }}
          src={hero}
          alt=''
          id='hero-view'
        />
      </header>
      <main>
        <section>
          <h2>{pageCopy.headingOne}</h2>
          <p>{pageCopy.headingOneP}</p>
        </section>

        <section>
          <h2>{pageCopy.headingTwo}</h2>
          <p>{pageCopy.headingTwoP}</p>
        </section>

        <section>
          <h2>{pageCopy.headingThree}</h2>
          <ul>
            {pageCopy.headingThreeUl.map((item) => {
              return <li key={item.text}>{item.text}</li>;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
