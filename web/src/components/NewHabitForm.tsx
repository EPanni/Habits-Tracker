import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

const availableWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function NewHabitForm() {
  return (
    <form className=" w-full  flex flex-col mt-6">
      <label htmlFor="title" className="font=semibold leading-tight ">
        {" "}
        What is your commitment?{" "}
      </label>
      <input
        type="text"
        placeholder="eg.: Exercise, sleep well, etc ..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="" className="font=semibold leading-tight mt-4 ">
        What is the recurrence?
      </label>

      <div className="flex flex-col mt3 gap-2">
        {availableWeekDays.map((weekDay) => {
          return (
            <Checkbox.Root
              key={weekDay}
              className="flex items-center gap-3 group "
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white" />
                </Checkbox.CheckboxIndicator>
              </div>

              <span className="text-white leading-tight">{weekDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400"
      >
        <Check size={20} weight="bold" />
        Confirm
      </button>
    </form>
  );
}
