import UniversalHeader from "../components/UniversalHeader/UniversalHeader.tsx"
import {SocialCard} from "../components/SocialCard/SocialCard.tsx"
import "../../App.css"
import type {JSX} from "react"

function Home():JSX.Element {
    return(
        <>
            <UniversalHeader/>
            <main>
                <div>
                    <h1 className={"page-header"}>
                        Nathaniel Gauvin:<br/>
                        Software Engineer, Bioinformatician, Learner
                    </h1>
                    <hr/>
                    <p className={"page-description"}>
                        I am a dedicated software developer with extensive experience in full-stack, desktop,
                        machine learning, and AI applications. I have thorough knowledge of deployment into various
                        environments, such as web, cloud, and research. My work involves many different languages and
                        frameworks, and I'm always learning something new.
                        <br/>
                        <br/>
                        I'm always open to new opportunities, whether it be work or collaboration!
                        <br/>
                        Feel free to reach out if you're interested.
                        <hr/>
                        <div className={"card-container"}>
                            <SocialCard socialTitle={"LinkedIn"}
                                        socialLogo={"/linkedin_logo.png"}
                                        socialLink={"https://www.linkedin.com/in/nathaniel-gauvin/"}
                                        buttonText={"Connect with me!"}/>

                            <SocialCard socialTitle={"Handshake"}
                                        socialLogo={"/handshake_logo.jpg"}
                                        socialLink={"https://app.joinhandshake.com/profiles/nathaniel-gauvin"}
                                        buttonText={"Check me out!"}/>
                        </div>
                    </p>
                </div>
            </main>
        </>
    )
}

export default Home