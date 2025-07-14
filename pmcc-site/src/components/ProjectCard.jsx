export default function ProjectCard({ img }) {
  return (
    <div className="shadow">
      <img src={img} alt="project" className="w-full h-40 object-cover" />
    </div>
  );
}
