import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import "./NewsEventDetail.css";

import {events, news} from "../../../../../data/newsEventsData"

const NewsEventDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        
        const itemsSource = type === "news" ? news : events;
        const foundItem = itemsSource.find(item => item.id === parseInt(id));

        if (foundItem) {
            setItem(foundItem);
        } else {
            navigate("/news-events")
        }
    }, [type, id, navigate]);

    if (!item) {
        return <div className="loading">cargando...</div>;
    }


  return (
    <div className="detail-container">
      <div className="breadcrumbs">
        <nav>
          <ul>
            <li>
              <Link to="/" className="inicio">
                Inicio
              </Link>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li>
              <Link to={`/news-events?tab=${type}`}>
                {type === "news" ? "Noticias" : "Eventos"}
              </Link>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li>{item.title}</li>
          </ul>
        </nav>
      </div>
      <div className="detail-content">
        <div className="detail-image">
          <div className="detail-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        <div className="detail-metadata-container">
          <h2>{item.title}</h2>
          <div className="detail-metadata">
            <span className="detail-date">
              <i className="bi bi-clock me-2"></i>
              {item.date}
            </span>
          </div>
          <div className="detail-description">
            <p>{item.description}</p>
            {item.fullContent && (
              <div className="full-content">{item.fullContent}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsEventDetail;