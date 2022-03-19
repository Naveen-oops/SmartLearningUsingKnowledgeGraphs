import React from 'react'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className= {footerStyles.footer}>
        <footer>
            <div className="text-center p-4">
                © 2022 Copyright
            </div>
        </footer>
    </div>
  )
}

export default Footer