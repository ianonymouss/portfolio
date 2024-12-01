import styles from './HeroStyles.module.css';
import sshImg from '../../assets/ssh.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg'; // Added Instagram light icon
import instagramDark from '../../assets/instagram-dark.svg'; 
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={sshImg}
          className={styles.hero}
          alt="Profile picture of Shri Harrsha"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Shri 
          <br />
          Harrsha
        </h1>
        <h2>Software Engineer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/shriharrsha" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shri-harrsha-samala-41628718a/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href='https://www.instagram.com/harsha_its_mee/' target='_blank'>
            <img src={instagramIcon} alt='Insta icon' />
          </a>
        </span>
        <p className={styles.description}>
        Determined, quick learner with interpersonal skills and proven ability to manage the positive and
        productive client relationship. 
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
