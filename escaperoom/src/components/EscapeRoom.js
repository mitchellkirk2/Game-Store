import RoomItem from "./RoomItem";

export default function EscapeRooms(){

    const escapeRooms = [
        {name:"Spy", difficulty:"Hard"},
        {name:"Space", difficulty:"Medium"},
        {name:"Underwater", difficulty:"Easy"}
    ];
    const escapeRoomOptions = escapeRooms.map(i=><RoomItem name={i.name} difficulty={i.difficulty}></RoomItem>)

    return(<div>
        <h3>Escape Rooms:</h3>
        <ul>
            {escapeRoomOptions}
        </ul>
    </div>)
}