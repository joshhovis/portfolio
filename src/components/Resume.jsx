import React from "react"
import { Document, Page } from "react-pdf"
import Resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div>
            <Document file={Resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume