import { Fragment, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => (
      p.id === project.id ? project : p
    ));
    setProjects(updatedProjects);
  };
  
  return (
    <>
      <h1>Projects</h1>
      <ProjectList
        onSave={saveProject}
        projects={projects}
      />
    </>
  );
}

export default ProjectsPage;
