import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
  <div>
      <h1 className={headerStyles.title}>
          <span>Edu</span>Graph
      </h1>
      <p className={headerStyles.description}>Smart way of learning!</p>
  </div>
  );
};

export default Header;

