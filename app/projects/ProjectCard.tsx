import { Project } from "@/types/Project";
import Image from "next/image";

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + '...';
};

interface ProjectCardProps {
  project: Project
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card border-2 border-gray-200 rounded-2xl in-ho">
      <Image src={project.imageUrl} alt={project.name} height={500} width={500} className=" rounded-t-2xl"/>
      <section className="section bg-gray-400 text-black p-5 rounded-b-2xl">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
};

export default ProjectCard;