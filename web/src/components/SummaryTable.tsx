import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";
import { HabitDayEmpty } from "./HabitDayEmpty";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const summaryDates = generateDatesFromYearBeginning();
const minSummaryDatesSize = 18 * 7; //18 weeks
const amountOfDaystoFill = minSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <HabitDay
              key={date.toString()}
              amount={5}
              completed={Math.round(Math.random() * 5)}
            />
          );
        })}

        {amountOfDaystoFill > 0 &&
          Array.from({ length: amountOfDaystoFill }).map((_, i) => {
            return <HabitDayEmpty key={i} />;
          })}
      </div>
    </div>
  );
}
