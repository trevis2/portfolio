import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Tech Innovations Srl",
      text: "Simone ha trasformato la nostra idea in una piattaforma web eccezionale. La sua competenza tecnica e la capacità di problem-solving sono impressionanti."
    },
    {
      name: "Laura Bianchi",
      company: "E-commerce Solutions",
      text: "Lavorare con Simone è stato un piacere. Ha consegnato il progetto in tempo e la qualità del suo lavoro ha superato le nostre aspettative."
    },
    {
      name: "Giovanni Verdi",
      company: "StartUp Innovativa",
      text: "L'approccio di Simone allo sviluppo full-stack ci ha permesso di lanciare il nostro MVP in tempi record. Altamente raccomandato!"
    }
  ];

  return (
    <section className="app__testimonials">
      <h2>Cosa Dicono i Clienti</h2>
      <div className="app__testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="app__testimonial-item">
            <p className="app__testimonial-text">"{testimonial.text}"</p>
            <div className="app__testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;