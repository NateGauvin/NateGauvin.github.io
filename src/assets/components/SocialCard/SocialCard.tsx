import "./SocialCard.css"
import type {FC, JSX} from "react"

interface SocialCardProps {
    socialTitle: string
    socialLogo: string
    socialLink: string
    buttonText: string
}

export const SocialCard: FC<SocialCardProps> = (social:SocialCardProps):JSX.Element => {

    const handleSocialClick = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        window.open(social.socialLink, "_blank");
    }

    return (
        <>
            <div className={"social-card"}>
                <div>
                    <img className={"social-logo"} src={social.socialLogo} alt={social.socialTitle}/>
                </div>
                <button className={"social-link"} onClick={handleSocialClick}>{social.buttonText}</button>
            </div>
        </>
    )
}