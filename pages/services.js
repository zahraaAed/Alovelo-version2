// pages/services.js
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import ServiceItem from "../component/ServicesItem";  // Import the reusable component

export default function Services() {
  const [servicesData, setServicesData] = useState(null);
  const API_URL = "https://alovelo-backend.onrender.com/api";

  useEffect(() => {
    fetch(`${API_URL}/services/get`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          console.error("No services data found");
          return;
        }

        // Example: pick the newest service entry
        const latestService = data.reduce((prev, current) =>
          new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
        );

        setServicesData(latestService);
      })
      .catch((err) => console.error("Error fetching services content:", err));
  }, []);

  if (!servicesData) return <p>Loading...</p>;

  // Destructure for convenience
  const { heroImage, heroTitle, description, servicesList = [] } = servicesData;

  return (
    <div>
      {/* Top "hero" image */}
      <Image
        src={
          heroImage ? `https://alovelo-backend.onrender.com${heroImage}` : "/assets/services-image.png"
        }
        alt="Services Hero"
        width={100}
        height={100}
        className={styles.heroImage}
        unoptimized
      />

      <div className={styles.servicesContainer}>
        {/* Hero Section: large text paragraph */}
        <section className={styles.hero}>
          <p className={styles.heroText}>{description || `Signature Cocktails, Dance-Floor Surprises...`}</p>
        </section>

        {/* Services Snippet */}
        <div className={styles.servicesSnippet}>
          <p className={styles.servicesHeading}>Our Services</p>

          {/* Reusing ServiceItem Component 4 Times with Text Inside */}
          <ServiceItem
            service={servicesList[0] || {}}
            imagePosition="left"
            defaultIcon="/assets/image 24.png"
          />
          <ServiceItem
            service={servicesList[1] || {}}
            imagePosition="right"
            defaultIcon="/assets/Isolation_Mode.png"
          />
          <ServiceItem
            service={servicesList[2] || {}}
            imagePosition="left"
            defaultIcon="/assets/image 26.png"
          />
          <ServiceItem
            service={servicesList[3] || {}}
            imagePosition="right"
            defaultIcon="/assets/ballons.png"
          />
        </div>
      </div>
    </div>
  );
}
