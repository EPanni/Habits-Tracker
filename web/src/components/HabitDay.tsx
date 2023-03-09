import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

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
            "bg-violet-500": completedPercentage > 80,
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
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
