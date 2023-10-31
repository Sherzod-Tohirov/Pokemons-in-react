function Card({data}) {
    let key = 0;
    return (
        <li className="pokemons__item w-80 backdrop-blur-sm bg-white/30 bg-sky-500 text-slate-100 p-4 rounded-xl">
            <h3 className="text-center text-3xl mb-4">{data.name}</h3>
            <img className="w-full mb-3" src={data.img} alt={data.name} />
            <div className="flex flex-wrap gap-4">
                <p className="text-lg"><strong>Weight:</strong> {data.weight}</p>
                <p className="text-lg"><strong>Height:</strong> {data.height}</p>
                <p className="text-lg"><strong>Candy Count: </strong> {data.candy_count || 0}</p>
                <p className="text-lg"><strong>Egg:</strong> {data.egg}</p>
                <ul className="w-full flex flex-col flex-wrap text-lg font-bold gap-2">
                    Weaknesses: 
                    {   
                        data.weaknesses.map(item => {
                            return <li key={++key} className="font-semibold">• {item}</li>
                        })
                    }
                </ul>
                
            </div>
        </li>
    );
}

export default Card;