import { Suspense } from 'solid-js';
import AboutData from './about.data';

export default function About() {
  const answer = AboutData();

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>

      <p>
        <span>Uhh...</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{answer()}</span>
        </Suspense>
      </p>
    </section>
  );
}
