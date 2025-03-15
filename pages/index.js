import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

   useEffect(() => {
    fetch("https://alovelo-backend.onrender.com/api/home/homecontent")
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data[0]); // Assuming only one document exists
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!homeData) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Alovelo Home</title>
      </Head>

      {/* Hero Section <button  class="boutton">{homeData.ctabtnhomeHeader}</button>*/}
      <section className="hero-section">
        <img src={`https://alovelo-backend.onrender.com${homeData.imageHome}`} alt="Hero Image" class="hero-image"/>
        <h1 className="hero-text">{homeData.subtitlehomeHeader}</h1>
        <p className="hero-content">{homeData.contenthomeHeader}</p>
        <Link href="/about" legacyBehavior><button  class="boutton">Learn More</button></Link>
      </section>

      {/* Events Section */}
      <section class="events-section" id="events">
        
        {/*<h2>{homeData.titleSection}</h2> <img src={`https://alovelo-backend.onrender.com${homeData.imageSection}`} alt="Event" class="event-image"  />*/}
        <img src={`https://alovelo-backend.onrender.com${homeData.imageSection}`} alt="Event" class="event-image"  />
        <p class="events-text">{homeData.contentSection}</p>
      </section>

      {/* Promotional Section */}
      <section >
        <h2 class="titlePromotional">{homeData.titlePromotionalSection}</h2>
        <Link href="/contact" legacyBehavior><button class="boutton">{homeData.ctabtnPromotionalSection}</button></Link>
      </section>

      {/* Gallery */}
      <section >
        <div class="imageGallery">
          {homeData.galleryImages.map((img, index) => (
            <img key={index} src={`https://alovelo-backend.onrender.com${img}`} alt={`Gallery ${index}`} width="300px" />
          ))}
        </div>
      </section>
    </div>
  );
}
