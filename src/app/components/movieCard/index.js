import React from "react";

const MovieCard = ({
    Runtime,
    Poster,
    Title,
    Year
}) => {
    return <div
        style={{
            backgroundColor: "white",
            flexDirection: "row",
            borderRadius: 10,
            marginBottom: 20,
            display: "flex",
            padding: 20
        }}
    >
        {
            Poster ? <img
                src={Poster}
                alt="Sanane ayol"
                height={75}
                width={75}
                style={{
                    borderRadius: "50%",
                    marginRight: 20
                }}
            /> : null
        }
        <div
            style={{
                justifyContent: "space-between",
                flexDirection: "column",
                display: "flex",
                height: "100%"
            }}
        >
            <div
                style={{
                    flexDirection: "column",
                    display: "flex"
                }}
            >
                <span
                    style={{
                        fontWeight: "bold",
                        marginBottom: 4,
                        fontSize: 20
                    }}
                >
                    {Title}
                </span>
                <span
                    style={{
                        color: "#777777"
                    }}
                >
                    {Runtime}
                </span>
            </div>
            <span
                style={{
                    color: "orange",
                    fontSize: 18
                }}
            >
                {Year}
            </span>
        </div>
    </div>;
};
export default MovieCard;
