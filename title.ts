import chalkAnimation from "chalk-animation";

export function sleep(timeInSeconds: number): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInSeconds);
  });
}

export default async function title(): Promise<void> {
  const maintitle =
    chalkAnimation.rainbow(`\n    +-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+
    |C|o|u|n|t|d|o|w|n| |T|i|m|e|r|
    +-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+ \n`);
  await sleep(3000);
  maintitle.stop();
}