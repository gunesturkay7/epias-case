/* Styles */
import "./Layout.scss";

const Layout = ({ header, footer, sidebar, sidebarPosition = "sidebar-left", ...props }) => {
  return (
    <div className={`layout ${sidebarPosition}`}>
      {header && <header className="layout-header">{header}</header>}

      <div className="layout-main">
        {sidebar && <aside className="layout-sidebar">{sidebar}</aside>}
        <main {...props}>{props.children}</main>
      </div>

      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
};

export default Layout;
