
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
  export const Genre=({selectedGenres,handleClick,handleDelete,res})=>{
          return(
        <>
        <div className='w-full  py-5 bg-white items-center flex-wrap flex gap-3 px-10  m-auto rounded-lg mt-2 border border-blue-950'>
         {res && res?.map((res)=>{
           return(
                <Stack direction="row" spacing={1} >
         <Chip
         key={res?.id}
           label={res?.name}
           onClick={() => handleClick(res.id)}
           onDelete={() => handleDelete(res.id)}
           color={selectedGenres.includes(res?.id) ? 'primary' : 'default'}
         />
             </Stack>
           )
         })} 
        </div>
   </>
    )
}