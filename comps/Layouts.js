import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar title="Title" />
      {children}
    </div>
  );
};

export default Layout;
