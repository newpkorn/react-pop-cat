
function DashBoard(props) {

    const { cats, totalCount, leader, highestClick} = props;
    return (
        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          {/******** Start DashBoard ******/}
          <div className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center'>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Cat</h1>
                <h1 className='text-3xl font-semibold italic'>{cats.length}</h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Count</h1>
                <h1 className='text-3xl font-semibold italic'>{totalCount}</h1>
              </div>
            </div>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>LEADER</h1>
                <h1 className='text-3xl font-semibold italic'>{leader?.name} : {leader?.country}</h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Highest Click</h1>
                <h1 className='text-3xl font-semibold italic'>{highestClick}</h1>
              </div>
            </div>
          </div>

          {/******** End DashBoard ******/}
        </div>
    )
}

export default DashBoard;