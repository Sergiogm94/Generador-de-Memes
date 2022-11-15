import "./Filter.scss";

const Filter = ({search}) => {
    const handleChange = (event) => {
        console.log(event);
        const {value} = event.target;
        search(value)
    }


    return(
        <div>
            <input className="finder" type="text" placeholder="Buscar" onChange={handleChange}></input>
        </div>
    )
}

export default Filter;