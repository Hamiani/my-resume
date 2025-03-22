import  { useEffect, useRef, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFooter = () => {
      if (footerRef.current) {
        footerRef.current.dataset.year = new Date().getFullYear().toString();
        footerRef.current.dataset.lastUpdated = new Date().toISOString();
      }
    };

    updateFooter();
  }, []);

  return (
    <div className="cv-container">
      {children}
      <footer className="cv-footer" ref={footerRef}>
        <p>© {new Date().getFullYear()} Mohammed HAMIANI AKBI</p>
      </footer>
    </div>
  );
}

export default Layout;