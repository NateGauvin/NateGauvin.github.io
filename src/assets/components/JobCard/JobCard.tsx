import "./JobCard.css"
import type {FC, JSX} from "react"

interface JobCardProps {
    jobTitle: string
    jobEmployer: string
    jobDescription: string
    jobDate: string
    relevantSkills: string
    timelineColor: string
}

export const JobCard: FC<JobCardProps> = (job:JobCardProps):JSX.Element => {

    const timelineStyle = {
        borderLeft: "2px solid " + job.timelineColor
    }

    return (
        <>
            <div style={{display: "flex", paddingBottom: "7px"}}>
                <div className={"job-date-container"}>
                    <p className={"job-date"}>{job.jobDate}</p>
                    <div className={"timeline"} style={timelineStyle}/>
                </div>
                <div className={"job-card"}>
                    <p className={"job-employer"}>{job.jobEmployer}</p>
                    <p className={"job-title"}>{job.jobTitle}</p>
                    <p className={"job-description"}>{job.jobDescription}</p>
                    <p className={"job-description"}>Skills: {job.relevantSkills}</p>
                </div>
            </div>

        </>
    )
}