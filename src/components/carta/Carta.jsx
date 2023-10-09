import ImageDefault from '../../assets/icono_pelicula.png'

function Carta({movie}){

  const imagen = movie.Poster === 'N/A' ? ImageDefault : movie.Poster

    return(
    <div key={movie.imdbID}>
               <div className='min-h-[600px] bg-slate-800 sw-[300px] gap-6 rounded-xl shadow-sm shadow-slate-100 hover:scale-105  flex flex-col justify-center items-center'>
                 <p className=' text-xl text-slate-200 font-bold mt-4 p-2 '>{movie.Title}</p>
                 <img className='w-[300px] h-[400px] '
                   src={imagen} alt={movie.Title} />
                 <p className=' font-semibold text-stone-400 mb-4'>{movie.Year}</p>
               </div>
             </div>
    )
}
export default Carta