
const person1 = {
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovered: "polonium (chemical element)",
    imgSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"  
}
const person2 = {
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater",
    imgSrc: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"  
}

export function Profile({person}){
    return (
        <div className="profile" style={{backgroundColor: "yellow"}}>
            <h2>This is {person.name}</h2>
            <Avatar person={person} size={100}/>
            <ul>
                <li><b>Profession:</b> {person.profession}</li>
                <li><b>Awards:</b> {person.awards}</li>
                <li><b>Discovered:</b> {person.discovered}</li>
            </ul>
        </div>
    );
}

function Avatar({person, size}){
    return (
        <img
            src={person.imgSrc}
            className="avatar"
            alt={person.name}
            width={size}
            height={size}
            style={{borderRadius: 100}}
        />
    );
}

function Galery() {
    return (
        <div className="App">
            <Profile person = {person1}/>
        </div>
    );
}

export default Galery;