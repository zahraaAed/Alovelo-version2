// pages/about.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("https://alovelo-backend.onrender.com/api/about/get") // Fetch data from backend
      .then((res) => res.json())
      .then((data) => {
        // Assuming only one document exists
        setAboutData(data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Alovelo - About Us</title>
      </Head>
      <div className={styles.topImageContainer}>
        
  <Image
    src={
      aboutData.hero_image
        ? `https://alovelo-backend.onrender.com${aboutData.hero_image}`
        : "/placeholder.png"
    }
    width={100}
    height={200}
    alt="About Hero"
       // arbitrary numeric height
    className={styles.heroImage}
    unoptimized
  />
</div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.textBlock}>
          <h1>
            {aboutData.hero_title }
          </h1>
          <p>
            {aboutData.hero_content }
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <h2>Vision & Mission</h2>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMission}>
        <div className={styles.textSection}>
          <div className={styles.visionBlock}>
            <h2>Vision</h2>
            <h3>
              {aboutData.subtitleHeader ||
                `We dream of a world where celebrations are never ordinary.`}
            </h3>
            <p>
              {aboutData.vision_content ||
                `We’re all about exceptional cocktails, unforgettable experiences, and a whole lot of fun!`}
            </p>
          </div>

          <div className={styles.missionBlock}>
            <h2>Mission</h2>
            <h3>
              {aboutData.subtitleHeader ||
                `We’re all about exceptional cocktails, unforgettable experiences, and a whole lot of fun!`}
            </h3>
            <p>
              {aboutData.mission_content ||
                `At Alovelo, our one-of-a-kind tricycle bar...`}
            </p>
          </div>
        </div>

        <div className={styles.imageSection}>
          <Image
            src={
              aboutData.main_image
                ? `https://alovelo-backend.onrender.com${aboutData.main_image}`
                : "/assets/mission-vision.png"
            }
            alt="Vision & Mission"
            width={800}
            height={500}
            className={styles.missionImage}
            unoptimized
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>What Makes Us Different</h2>
        <div className={styles.featuresList}>
          {/* Map your features from aboutData, or fallback to placeholders */}
          {aboutData.features?.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <Image
                src={
                  feature.icon
                    ? `https://alovelo-backend.onrender.com${feature.icon}`
                    : "/assets/Layer_24.png"
                }
                alt={feature.title}
                width={200}
                height={200}
                unoptimized
              />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
