import { useEffect, useState } from "react";
import Member from "../Member/Member";


const Ourteams = () => {

    const [teams, setTeams] = useState([]);


    useEffect(() => {
        fetch("/public/Fake_data2.json")
        .then(res => res.json())
        .then(data => setTeams(data))
        

    }, [])
    console.log(teams);

    return (
        <div>
            <div className="my-5">
                <h1 className="text-4xl text-amber-600 font-semibold text-center">Meet Our Briliant Team Members</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 my-5 ">
                {
                    teams.map(member => <Member key={member.id} member={member}></Member>)
                }

            </div>

        </div>
    );
};

export default Ourteams;