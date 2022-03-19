import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Footer from './Footer';

const Layouts = ({children}) => {
  return (
  <>
  <Nav/>
  <div className={styles.container}>
      <main className={styles.main}>
          <Header/>
       {children}
      </main>
  </div>
  <Footer/>
  </>
  );
};

export default Layouts;
