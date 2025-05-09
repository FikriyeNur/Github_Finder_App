const defaultProps = {
  title: "Github Finder",
  icon: "bi bi-github",
};

const Navbar = ({ title = defaultProps.title, icon = defaultProps.icon }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className={icon}></i> {title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
