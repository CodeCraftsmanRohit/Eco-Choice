import React from 'react'
import { Link } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'react-feather'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  const links = [
    { title: 'Shop', items: [
      { name: 'All Products', to: '/green-products' },
      { name: 'Featured', to: '/featured' },
      { name: 'New Arrivals', to: '/new' },
      { name: 'On Sale', to: '/sale' }
    ]},
    { title: 'Company', items: [
      { name: 'About Us', to: '/about' },
      { name: 'Sustainability', to: '/sustainability' },
      { name: 'Careers', to: '/careers' },
      { name: 'Press', to: '/press' }
    ]},
    { title: 'Support', items: [
      { name: 'Contact Us', to: '/contact' },
      { name: 'FAQs', to: '/faqs' },
      { name: 'Shipping', to: '/shipping' },
      { name: 'Returns', to: '/returns' }
    ]},
    { title: 'Legal', items: [
      { name: 'Privacy Policy', to: '/privacy' },
      { name: 'Terms of Service', to: '/terms' },
      { name: 'Cookie Policy', to: '/cookies' }
    ]}
  ]

  return (
    <footer className={`bg-gray-900 text-gray-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="hover:text-green-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 mt-1 mr-3 text-green-400" size={18} />
                <p>123 Eco Street, Greenville, Earth</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-green-400" size={18} />
                <a href="mailto:hello@ecomart.com" className="hover:text-green-400">
                  hello@ecomart.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-green-400" size={18} />
                <a href="tel:+1234567890" className="hover:text-green-400">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white mr-2">Eco</span>
              <span className="text-2xl font-bold text-green-400">Mart</span>
              <span className="ml-4 text-sm">
                &copy; {new Date().getFullYear()} EcoMart. All rights reserved.
              </span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer