import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
//import useSmoothScroll from '../hooks/useSmoothScroll';
//import LocomotiveScroll from 'locomotive-scroll';
//import 'locomotive-scroll/dist/locomotive-scroll.css';

const useStyles = createUseStyles({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 0',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    height: '100vh',
  },
  portrait: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  experience: {
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    height: '100vh',
  },
  skills: {
    padding: '50px 20px',
    backgroundColor: '#e0e0e0',
    height: '100vh',
  },
});

export default function Home() {
    //useSmoothScroll();
  const classes = useStyles();

  return (
    <ParallaxProvider>
    <div id="main-container">
      <section className={classes.hero}>
        <Parallax y={[10, 0]}>
          <motion.img
            src="/images/galaxy.jpg"
            alt="My Portrait"
            className={classes.portrait}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </Parallax>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to My Journey
        </motion.h1>
      </section>

      <section className={classes.experience}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Experience</h2>
          <p>I have worked on numerous web development projects...</p>
        </motion.div>
      </section>

      <section className={classes.skills}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills</h2>
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>React & Next.js</li>
            <li>Node.js</li>
            <li>Database Management</li>
          </ul>
        </motion.div>
      </section>
    </div>
    </ParallaxProvider>
  );
}
