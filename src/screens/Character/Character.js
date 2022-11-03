import {useParams} from "react-router-dom"

const Character = () => {
    const name = useParams();

        return(
            <div>
                {name}
            </div>
        );
}

export default Character;
