import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import ProjectCardSkeleton from './ProjectCardSkeleton';

interface ProjectListProps {
  projects: Project[];
  loading: boolean;
}

interface ProjectListState {
  editingProject: Project | {};
}

class ProjectList extends React.Component<ProjectListProps, ProjectListState> {
  state = {
    editingProject: {},
  };
  handleEdit = (editingProject: Project) => {
    this.setState({ editingProject: editingProject });
  };

  cancelEditing = () => {
    this.setState({ editingProject: {} });
  };

  render() {
    const { projects, loading } = this.props;

    let item: JSX.Element;
    const items = projects.map((project: Project) => {
      if (project !== this.state.editingProject) {
        item = (
          <div key={project.id} className="cols-sm">
            {loading && <ProjectCardSkeleton />}
            {!loading && (
              <ProjectCard
                project={project}
                onEdit={() => {
                  this.handleEdit(project);
                }}
              ></ProjectCard>
            )}
          </div>
        );
      } else {
        item = (
          <div key={project.id} className="cols-sm">
            <ProjectForm project={project} onCancel={this.cancelEditing} />
          </div>
        );
      }
      return item;
    });

    return <div className="row">{items}</div>;
  }
}

export default ProjectList;
