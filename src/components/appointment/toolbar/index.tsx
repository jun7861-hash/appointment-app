import { useSnapshot } from "valtio";

import { store } from "@/store";
import { showCreateForm } from "@/store/actions";
import "./index.scss";

const Toolbar = ({
  date,
  onNavigate,
  onView,
}: {
  label: string;
  onNavigate: (navigateAction: "TODAY" | "PREV" | "NEXT") => void;
  onView: (view: "month" | "day") => void;
  date: Date;
}) => {
  const { form } = useSnapshot(store);
  const month = date.toLocaleString("en-PH", { month: "long" });

  const dateNow = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateToday = new Date(date);

    return `Today is ${dateToday.toLocaleDateString("en-PH", options)}`;
  };

  const handleNewAppointment = () => {
    showCreateForm();
  };

  return (
    <div className="toolbar">
      <div className="toolbar-block">
        <div className="left">
          <h1>Appointments</h1>
          <div className="navigation">
            <h2>{month}</h2>
            <div className="button-block">
              <button onClick={() => onNavigate("PREV")}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.2584 5.59173C12.1813 5.51447 12.0897 5.45318 11.9889 5.41137C11.8881 5.36955 11.78 5.34802 11.6709 5.34802C11.5617 5.34802 11.4536 5.36955 11.3528 5.41137C11.252 5.45318 11.1604 5.51447 11.0834 5.59173L7.25835 9.41673C7.1811 9.49382 7.11981 9.58539 7.07799 9.68621C7.03617 9.78702 7.01465 9.89509 7.01465 10.0042C7.01465 10.1134 7.03617 10.2214 7.07799 10.3222C7.11981 10.4231 7.1811 10.5146 7.25835 10.5917L11.0834 14.4167C11.1605 14.4939 11.2521 14.5551 11.3529 14.5968C11.4537 14.6386 11.5617 14.6601 11.6709 14.6601C11.78 14.6601 11.888 14.6386 11.9888 14.5968C12.0896 14.5551 12.1812 14.4939 12.2584 14.4167C12.3355 14.3396 12.3967 14.248 12.4385 14.1472C12.4802 14.0464 12.5017 13.9383 12.5017 13.8292C12.5017 13.7201 12.4802 13.6121 12.4385 13.5113C12.3967 13.4105 12.3355 13.3189 12.2584 13.2417L9.02502 10.0001L12.2584 6.76673C12.5834 6.44173 12.575 5.90839 12.2584 5.59173Z" />
                </svg>
              </button>
              <button onClick={() => onNavigate("NEXT")}>
                <svg
                  className="svg-fill"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.25801 14.4164C7.3351 14.4936 7.42667 14.5549 7.52748 14.5968C7.6283 14.6386 7.73636 14.6601 7.84551 14.6601C7.95465 14.6601 8.06271 14.6386 8.16353 14.5968C8.26434 14.5549 8.35591 14.4936 8.43301 14.4164L12.258 10.5914C12.3353 10.5143 12.3965 10.4227 12.4384 10.3219C12.4802 10.2211 12.5017 10.113 12.5017 10.0039C12.5017 9.89475 12.4802 9.78668 12.4384 9.68587C12.3965 9.58506 12.3353 9.49349 12.258 9.41639L8.43301 5.59139C8.35585 5.51424 8.26426 5.45304 8.16346 5.41129C8.06266 5.36953 7.95461 5.34804 7.84551 5.34804C7.7364 5.34804 7.62836 5.36953 7.52755 5.41128C7.42675 5.45304 7.33516 5.51424 7.25801 5.59139C7.18085 5.66854 7.11965 5.76013 7.0779 5.86094C7.03615 5.96174 7.01466 6.06978 7.01466 6.17889C7.01466 6.288 7.03615 6.39604 7.0779 6.49684C7.11965 6.59765 7.18085 6.68924 7.25801 6.76639L10.4913 10.0081L7.25801 13.2414C6.93301 13.5664 6.94134 14.0997 7.25801 14.4164Z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="today">{dateNow()}</p>
        </div>
        <div className="right">
          <div className="view">
            <button onClick={() => onView("month")}>Month</button>
            <button onClick={() => onView("day")}>Day</button>
          </div>
          <button
            className={`new ${form.showForm.create && "active"}`}
            onClick={handleNewAppointment}
          >
            New Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
