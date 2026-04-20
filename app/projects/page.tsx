import { MOCK_PROJECTS } from '../../public/mock-data/MockProject';
import ProjectList from './ProjectList';

function Projects() {
 return (
  <div className='m-auto ml-5 mr-5 '>
    <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>Projects</h1>
    <ProjectList projects={MOCK_PROJECTS}/>
  </div>
 );
}

export default Projects;