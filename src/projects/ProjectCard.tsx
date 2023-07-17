import { Project } from "./Project"

interface IProps {
  project: Project;
}

const formatDescription = (description: string): string => (
  `${description.substring(0, 60)}...`
);

const ProjectCard: React.FC<IProps> = ({ project }) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log(projectBeingEdited);
  };
  
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>

        <button
          className="bordered"
          onClick={() => handleEditClick(project)}
        >
          <span className="icon-edit"></span> Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
