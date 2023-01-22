import React, {
    useEffect,
    useState
} from "react";
import MovieCard from "./components/movieCard";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return <div
        style={{
            backgroundColor: "#e3e3e3",
            padding: 20
        }}
    >
        {data.map((item) => {
            return <MovieCard
                {...item}
            />;
        })}
    </div>;
};
export default App;
