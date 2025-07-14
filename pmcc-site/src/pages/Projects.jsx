import ProjectCard from '../components/ProjectCard';

const images = Array.from({ length: 6 }).map((_, i) => `https://source.unsplash.com/collection/190727/400x300?sig=${i}`);

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-4">
      {images.map((img, idx) => (
        <ProjectCard key={idx} img={img} />
      ))}
    </div>
  );
}
