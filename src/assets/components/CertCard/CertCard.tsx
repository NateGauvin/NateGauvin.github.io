import "./CertCard.css"
import type {FC, JSX} from "react"

interface CertCardProps {
    certName: string
    certDescription?: string
}

export const CertCard: FC<CertCardProps> = (cert:CertCardProps):JSX.Element => {
    return (
        <>
            <div className={"cert-card"}>
                <h1 className={"cert-header"}>{cert.certName}</h1>
                {/*<p className={"cert-description"}>{cert.certDescription}</p>*/}
            </div>
        </>
    )
}