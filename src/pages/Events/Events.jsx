import { motion } from "framer-motion";
import "./Events.css";
function Events() {
  return (
    <div>
      <div className="hero_section">
        <div className="title">Our Events</div>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 50, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="main_island"
        >
          <motion.img
            src="/images/Events_Page/main_island.png"
            alt="main island"
            animate={{ translateY: ["-3%", "3%", "-3%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="background">
          <div className="clouds">
            <motion.img
              src="/images/Events_Page/cloud_01.png"
              alt="clouds"
              animate={{ translateX: ["-50%", "90%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/images/Events_Page/cloud_02.png"
              alt="clouds"
              animate={{ translateX: ["50%", "-90%", "50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="trees">
            <img src="/images/Events_Page/tree_01.png" alt="trees" />
            <img src="/images/Events_Page/tree_02.png" alt="trees" />
          </div>
        </div>
      </div>
      <div className="events_calender">
        <motion.img
          src="/images/Events_Page/events_calender.png"
          alt="events_calender"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="calender_content"
          src="/images/Events_Page/upcoming_events.png"
          alt="events_calender"
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="calender_content_title">Events Calender</div>
          <div className="calender_content_desc">
            Navigate through past and upcoming events with ease using the Events
            Calendar. Stay informed about all our exciting activities, from
            workshops and networking events to project showcases and more.
            Explore event dates, descriptions, and highlights, and make sure to
            mark your calendar so you don't miss out on any of the opportunities
            we have planned!
          </div>
        </motion.div>
      </div>
      <div className="upcoming_events">
        <motion.div
          className="upcoming_events_title"
          initial={{ translateY: -100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/Events_Page/upcoming_events.png" />
          Upcoming Events
        </motion.div>
        <motion.div
          className="upcoming_events_content"
          initial={{ translateX: 1000, rotateZ: 80 }}
          whileInView={{ translateX: 0, rotateZ: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/Events_Page/phone.png" alt="phone" />
          <div className="phone_content">
            <img src="/images/Events_Page/demo_event.jpg" className="event" />
            <div className="event_desc">
              <div className="event_name">Code-A-Thon</div>
              <div className="event_fee">Registration Fee: 100$</div>
              <div className="event_date">Date: 14/06/2024</div>
              <div className="event_venue">Venue: Auditorium</div>
              <button className="register_btn">Register Now</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Events;
