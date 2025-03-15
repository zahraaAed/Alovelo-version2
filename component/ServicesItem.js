// components/ServiceItem.js
import Image from "next/image";
import styles from "../styles/Services.module.css";

export default function ServiceItem({ service, imagePosition, defaultIcon }) {
  return (
    <div className={styles.serviceRow}>
      {/* If the image is on the left side */}
      {imagePosition === "left" && (
        <div className={styles.serviceLeft}>
          <Image
            src={service.icon ? `https://alovelo-backend.onrender.com${service.icon}` : defaultIcon}
            alt={`${service.title} Icon`}
            className={styles.serviceIcon}
            width={200}
            height={200}
            unoptimized
          />
        </div>
      )}

      {/* Service text block (always in the center) */}
      <div className={styles.serviceText}>
        <h3>{service.title || "Default Service Title"}</h3>
        <p>
          {service.description || "Default service description goes here..."}
        </p>
      </div>

      {/* If the image is on the right side */}
      {imagePosition === "right" && (
        <div className={styles.serviceLeft}>
          <Image
            src={service.icon ? `https://alovelo-backend.onrender.com${service.icon}` : defaultIcon}
            alt={`${service.title} Icon`}
            className={styles.serviceIcon}
            width={200}
            height={200}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
