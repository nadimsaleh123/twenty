import ServiceCard from '../components/ServiceCard';

const services = [
  'General Contracting',
  'Design-Build',
  'Project Management',
  'Renovation'
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-4 gap-4">
      {services.map(s => (
        <ServiceCard key={s} title={s} />
      ))}
    </div>
  );
}
