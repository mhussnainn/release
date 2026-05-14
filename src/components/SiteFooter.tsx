import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-linen border-t border-moss/5 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-tight font-semibold">
            Release <span className="text-sage italic">5.0</span>
          </Link>
          <p className="mt-4 text-sm text-moss/60 leading-relaxed">
            A sanctuary for therapeutic massage, energy work, and mindset coaching in Lone Tree, Colorado.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-serif italic mb-5">Visit the Studio</h4>
          <address className="not-italic text-moss/60 space-y-1 text-sm leading-relaxed">
            <p>9896 Rosemont Ave STE 103</p>
            <p>Lone Tree, CO 80124</p>
            <p className="mt-3">
              <a href="tel:+17192404883" className="text-moss font-medium hover:text-sage transition-colors">
                +1 719-240-4883
              </a>
            </p>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-serif italic mb-5">Studio Hours</h4>
          <ul className="text-moss/60 space-y-1 text-sm">
            <li>Mon – Fri · 9am – 7pm</li>
            <li>Saturday · 10am – 4pm</li>
            <li>Sunday · Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-serif italic mb-5">Explore</h4>
          <ul className="text-moss/60 space-y-1 text-sm uppercase tracking-wider">
            <li><Link to="/services" className="hover:text-moss transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-moss transition-colors">About</Link></li>
            <li><Link to="/reviews" className="hover:text-moss transition-colors">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-moss transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-moss/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-moss/40 gap-4">
        <p>© {new Date().getFullYear()} Release Massage Therapy</p>
        <p>Lone Tree · Colorado</p>
      </div>
    </footer>
  );
}
