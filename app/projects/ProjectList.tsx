import { Project } from '../../types/Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;