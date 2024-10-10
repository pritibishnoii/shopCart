
import artists from './store'
const List = () => {
  return (
    <div className='w-[90%] m-auto mt-12'>
     {
      artists.map(artist=>{
        return(
          <div key={artist.id} className='bg-slate-200 m-5 p-2 '>
          <h1 className='text-blue-600 font-bold text-lg'>{artist.name}</h1>
          <p className='text-blue-400'>{artist.country}</p>
          <p className='text-blue-400'>{artist.genre}</p>
          <span className='text-blue-400 font-bold'>{artist.albums}</span>
          </div>
        )
       
      })
     }
    </div >
  )
}
export default List;