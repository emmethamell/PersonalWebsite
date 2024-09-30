import React from "react";
import ResumePDF from "../../public/Emmet_Hamell_Resume.pdf";

const Resume: React.FC = () => {
    return (
        <div className="flex w-full my-7 py-7">
            <iframe src={ResumePDF} width="1000" height="800px" />
        </div>
    )

}
export default Resume