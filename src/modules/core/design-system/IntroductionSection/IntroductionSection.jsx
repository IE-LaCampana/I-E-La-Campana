import React from "react";
import "./IntroductionSection.css";


const IntroductionSection = ({title, description, image}) => {
  return (
    <section className="intruduction-section__container">
      <div className="introduction-section__content">
        <div className="introduction-section__text-content">
          <h1 className="introduction-section__title">{title}</h1>
          <div className="introduction-section__description">
            <p className="introduction-section__paragraph">{description}</p>
          </div>
        </div>
        <div className="introduction-section__image-wrapper">
          <img src={image} alt="" className="introduction-section__image" />
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection





// const IntroductionSection = () => {
//   return (
//     <section className="introduction-section">
//       <div className="introduction-section__container">
//         <div className="introduction-section__content">
//           <div className="introduction-section__text-content">
//             <h2 className="introduction-section__title">
//               En el colegio comemos como en casa
//             </h2>
//             <div className="introduction-section__description">
//               <p className="introduction-section__paragraph">
//                 Cada día elaboramos nuestro menú en la cocina propia del colegio
//                 con frutas y hortalizas de la tierra, pescado fresco del día y
//                 el resto de ingredientes de primera calidad.
//               </p>
//               <p className="introduction-section__paragraph">
//                 Nos aseguramos de que todos los alumnos y alumnas gocen de una
//                 dieta sana, equilibrada y casera.
//               </p>
//               <p className="introduction-section__paragraph">
//                 Cocinamos cada día con la colaboración del equipo médico del
//                 colegio.
//               </p>
//             </div>
//           </div>
//           <div className="introduction-section__image-wrapper">
//             <img
//               src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//               alt="Niños comiendo en el comedor escolar"
//               className="introduction-section__image"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroductionSection;
