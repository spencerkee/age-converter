import { createEffect, createSignal } from 'solid-js';
import AgeCounter from "../components/ageCounter";

function convertDogYearsToHumanYears(dogAge) {
  if (dogAge === 0) return 0;
  let humanAge = 16 * Math.log(dogAge) + 31;
  // Round to the first decimal place.
  return Math.round(humanAge * 10) / 10;
}

function convertHumanYearsToSandwichDays(humanAge) {
  if (humanAge === 0) return 0;
  let sandwichDays = -92.543 + (27.026 * Math.log(humanAge))
  return Math.round(sandwichDays * 10) / 10;
}

export default function Home() {
  const [humanAge, setHumanAge] = createSignal(0);
  const [dogAge, setDogAge] = createSignal(0);
  // Sandwiches age in days, not years.
  const [sandwichAge, setSandwichAge] = createSignal(0);

  // Convert dog years to human years
  createEffect(() => {
    setHumanAge(convertDogYearsToHumanYears(dogAge()));
  });

  createEffect(() => {
    setSandwichAge(convertHumanYearsToSandwichDays(humanAge()));
  });

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Convert between human, dog, and sandwich (pb&j) ages</h1>
      <AgeCounter name="Human" unitName="years" age={humanAge()} setAge={setHumanAge} />
      <AgeCounter name="Dog" unitName="years" age={dogAge()} setAge={setDogAge} />
      <AgeCounter name="Sandwich" unitName="days" age={sandwichAge()} setAge={setSandwichAge} />

    </section>
  );
}
