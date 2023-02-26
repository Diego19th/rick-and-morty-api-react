function Character({ character }) {
  return (
    <div className="text-center p-5 ">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={"Image of " + character.name}
        className="img-fluid rounded-pill"
      />
      <p>{character.origin.name}</p>
      <p>{character.status}</p>
    </div>
  );
}

export default Character;
