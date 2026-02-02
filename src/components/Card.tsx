interface ICard {
    name: string;
    biography: string;
}

export const Card = ({name, biography} : ICard) => {
    return (
        <div>
            <h2>Eu sou {name}</h2>
            <p>{biography}</p>
        </div>
    );
}