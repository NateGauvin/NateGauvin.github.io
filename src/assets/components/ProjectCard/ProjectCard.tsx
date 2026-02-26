import "./ProjectCard.css"
import type {FC, JSX} from "react";

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    repoLink: string;
    buttonText: string;
}

 export const ProjectCard: FC<ProjectCardProps> = (project):JSX.Element => {

    const handleRepoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(project.repoLink, "_blank");
    }

    return (
        <>
            <div className={"project-card"}>
                <h1 className={"project-title"}>{project.projectTitle}</h1>
                <p className={"project-description"}>{project.projectDescription}</p>
                <button className={"repo-link"} onClick={handleRepoClick}>{project.buttonText}</button>
            </div>
        </>
    )
}