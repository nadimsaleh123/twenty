export default function ServiceCard({ title }) {
  return (
    <div className="border-t-4 border-transparent hover:border-pmccRed p-4 shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}
