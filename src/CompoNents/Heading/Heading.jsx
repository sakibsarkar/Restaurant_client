import "./Heading.css";

const Heading = ({ heading, subHeading }) => {
    return (
        <div className="headingCon">
            <p>{heading}</p>
            <h1>{subHeading}</h1>
        </div>
    );
};

export default Heading;