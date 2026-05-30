import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "hover:text-sage transition-colors";
  const activeCls = { className: `${linkCls} text-sage` };

  return (
    <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-moss/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-tight font-semibold">
          Release <span className="text-sage italic">5.0</span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-medium">
          <Link to="/services" className={linkCls} activeProps={activeCls}>Services</Link>
          <Link to="/about" className={linkCls} activeProps={activeCls}>About</Link>
          <Link to="/reviews" className={linkCls} activeProps={activeCls}>Reviews</Link>
          <Link to="/contact" className={linkCls} activeProps={activeCls}>Visit</Link>
        </div>
        <Link
          to="/book"
          className="hidden sm:inline-block px-6 lg:px-8 py-3 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all"
        >
          Book Session
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-moss"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-moss mb-1.5" />
          <span className="block w-6 h-px bg-moss mb-1.5" />
          <span className="block w-4 h-px bg-moss ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-moss/5 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest">
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Visit</Link>
          <Link to="/book" onClick={() => setOpen(false)} className="text-sage">Book Session</Link>

        </div>
      )}
    </nav>
  );
}
