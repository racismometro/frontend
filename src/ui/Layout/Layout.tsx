import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import classes from './Layout.module.css'

const Layout: React.FC = (props) => {
  return (
    <div className={classes.container}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
