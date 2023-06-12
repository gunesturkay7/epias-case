/* Styles */
import "./Layout.scss";

const Layout = ({ header, footer, ...props }) => {
  return (
    <div className={`layout`}>
      {header && <header className="layout-header">{header}</header>}

      <div className="layout-main">
        <main {...props}>{props.children}</main>
      </div>

      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
};

export default Layout;
