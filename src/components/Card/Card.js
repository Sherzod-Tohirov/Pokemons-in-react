function Card({data}) {
    let key = 0;
    return (
        <li className="pokemons__item flex flex-col items-center w-80 backdrop-blur-sm bg-white/30 bg-sky-500 text-slate-100 p-4 rounded-xl">
            <h3 className="text-center text-3xl mb-4">{data.name}</h3>
            <img className="w-full mb-3" src={data.img} alt={data.name} />
            <ul className="flex flex-grow flex-wrap gap-4">
                <li className="text-lg bg-teal-300 backdrop-blur-sm p-3 rounded-lg"><strong>📏 Weight:</strong> {data.weight}</li>
                <li className="text-lg bg-teal-300 backdrop-blur-sm p-3 rounded-lg"><strong>📐 Height:</strong> {data.height}</li>
                <li className="text-lg bg-teal-300 backdrop-blur-sm p-3 rounded-lg"><strong>🍬 Candy Count: </strong> {data.candy_count || 0}</li>
                <li className="text-lg bg-teal-300 backdrop-blur-sm p-3 rounded-lg"><strong>🪺 Egg:</strong> {data.egg}</li>
                <li className="w-full flex-grow bg-teal-400 backdrop-blur-sm p-3 rounded-lg">
                    <ul className="w-full h-full flex flex-col flex-wrap text-lg font-bold gap-2">
                        Weaknesses: 
                        {   
                            data.weaknesses.map(item => {
                                return <li key={++key} className="font-semibold">❌ {item}</li>
                            })
                        }
                    </ul>
                </li>
            </ul>   
        </li>
    );
}

export default Card;