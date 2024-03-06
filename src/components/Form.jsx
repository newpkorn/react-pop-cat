
function Form(props) {

    const { catName, catCountry, handleCatName, handleCatCountry, handleSubmit, error } = props;
    return (
        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          {/******** Start Form ******/}
          <form className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black'>
            <h1 className='text-3xl font-semibold italic'>Join for Click Cat !!</h1>
            {/* Cat Name */}
            <input className='w-full p-2 border-2 border-slate-300 rounded-md' placeholder='cat' value={catName} onChange={handleCatName} />
            {/* Cat Country */}
            <select className='w-full p-2  border-2 border-slate-300 rounded-md' value={catCountry} onChange={handleCatCountry}>
              <option value='' disabled>
                select country
              </option>
              <option value='Thailand'>Thailand</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </select>
            {/* Error */}
            { error ? <p className='text-red-500'>Please fill out all field</p> : null}
            {/* Submit */}
            <button
              type='submit'
              className='bg-zinc-200 mt-4 p-2 rounded-xl text-xl text-black hover:bg-gray-700 hover:text-white'
              onClick={handleSubmit}
            >
              Join
            </button>
          </form>
          {/******** End Form ******/}
        </div>
    )
}

export default Form;