import { motion, useScroll, useTransform } from "framer-motion";
import "./alien.component.css";
import pageCopy from "./alien.component.pageCopy"; // wip/todo, page text isolated for localization/i18n
import clouds from "../../images/alien/IMG_5058-sky.png";
import xenomorph from "../../images/alien/alien-with-fade-out.png";
import ship from "../../images/alien/ship-and-clouds.png";
import frontXeno from "../../images/alien/IMG_5153-front-alien-masked.png";

export default function AlienPage() {
  const { scrollY } = useScroll();

  const transformShip = useTransform(scrollY, [0, 500], [1, 0]); // value to transform from events, breakpoints, what to do in breakpoints
  const parralaxClouds = useTransform(scrollY, [0, 200], [0, -100]); // move container/image up -100 as we scroll down

  const parralaxAlien = useTransform(scrollY, [0, 150, 250], [0, 10, 20]);

  const parralaxShip = useTransform(scrollY, [0, 500], [1, -570]);
  const blurAlien = useTransform(scrollY, [0, 250], [`blur(0)`, `blur(5px)`]);
  const blurShip = useTransform(scrollY, [0, 500], [`blur(0)`, `blur(10px)`]);

  // const parralaxText = useTransform(scrollY, [0, 300], [1, 2]);
  // const transformPicture = useTransform(scrollY, [0, 380], [50, 150]);

  const theYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className='greeting'>
          <h1>{pageCopy.h1}</h1>
        </div>
        <motion.img
          src={ship}
          className='theShip'
          style={{
            opacity: transformShip,
            y: parralaxShip,
            filter: blurShip,
          }}
        />
        <motion.img
          src={xenomorph}
          className='theAlien'
          style={{ y: parralaxAlien }}
        />
        <motion.img
          src={clouds}
          className='theClouds'
          style={{
            y: parralaxClouds,
            filter: blurAlien,
          }}
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

        <section>
          <motion.div className='extraNote' id='box'>
            <motion.img src={frontXeno} className='frontXeno' />
          </motion.div>
        </section>
      </main>
      <footer>
        &copy;{theYear} {pageCopy.rightsReserved}
      </footer>
    </>
  );
}
