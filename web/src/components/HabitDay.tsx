import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import { clsx } from "clsx";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercentage = Math.round((100 * completed) / amount);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg",
          {
            "bg-zinc-900 border-zinc-700": completedPercentage === 0,
            "bg-violet-400 border-violet-200":
              completedPercentage >= 20 && completedPercentage < 40,
            "bg-violet-500 border-violet-300":
              completedPercentage >= 40 && completedPercentage < 60,
            "bg-violet-600 border-violet-500":
              completedPercentage >= 60 && completedPercentage < 80,
            "bg-violet-800 border-violet-700": completedPercentage >= 80,
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full p-6 rounded-2 xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400"> monday</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {" "}
            17/01/2023
          </span>
          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group ">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white" />
                </Checkbox.CheckboxIndicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Drink Water
              </span>
            </Checkbox.Root>

            <Checkbox.Root className="flex items-center gap-3 group ">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white" />
                </Checkbox.CheckboxIndicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Drink Water
              </span>
            </Checkbox.Root>

            <Checkbox.Root className="flex items-center gap-3 group ">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white" />
                </Checkbox.CheckboxIndicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Drink Water
              </span>
            </Checkbox.Root>
          </div>
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
