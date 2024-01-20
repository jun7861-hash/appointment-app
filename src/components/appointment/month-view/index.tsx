import { dateToTime } from "@/helper/dateToTime";
import { Event } from "../events";
import "./index.scss";

type MonthEventProps = {
  title: string;
  event: Event;
};

const MonthEvent = (props: MonthEventProps) => {
  const { title, event } = props;
  const { start, end, type } = event;
  const theme =
    type === "consultation" ? "violet" : type === "vaccination" ? "orange" : "";

  return (
    <div className={`month-event theme-${theme}`}>
      <span className="title">{title}</span>
      <span className="time">
        {dateToTime(start)} - {dateToTime(end)}
      </span>
    </div>
  );
};

export default MonthEvent;
