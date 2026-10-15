function Greetings({nome, mensagem = "Seja bem vindo(a)!"}) {
    return (
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio error delectus, recusandae quidem vel! Porro nulla voluptatem dolorem enim ipsam harum voluptatum, sunt aspernatur, aperiam fuga, tempora maxime quod.</p>
        </div>
    )
}

export default Greetings;