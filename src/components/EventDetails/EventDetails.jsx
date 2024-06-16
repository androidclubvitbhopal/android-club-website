import React from "react";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import EventsData from "./EventsData";
import "./EventDetails.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const event = EventsData.find((e) => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event_details">
      <div className="gap"></div>
      <div className="event_details_container">
        <div className="main">
          <div className="poster">
            <img src={event.posterUrl} alt={event.name} />
          </div>
          <div className="content">
            <div className="title">{event.name}</div>
            <div className="description">{event.description}</div>
            <div className="other_details">
              <div className="text">
                <div className="venue">Venue: {event.venue}</div>
                <div className="date">Date: {format(parseISO(event.startDatetime), "MMMM dd, yyyy")}</div>
                <div className="time">
                  Time: {format(parseISO(event.startDatetime), "h:mm a")}
                </div>
              </div>
              <img src="/Events_Page/complete.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
