
export default function RoomItem(props){
    const name = props.name;
    const difficulty = props.difficulty;

    return(<li><b>Name:</b> {name}, <b>Difficulty:</b> {difficulty} </li>)
}