import UniversalHeader from "../components/UniversalHeader/UniversalHeader.tsx";

function Contact() {
    return(
        <>
            <UniversalHeader/>
            <main>
                <div>
                <h1 className={"page-header"}>Contact Form:</h1>
                    <div style={{filter: "invert(1)"}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdcHTJjxvHaR41l7jXTYuL-z5iBSdwjUacUZrZfmQIJO-jfdQ/viewform?embedded=true"
                            width="100%" height="850" frameBorder="0">Loading…
                        </iframe>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact