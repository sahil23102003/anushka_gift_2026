import React, { useEffect, useRef } from "react";
import "./timeline.css";

const events = [
  {
    id: 1,
    type: "picture",
    title: "August - December 2022",
    text: "Before anything else, we talked About life, family, fears that's where everything started for me",
    date: "Jan 14",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
    iconAlt: "Picture",
    image: "/images/start.jpg",
    imageAlt: "Us together, August - December 2022",
  },
  {
    id: 2,
    type: "picture",
    title: "December 2022 - When i liked you",
    text: "I liked you, you said no it hurt but I respected you",
    date: "Jan 24",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
    iconAlt: "Picture",
  },
  {
    id: 3,
    type: "location",
    title: "16 December - You said Yes!",
    text: "You said yes softly And everything felt lighter",
    date: "Feb 14",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg",
    iconAlt: "Location",
    image: "/images/yes.jpg",
  },
  {
    id: 4,
    type: "location",
    title: "24 December",
    text: "Our first date simple happy",
    date: "Feb 14",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg",
    iconAlt: "Location",
    image: "/images/date.jpg",
  },
  {
    id: 5,
    type: "location",
    title: "The Real Us",
    text: "We fight we misunderstand but we come back and choose each other",
    date: "Feb 18",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg",
    iconAlt: "Location",
  },
  {
    id: 6,
    type: "location",
    title: "Today...",
    text: "I still choose you not because it's easy but because you matter to me",
    date: "Feb 18",
    icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg",
    iconAlt: "Location",
    image: "/images/today.jpg",
  },
];

const Timeline = () => {
  const blockRefs = useRef([]);

  useEffect(() => {
    const blocks = blockRefs.current.filter(Boolean);
    if (!blocks.length) return;

    // Hide all blocks initially
    blocks.forEach((block) => {
      const elements = block.querySelectorAll(
        ".cd-timeline-img, .cd-timeline-content"
      );
      elements.forEach((el) => el.classList.add("is-hidden"));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const block = entry.target;
          const elements = block.querySelectorAll(
            ".cd-timeline-img, .cd-timeline-content"
          );

          elements.forEach((el) => {
            el.classList.remove("is-hidden");
            el.classList.add("bounce-in");
          });

          observer.unobserve(block);
        });
      },
      {
        threshold: 0.2, // reveal when 20% of block is visible
      }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <header className="timeline-header">
        <h1>Our Story</h1>
      </header>

      <section id="cd-timeline" className="cd-container">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="cd-timeline-block"
            ref={(el) => (blockRefs.current[index] = el)}
          >
            <div className={`cd-timeline-img cd-${event.type}`}>
              <img src={event.icon} alt={event.iconAlt} />
            </div>

            <div className="cd-timeline-content">
              <h2>{event.title}</h2>
              <p>{event.text}</p>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.imageAlt || event.title}
                  className="cd-content-image"
                />
              )}
              {/* {event.id !== 6 && (
                <a href="#0" className="cd-read-more">
                  Read more
                </a>
              )} */}
              <span className="cd-date">{event.date}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Timeline;
