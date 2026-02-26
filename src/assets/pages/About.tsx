import UniversalHeader from "../components/UniversalHeader/UniversalHeader.tsx";
import {JobCard} from "../components/JobCard/JobCard.tsx"
import jobs from "../data/job-data.json"
import {SkillCard} from "../components/SkillCard/SkillCard.tsx"
import skills from "../data/skill-data.json"
import {CertCard} from "../components/CertCard/CertCard.tsx"
import certs from  "../data/cert-data.json"

/* #FFBF39 for all but last job, #242424 for last job */

function About() {
    return(
        <>
            <UniversalHeader/>
            <main>
                <h1 className={"page-header"}>About Me:</h1>
                <p className={"page-description"}>
                    If there's one thing I can't help but do, it's apply myself and work as hard as I can. Here, you'll find
                    my full professional history, as well as all the skills I've learned along the way.
                </p>
                <hr/>
                <div className={"job-container"}>
                    {jobs.jobList.map((job: {
                        title: string
                        employer: string
                        description: string
                        date: string
                        skills: string
                        timelineColor: string
                    }) => (
                        <JobCard jobTitle={job.title}
                                 jobEmployer={job.employer}
                                 jobDescription={job.description}
                                 jobDate={job.date}
                                 relevantSkills={job.skills}
                                 timelineColor={job.timelineColor}/>
                        )
                    )}
                </div>
                <hr/>
                <h1 className={"page-header"}>Skills:</h1>
                <p className={"page-description"}>
                    What follows is a comprehensive list of all the "hard" skills I have obtained over the years.
                    If it's listed here, I am proficient in it, and confident in my ability to apply it successfully.
                </p>
                <hr/>
                <div className={"card-container"}>
                    {skills.skillList.map((skill: {
                        logo: string
                        name: string
                    }) => (
                        <SkillCard skillTitle={skill.name}
                                   skillLogo={skill.logo}/>
                        )
                    )}
                </div>
                <hr/>
                <h1 className={"page-header"}>Certifications:</h1>
                <p className={"page-description"}>
                    Here are the certifications I've obtained. These focus on skills and services outside of the scope
                    of my original education. Namely, AWS.
                </p>
                <hr/>
                <div className={"card-container"}>
                    {certs.certList.map((cert: {
                        name: string
                    }) => (
                        <CertCard certName={cert.name}/>
                    )
                    )}
                </div>
            </main>
        </>
    )
}

export default About