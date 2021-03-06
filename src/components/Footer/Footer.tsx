import Card from '../../ui/Card/Card';
import styles from './Footer.module.css';

const Footer = () => {
  const facebookSrc = process.env.PUBLIC_URL + '/assets/face-icon.svg';
  const instagramSrc = process.env.PUBLIC_URL + '/assets/insta-icon.svg';
  const twitterSrc = process.env.PUBLIC_URL + '/assets/twitter-icon.svg';
  const twSrc = process.env.PUBLIC_URL + '/assets/tw-logo.svg';
  const logoTW = false;

  function renderLogo(){
    if(logoTW) {
      return (
        <div className={styles['content']}>
          <h3 className={styles['content__title']}>Apoio:</h3>
          <div className={styles['content__images']}>
            <a href="http://www.thoughtworks.com">
              <img src={twSrc} alt="Thoughtworks Logo" />
            </a>
          </div>
        </div>
      );
    }
    return null;
  }

  function renderHR(){
    if(logoTW) 
      return <hr />;
  }

  return (
    <footer>
      <Card>
        <div className={styles.container}>
          <div className={styles['content']}>
            <h3 className={styles['content__title']}>Nossas redes:</h3>
            <div className={styles['content__images']}>
              <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                <img src={facebookSrc} alt="Facebook Logo" />
              </a>
              <a href="https://twitter.com/racismometro" target="_blank" rel="noreferrer">
                <img src={twitterSrc} alt="Twitter Logo" />
              </a>
              <a href="https://www.instagram.com/racismometro" target="_blank" rel="noreferrer">
                <img src={instagramSrc} alt="Instagram Logo" />
              </a>
            </div>
          </div>

          { renderHR() }
          
          { renderLogo() }
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
