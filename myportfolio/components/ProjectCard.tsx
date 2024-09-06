import Image from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={`/images/${imageUrl}`} alt={title} width={400} height={200} className="w-full object-cover h-48" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard