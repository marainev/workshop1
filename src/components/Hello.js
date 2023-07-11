import Data from "./Data";

const name=Data().name;

function Hello () {
    return (
        <div>
            <h2 className='page-heading'>{name}</h2> 
                <img src= "https://img.freepik.com/premium-vector/cosmic-phenomenon-doodle-outline-drawing-comet-astronomy-science-sketch-hand-drawn-vector-illustration-isolated-white_534604-2291.jpg" />
        </div>
    );
};


export default Hello; 