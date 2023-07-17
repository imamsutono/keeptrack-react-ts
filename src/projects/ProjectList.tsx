import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects, onSave
}) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEdit = () => {
    setProjectBeingEdited({});
  };
  
  return (
    <div className="row">
      {projects.map(project => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              onSave={onSave}
              onCancel={cancelEdit}
            />
          ) : (
            <ProjectCard
              project={project}
              onEdit={handleEdit}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
