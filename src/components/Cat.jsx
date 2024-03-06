import { useState } from 'react'
import catImg1 from '../assets/c1.png'
import catImg2 from '../assets/c2.png'
import sound from '../assets/sound.mp3'

function Cat({ cat, handleIncrease, handleDecrease, handleReset, removeCat }) {

    const [audio] = useState(new Audio(sound));

    return (
      <>
        {/******** Start 1-Cat ******/}
        <div className='flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative'>
          {/* Remove Cat */}
          <div className='absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer '
          onClick={() => removeCat(cat.id)}>
            x
          </div>
          <div>
            {/* Cat Image */}
            <div className='w-[100px]'>
                { cat.count % 2 == 0 ? 
                    (<img
                    className='w-full h-auto object-cover rounded-lg'
                    src={catImg1}
                    />) 
                    : 
                     (<img
                        className='w-full h-auto object-cover rounded-lg'
                        src={catImg2}
                    />)
                }
            </div>
          </div>
          {/* Cat Profile & Count*/}
          <div className='flex-1 px-4'>
            <p className='text-2xl'>{cat.name} : {cat.country}</p>
            <p>count : {cat.count}</p>
          </div>
          <div className='flex gap-1'>
            {/* Button Group */}
            <button className='px-4 py-2 bg-slate-500 rounded-md' onClick={() => {handleReset(cat.id); audio.play();}}>reset</button>
            <button className='px-4 py-2 bg-slate-500 rounded-md' onClick={() => {handleDecrease(cat.id); audio.play();}}>-</button>
            <button className='px-4 py-2 bg-slate-500 rounded-md' onClick={() => {handleIncrease(cat.id); audio.play();}}>+</button>
          </div>
        </div>
        {/******** End 1-Cat ******/}
      </>
    )
  }

  export default Cat;