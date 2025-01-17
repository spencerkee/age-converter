import { createSignal } from 'solid-js';
import AgeCounter from "../components/ageCounter";

function roundToFirstDecimal(number) {
  return Math.round(number * 10) / 10;
}

function convertDogToHuman(dogAge) {
  if (dogAge === 0) return 0;
  if (dogAge > 0) {
    return roundToFirstDecimal(16 * Math.log(dogAge) + 31);
  }
  return roundToFirstDecimal(16 * Math.log(dogAge * -1) + 31) * -1;
}

function convertHumanToDog(humanAge) {
  if (humanAge === 0) return 0;
  if (humanAge > 0) {
    return roundToFirstDecimal(Math.E ** ((humanAge - 31) / 16));
  }
  return roundToFirstDecimal(Math.E ** (((humanAge * -1) - 31) / 16)) * -1;
}

function convertHumanToSandwich(humanAge) {
  if (humanAge === 0) return 0;
  if (humanAge > 0) {
    return roundToFirstDecimal(-92.543 + (27.026 * Math.log(humanAge)));
  }
  return roundToFirstDecimal(-92.543 + (27.026 * Math.log(humanAge * -1))) * -1;
}

function convertSandwichToHuman(sandwichAge) {
  if (sandwichAge === 0) return 0;
  if (sandwichAge) {
    roundToFirstDecimal(Math.E ** (((1000 * sandwichAge) + 92543) / 27026));
  }
  return roundToFirstDecimal(Math.E ** (((1000 * (sandwichAge * -1)) + 92543) / 27026)) * -1;
}

export default function Home() {
  const [humanAge, setHumanAge] = createSignal(0);

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Convert between human, dog, and sandwich (pb&j) ages (badly)</h1>
      <AgeCounter name="Human (👨👩)" unitName="years" age={humanAge} setAge={setHumanAge}
        ageConverter={a => a}
        ageReverter={a => a} />
      <AgeCounter name="Dog (🐶)" unitName="years" age={humanAge} setAge={setHumanAge}
        ageConverter={a => convertHumanToDog(a)}
        ageReverter={a => convertDogToHuman(a)} />
      <AgeCounter name="Sandwich (🥜🍇)" unitName="days" age={humanAge} setAge={setHumanAge}
        ageConverter={a => convertHumanToSandwich(a)}
        ageReverter={a => convertSandwichToHuman(a)} />

    </section>
  );
}
