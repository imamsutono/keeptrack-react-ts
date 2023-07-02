import { Project } from './Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => (
  <div className="row">
    {projects.map(({ budget, description, id, imageUrl, name }) => (
      <div key={id} className="cols-sm">
        <div className="card">
          <img src={imageUrl} alt={name} />
          <section className="section dark">
            <h5 className="strong">
              <strong>{name}</strong>
            </h5>
            <p>{description}</p>
            <p>Budget: {budget.toLocaleString()}</p>
          </section>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectList;
