import Card from '../components/Card';
import { researchCardData } from '../helpers/data';

export default function ResearchSection() {
  return (
    <section className="p-8 flex justify-center">
      <Card {...researchCardData} />
    </section>
  );
}