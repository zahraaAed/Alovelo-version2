// components/Footer.js
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Row */}
      <div className={styles.footerTop}>
        {/* Column 1: Logo */}
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Image
              src="/white-logo-edit.png"
              alt="Alovelo Logo"
              width={200}
              height={80}
              className={styles.logoImage}
              unoptimized
            />
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.footerColumn}>
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Action */}
        <div className={styles.footerColumn}>
          <h4>Quick Action</h4>
          <ul>
            <li>Booking</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Platform */}
        <div className={styles.footerColumn}>
          <h4>Platform</h4>
          <ul>
            <li>
              <Image
                src="/🦆 icon _Instagram_.png"
                alt="Instagram"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/🦆 icon _Facebook Square_.png"
                alt="Facebook"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/🦆 icon _What's App_.png"
                alt="WhatsApp"
                width={25}
                height={25}
                unoptimized
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Middle Row: Icons (Location, Phone, Email) */}
      <div className={styles.footerIcons}>
        <div title="Location">
          <Image
            src="/image 21.png"
            alt="Location Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Phone">
          <Image
            src="/image 20.png"
            alt="Phone Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Email">
          <Image
            src="/image19.png"
            alt="Email Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.footerBottom}>Copyright &copy; All Rights Reserved</div>
    </footer>
  );
}
