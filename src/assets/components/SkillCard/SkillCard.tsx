import "./SkillCard.css"
import type {FC, JSX} from "react"

interface SkillCardProps {
    skillTitle: string
    skillLogo: string
}

export const SkillCard: FC<SkillCardProps> = (skill:SkillCardProps):JSX.Element => {
    return (
        <>
            <div className={"skill-card"}>
                <img className={"skill-logo"} src={skill.skillLogo} alt={skill.skillTitle}/>
                <p className={"skill-text"}>{skill.skillTitle}</p>
            </div>
        </>
    )
}