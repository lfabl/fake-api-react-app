import React from "react";

const Button = ({
    title
}) => {
    return <button
        style={{
            padding: "10px 20px",
            backgroundColor: "#444444",
            color: "#ffffff"
        }}
    >
        {title}
    </button>;
};
export default Button;
