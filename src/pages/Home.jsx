import { useState } from "react";
import Greetings from "../components/Greetings";
import UserCards from "../components/UserCard";

// const user = window.prompt("Qual o seu nome?") || "Visitante";


function Home() {
    const [visitorName, setVisitorName] = useState('');

    return (
        <>
            <div className="name-form">
                <label htmlFor="visitor-name">Quem é o cantor?</label>
                <input 
                    type="text"
                    id="visitor-name"
                    placeholder="Digite seu nome"
                    onChange={(evento) => setVisitorName(evento.target.value)}
                />
            </div>
            <Greetings nome={visitorName || "Visitante"}/>

            <section id="equipe">
                <div className="section-heading">
                    <div>
                        <span className="section-label">Capital Humano</span>
                        <h2>Conheça nossa Equipe: </h2>
                    </div>
                </div>
                <div className="team-grid">
                    {team.map((person) => <UserCards key)}
                </div>
            </section>
        </>
    );
}
export default Home;