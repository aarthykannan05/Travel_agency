import React from "react";


function Packages() {
  const data = [
    {
      title: "Beach Paradise",
      desc: "Relax on golden sands and swim in crystal-clear waters.",
      img: "https://picsum.photos/id/1018/400/250"
    },
    {
      title: "Mountain Adventure",
      desc: "Hike, climb, and explore breathtaking mountain ranges.",
      img: "https://picsum.photos/id/1015/400/250"
    },
    {
      title: "City Explorer",
      desc: "Discover culture, food, and nightlife in vibrant cities.",
      img: "https://picsum.photos/id/1011/400/250"
    }
  ];

  return (
    <section id="packages" className="packages">
      <h2>Our Packages</h2>
      <div className="package-grid">
        {data.map((item, index) => (
          <div key={index} className="package-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
