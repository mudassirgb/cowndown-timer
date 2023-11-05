import title from "./title.js";
import { thankYou } from "./endgraphic.js";
import countDown_Timer_Function from "./timer.js";

async function countdown_Timer(): Promise<void> {
  console.clear();
  await title();
  await countDown_Timer_Function();
  console.log(thankYou);
}

countdown_Timer();