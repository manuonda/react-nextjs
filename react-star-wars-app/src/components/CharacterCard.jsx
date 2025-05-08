

function CharacterCard({character}) {
    const characterId = character.url.split("/").filter(Boolean).pop();
    return(
        <div className="card">
          <div className="card-content">
            <h3>{character.name}</h3>
            <div className="card-info">
                <span>Genero:</span>{character.gender !== 'n/a' ? character.gender: 'No Aplicable'}
            </div>
            

          </div>

        </div>
    )
}