import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfMonth,
} from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventsData from "../EventDetails/EventsData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const navigate = useNavigate();

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function previousEventMonth() {
    let previousMonthDate = add(firstDayCurrentMonth, { months: -1 });
    while (!hasEvents(previousMonthDate)) {
      previousMonthDate = add(previousMonthDate, { months: -1 });
      const year = startOfMonth(previousMonthDate).getFullYear();
      if (year < 2019) {
        break;
      }
    }
    setCurrentMonth(format(previousMonthDate, "MMM-yyyy"));
  }

  function nextEventMonth() {
    let nextMonthDate = add(firstDayCurrentMonth, { months: 1 });
    while (!hasEvents(nextMonthDate)) {
      nextMonthDate = add(nextMonthDate, { months: 1 });
      const year = startOfMonth(nextMonthDate).getFullYear();
      if (year > new Date().getFullYear()) {
        break;
      }
    }
    setCurrentMonth(format(nextMonthDate, "MMM-yyyy"));
  }

  function hasEvents(date) {
    const monthEvents = EventsData.filter((event) =>
      isSameMonth(parseISO(event.startDatetime), date)
    );
    return monthEvents.length > 0;
  }

  let currentMonthEvents = EventsData.filter((event) =>
    isSameMonth(parseISO(event.startDatetime), firstDayCurrentMonth)
  );

  return (
    <div className="pt-16">
      <div className="w-full px-4 mx-auto sm:px-7 md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="bg-[#254336]">
            <div className="pl-4 pr-4 flex items-center bg-[#254336]">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <div className="w-full p-2">
                <h2 className="text-2xl font-extrabold text-white">
                  {format(firstDayCurrentMonth, "yyyy")}
                </h2>
                <h2 className="text-4xl font-extrabold text-white">
                  {format(firstDayCurrentMonth, "MMMM")}
                </h2>
              </div>

              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="pl-4 pr-4 grid grid-cols-7 text-sm font-bold leading-6 bg-[#96BE96] text-center text-white">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="pl-4 pr-4 grid grid-cols-7 grid-rows-6 text-lg font-bold bg-white">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      getDay(day) === 0 && "text-red-500",
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {EventsData.some((event) =>
                      isSameDay(parseISO(event.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-0 flex flex-col justify-between bg-[#96BE96]">
            <h2 className="font-semibold p-4 text-white">
              Events in {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>
            <ol className="pl-4 pr-4 space-y-1 leading-6 text-2xl font-bold text-white">
              {currentMonthEvents.length > 0 ? (
                currentMonthEvents.map((event) => (
                  <Events event={event} key={event.id} navigate={navigate} />
                ))
              ) : (
                <p>No events in this month.</p>
              )}
            </ol>
            <div className="calendar_nav w-full text-white font-bold">
              <button
                onClick={previousEventMonth}
                className="float-left bg-[#254336] p-2 w-16"
              >
                Prev
              </button>
              <button
                onClick={nextEventMonth}
                className="float-right bg-[#254336] p-2 w-16"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Events({ event, navigate }) {
  let startDateTime = parseISO(event.startDatetime);
  let endDateTime = parseISO(event.endDatetime);

  const handleEventClick = () => {
    const eventIdNumber = parseInt(event.id.replace("event", ""), 10);
    if (eventIdNumber >= 1 && eventIdNumber <= 5) {
      navigate(`/events/${event.id}`);
    }
  };

  return (
    <li
      className="flex items-center px-4 py-2 space-x-4 group rounded-xl cursor-pointer hover:bg-gray-100 hover:text-[#367010]"
      onClick={handleEventClick}
    >
      <div className="flex-auto">
        <p className="mt-0.5 text-sm text-center">
          <time dateTime={event.startDatetime}>
            {format(startDateTime, "MMMM yyyy, dd")} {"( "}{" "}
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          {" - "}
          <time dateTime={event.endDatetime}>{format(endDateTime, "h:mm a")}</time>{" "}
          {")"}
        </p>
        <p className="mt-1">{event.name}</p>
      </div>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
