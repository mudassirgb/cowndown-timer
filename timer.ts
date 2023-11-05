


import chalk from "chalk";
import inquirer from "inquirer";
import { sleep } from "./title.js";

export default async function countDown_Timer_Function(): Promise<void> {
  do {
    console.log(chalk.bgMagenta("\n\t# Set Countdown Timer #\n"));
    const setTimer = await inquirer.prompt([
      {
        type: "input",
        name: "hours",
        message: "Hours: ",
        default: "00",
        validate(hours: any): string | boolean {
          if (isNaN(hours) || hours.trim().length === 0 || hours.length !== 2) {
            return chalk.redBright("Please, Enter Hours(00 - 23)!");
          } else if (hours > 23 || hours < 0) {
            return chalk.redBright("Please, Enter valid Hours(00 - 23)!");
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "minutes",
        message: "Minutes: ",
        default: "00",
        validate(minutes: any): string | boolean {
          if (
            isNaN(minutes) ||
            minutes.trim().length === 0 ||
            minutes.length !== 2
          ) {
            return chalk.redBright("Please, Enter Minutes(00 - 59)!");
          } else if (minutes > 59 || minutes < 0) {
            return chalk.redBright("Please, Enter valid Minutes(00 - 59)!");
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "seconds",
        message: "Seconds: ",
        default: "00",
        validate(seconds: any): string | boolean {
          if (
            isNaN(seconds) ||
            seconds.trim().length === 0 ||
            seconds.length !== 2
          ) {
            return chalk.redBright("Please, Enter Seconds(00 - 23)!");
          } else if (seconds > 59 || seconds < 0) {
            return chalk.redBright("Please, Enter valid Seconds(00 - 23)!");
          } else {
            return true;
          }
        },
      },
    ]);

    let targetTime: Date = new Date(
      `1970-01-01T${setTimer.hours}:${setTimer.minutes}:${setTimer.seconds}.000Z`
    );

    console.log("\n");

    let targetTime_Into_Seconds: number = targetTime.getTime() / 1000;

    while (targetTime_Into_Seconds >= 0) {
      process.stdout.moveCursor(0, -1);
      process.stdout.clearLine(1);
      const printTime: string = new Date(targetTime_Into_Seconds * 1000)
        .toISOString()
        .slice(11, 19);
      console.log(chalk.yellowBright(printTime));
      --targetTime_Into_Seconds;
      await sleep(1000);
    }

    console.log(chalk.bold.red(`Time Up!!!\n`));

    var closeCountdownTimer = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to restart CountDown Timer?",
        choices: ["Yes", "No"],
      },
    ]);
    console.log("\n");
  } while (closeCountdownTimer.restart === "Yes");
}