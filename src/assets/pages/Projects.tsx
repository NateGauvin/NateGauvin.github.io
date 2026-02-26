import UniversalHeader from "../components/UniversalHeader/UniversalHeader.tsx";
import {ProjectCard} from "../components/ProjectCard/ProjectCard.tsx";
import projects from "../data/project-data.json"
import "../../App.css"

function Projects() {
    return(
        <>
            <UniversalHeader/>
            <main>
                <div>
                    <h1 className={"page-header"}>Projects:</h1>
                    <p className={"page-description"}>
                        These are some of the projects I've worked on throughout my software development career.
                        I like to focus on projects that expand and deepen my skills. There are many
                        different languages, frameworks, deployment methods, and end-uses here. Please view the
                        repositories and see for yourself! Many of these are full-stack or desktop applications with
                        functional releases.
                    </p>
                    <hr/>
                    <div className={"card-container"}>
                        {projects.projectList.map((project: {
                                title: string;
                                description: string;
                                linkText: string;
                                link: string;
                            }) => (
                                <ProjectCard projectTitle={project.title}
                                             projectDescription={project.description}
                                             repoLink={project.link}
                                             buttonText={project.linkText}/>
                            )
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects