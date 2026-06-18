import Image from 'next/image'
import Link from 'next/link'
import { footerGroups, siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image
                src="https://myonlinejet.com/images/MyOnlineJet_White_Logo.png"
                alt={siteConfig.name}
                width={180}
                height={56}
                className="h-10 w-auto sm:h-12"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 sm:text-sm sm:mb-6">
              Building India&apos;s urban air mobility infrastructure for a sustainable transportation future.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/company/myonlinejet/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C50000] transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin-in text-xs sm:text-sm" />
              </a>
              <a
                href="https://www.facebook.com/myonlinejet/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C50000] transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-facebook-f text-xs sm:text-sm" />
              </a>
              <a
                href="https://twitter.com/myonlinejet"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C50000] transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-twitter text-xs sm:text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@myonlinejet"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C50000] transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-xs sm:text-sm" />
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="footer-heading text-xs sm:text-sm">{group.title}</h2>
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}-${link.href}`}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer-link text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="footer-link text-xs sm:text-sm">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5 mb-4 sm:pt-8 sm:mb-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] sm:gap-x-8 sm:gap-y-3 sm:text-xs md:text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/legal-disclaimer" className="text-gray-400 hover:text-white transition-colors">
              Legal Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-gray-500 sm:gap-4 sm:text-xs md:text-sm border-t border-white/5 pt-6 sm:pt-8">
          <p>(c) 2026 MyOnlineJet | iAlpha Technologies Pvt Ltd | All Rights Reserved</p>
          <p className="text-center">{siteConfig.location} | Developing urban air mobility infrastructure</p>
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-white/5 rounded-xl border-l-4 border-[#C50000]">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-[10px] sm:text-xs text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-1 flex items-center gap-2 sm:mb-2 text-xs sm:text-sm">
                <span className="text-[#C50000]">-</span> Data Protection & Privacy Commitment
              </h3>
              <p className="leading-relaxed">
                MyOnlineJet is committed to protecting your personal data. We comply with applicable data
                protection laws including India&apos;s Digital Personal Data Protection Act (DPDPA) and GDPR
                standards where applicable. Your information is never sold or shared without explicit
                consent.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1 flex items-center gap-2 sm:mb-2 text-xs sm:text-sm">
                <span className="text-[#C50000]">-</span> Legal Disclaimer
              </h3>
              <p className="leading-relaxed">
                MyOnlineJet is an advanced air mobility infrastructure developer. All vertiport and AAM
                projects are subject to regulatory approvals, government clearances, and market conditions.
                Information on this website is for informational purposes only and does not constitute an
                offer or solicitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
