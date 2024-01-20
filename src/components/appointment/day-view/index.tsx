import { EventWrapperProps } from "react-big-calendar";

import {
  selectedEvent,
  hideEventDropdown,
  selectToUpdateEvent,
  removeEvent,
  toggleEventDropdown,
} from "@/store/actions";
import { dateToTime } from "@/helper/dateToTime";
import { getTimeDifference } from "@/helper/getTimeDifference";
import { Event } from "../events";
import "./index.scss";

export const DayEvent = () => {
  return <div className="example_here">example</div>;
};

export const DayEventWrapper = (props: EventWrapperProps) => {
  const style = props.style;
  const eventProp = props.event as Event;
  const minutes = 60;
  const theme =
    eventProp.type === "consultation"
      ? "violet"
      : eventProp.type === "vaccination"
      ? "orange"
      : "";
  const timeDifference = getTimeDifference(
    eventProp.start as Date,
    eventProp.end as Date
  );

  const eventHeight = ((timeDifference as number) / minutes) * 100;

  const handleUpdateEvent = () => {
    hideEventDropdown(eventProp.uid);
    selectToUpdateEvent(eventProp);
  };

  const handleRemoveEvent = () => {
    hideEventDropdown(eventProp.uid);
    removeEvent(eventProp.uid);
  };

  return (
    <div
      className={`day-event theme-${theme}`}
      style={{
        ...style,
        top: `${style?.top}%`,
        height: `${eventHeight}px`,
        width: `${style?.width}%`,
        position: "absolute",
      }}
    >
      <div className="block" onClick={() => selectedEvent(eventProp)}>
        <div className="event-icon">
          <div className={`circle theme-${theme}`}>
            <i>
              {eventProp.type === "consultation" && (
                <svg
                  className={`svg-stroke theme-${theme}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_1588)">
                    <path
                      d="M5.07866 9.35735C5.02686 9.02354 4.99999 8.68157 4.99999 8.33335C4.99999 4.65146 8.00439 1.66669 11.7105 1.66669C15.4166 1.66669 18.421 4.65146 18.421 8.33335C18.421 9.16508 18.2677 9.96123 17.9877 10.6954C17.9295 10.8479 17.9004 10.9242 17.8872 10.9837C17.8741 11.0427 17.8691 11.0842 17.8676 11.1446C17.8662 11.2055 17.8745 11.2727 17.891 11.407L18.2265 14.1321C18.2628 14.4271 18.281 14.5746 18.2319 14.6819C18.1889 14.7758 18.1125 14.8505 18.0176 14.8913C17.9093 14.9379 17.7622 14.9163 17.4681 14.8732L14.8137 14.4841C14.6751 14.4638 14.6058 14.4536 14.5427 14.454C14.4803 14.4543 14.4371 14.459 14.376 14.4718C14.3142 14.4848 14.2353 14.5143 14.0775 14.5735C13.3414 14.8492 12.5437 15 11.7105 15C11.362 15 11.0197 14.9736 10.6856 14.9227M6.35967 18.3334C8.83042 18.3334 10.8334 16.2813 10.8334 13.75C10.8334 11.2187 8.83042 9.16669 6.35967 9.16669C3.88892 9.16669 1.88599 11.2187 1.88599 13.75C1.88599 14.2588 1.96692 14.7483 2.11631 15.2056C2.17946 15.3989 2.21104 15.4956 2.2214 15.5616C2.23222 15.6306 2.23412 15.6693 2.23009 15.739C2.22623 15.8057 2.20953 15.8811 2.17614 16.0319L1.66669 18.3334L4.16236 17.9925C4.29857 17.9739 4.36668 17.9646 4.42616 17.965C4.48879 17.9654 4.52203 17.9688 4.58344 17.9811C4.64177 17.9927 4.72849 18.0233 4.90191 18.0845C5.35885 18.2458 5.84928 18.3334 6.35967 18.3334Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1588">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {eventProp.type === "vaccination" && (
                <svg
                  className={`svg-fill theme-${theme}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.94872 17.2308L7.24161 17.9379L7.94874 18.645L8.65584 17.9378L7.94872 17.2308ZM2.64539 11.9274L1.93826 11.2203L1.23119 11.9274L1.93828 12.6345L2.64539 11.9274ZM9.83414 1.79239C9.44361 1.40187 8.81044 1.40189 8.41993 1.79242C8.02941 2.18296 8.02943 2.81612 8.41996 3.20664L9.83414 1.79239ZM16.67 11.4562C17.0605 11.8467 17.6937 11.8467 18.0842 11.4562C18.4747 11.0656 18.4747 10.4325 18.0841 10.042L16.67 11.4562ZM6.88791 11.2203C6.49738 10.8298 5.86422 10.8298 5.4737 11.2203C5.08317 11.6108 5.08317 12.244 5.4737 12.6345L6.88791 11.2203ZM7.24161 14.4025C7.63214 14.793 8.2653 14.793 8.65583 14.4025C9.04635 14.0119 9.04635 13.3788 8.65583 12.9882L7.24161 14.4025ZM1.9387 16.5232C1.54817 16.9138 1.54817 17.5469 1.9387 17.9375C2.32922 18.328 2.96238 18.328 3.35291 17.9375L1.9387 16.5232ZM6.00416 15.2862C6.39468 14.8957 6.39468 14.2625 6.00416 13.872C5.61364 13.4815 4.98047 13.4815 4.58995 13.872L6.00416 15.2862ZM12.5448 5.91709C12.1544 6.30767 12.1545 6.94083 12.545 7.3313C12.9356 7.72177 13.5688 7.72168 13.9593 7.3311L12.5448 5.91709ZM15.4318 5.85819C15.8222 5.46761 15.8221 4.83444 15.4316 4.44397C15.041 4.0535 14.4078 4.05359 14.0173 4.44417L15.4318 5.85819ZM15.1962 8.56867L7.24159 16.5237L8.65584 17.9378L16.6104 9.98285L15.1962 8.56867ZM8.65583 16.5237L3.35249 11.2203L1.93828 12.6345L7.24161 17.9379L8.65583 16.5237ZM3.35251 12.6345L11.3071 4.67952L9.89284 3.26534L1.93826 11.2203L3.35251 12.6345ZM8.41996 3.20664L16.67 11.4562L18.0841 10.042L9.83414 1.79239L8.41996 3.20664ZM5.4737 12.6345L7.24161 14.4025L8.65583 12.9882L6.88791 11.2203L5.4737 12.6345ZM3.35291 17.9375L6.00416 15.2862L4.58995 13.872L1.9387 16.5232L3.35291 17.9375ZM13.9593 7.3311L15.4318 5.85819L14.0173 4.44417L12.5448 5.91709L13.9593 7.3311Z"
                    fill="#FF9447"
                  />
                </svg>
              )}
            </i>
          </div>
        </div>
        <div className="details">
          <p className="title">{eventProp.title}</p>
          <p className="time">
            {dateToTime(eventProp.start)} - {dateToTime(eventProp.end)}
          </p>
          <p className="attendees">
            <span className={`owner theme-${theme}`}>
              <i className="user-icon">
                <svg
                  className={`svg-stroke theme-${theme}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2579_192)">
                    <path
                      d="M3.81084 13.2257C4.21639 12.2702 5.16326 11.6001 6.26664 11.6001H10.2666C11.37 11.6001 12.3169 12.2702 12.7224 13.2257M10.9333 6.6001C10.9333 8.07286 9.7394 9.26676 8.26664 9.26676C6.79388 9.26676 5.59998 8.07286 5.59998 6.6001C5.59998 5.12734 6.79388 3.93343 8.26664 3.93343C9.7394 3.93343 10.9333 5.12734 10.9333 6.6001ZM14.9333 8.26676C14.9333 11.9487 11.9485 14.9334 8.26664 14.9334C4.58474 14.9334 1.59998 11.9487 1.59998 8.26676C1.59998 4.58487 4.58474 1.6001 8.26664 1.6001C11.9485 1.6001 14.9333 4.58487 14.9333 8.26676Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2579_192">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              {eventProp.owner_details.owner_name},
            </span>
            <span className="vet">
              {eventProp.veterinary_details.veterinary_name}
            </span>
          </p>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => toggleEventDropdown(eventProp.uid)}>
          <svg
            className="svg-stroke"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10 9.16665C9.53978 9.16665 9.16669 9.53974 9.16669 9.99998C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10 3.33331C9.53978 3.33331 9.16669 3.70641 9.16669 4.16665C9.16669 4.62688 9.53978 4.99998 10 4.99998Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {eventProp.actions.show && (
          <ul>
            <li onClick={handleUpdateEvent}>Update</li>
            <li onClick={handleRemoveEvent}>Remove</li>
          </ul>
        )}
      </div>
    </div>
  );
};
