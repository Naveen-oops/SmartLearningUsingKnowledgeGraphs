import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
  <div>
      <h1 className={headerStyles.title}>
          <span>webDev</span> News
      </h1>
      <p> Keep up to date with latest news</p>
  </div>
  );
};

export default Header;
