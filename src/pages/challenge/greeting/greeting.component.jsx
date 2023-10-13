import { Link } from "react-router-dom";
import pageCopy from "./greeting.pageCopy"; // wip, page text isolated for i18n
import hero from "../../../images/challenge/temp-hero.png";
import landView from "../../../images/challenge/temp-city.jpg";
import "./greeting.component.css";

export default function ChallengeGreeting() {
  return (
    <>
      <header id='challengeWelcome-header'>
        <div className='challengeWelcome-wrapper'>
          <h1>{pageCopy.h1}</h1>
          <Link to='/challenge-tracker'>{pageCopy.h1cta}</Link>
        </div>

        <img src={landView} alt='' id='land-view' />
        <img src={hero} alt='' id='hero-view' />
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
