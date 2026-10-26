import { scrollToTop } from '../utils/smoothScroll'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <span>© {year} Salman Anik. Built with React.</span>
        <button onClick={scrollToTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer