"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Features", href: "/#features" },
    { label: "About", href: "/#about" },
    { label: "Screenshots", href: "/screenshots" },
    { label: "Services", href: "/services" },
    { label: "Donate", href: "/donate" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Contact", href: "mailto:qalbymuslim1@gmail.com" },
  ];

  const socials = [
    { label: "Facebook", icon: "f", href: "https://www.facebook.com/share/17txgaBVw7/?mibextid=wwXIfr" },
    { label: "Instagram", icon: "📷", href: "https://www.instagram.com/qalby_muslim/" },
    { label: "TikTok", icon: "🎵", href: "https://www.tiktok.com/@qalbymuslim0?_r=1&_t=ZT-93UacYQA3pN" },
    { label: "X", icon: "𝕏", href: "https://x.com/qalbymuslim" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald/5 via-white/2 to-white/10 border-t border-emerald/10 mt-12 md:mt-20">
      <div className="container-max py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-xl md:text-2xl text-emerald font-bold">
                <span className="text-gold drop-shadow-md">Qalby</span>Muslim
              </span>
            </Link>
            <p className="text-emerald/70 text-sm leading-relaxed">
              Your Complete Islamic Companion. Accurate prayer times, daily Quranic inspiration, and spiritual guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-emerald mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald/70 hover:text-emerald transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-sm font-bold text-emerald mb-4 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2">
              {links.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald/70 hover:text-emerald transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-emerald mb-4 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald/70 hover:text-emerald transition-colors text-sm group"
                >
                  <span className="inline-block w-5 h-5 flex items-center justify-center rounded-full border border-emerald/30 group-hover:border-emerald group-hover:bg-emerald/10 transition-all">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-emerald/60">
          <p>
            © {currentYear} QalbyMuslim. All rights reserved.
          </p>
          <p className="text-center">
            Barakallahu feek - May Allah bless you. ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
