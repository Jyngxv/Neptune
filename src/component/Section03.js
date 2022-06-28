import React from 'react'

export const Section03 = () => {
  return (
    <section className='bg-black required:'>
        <div className='container'>
            <div className='wrapper'>
                <div className=''>
                    <div className='flex flex-col text-center'>
                        <p className='nt-title-text font-black text-white'>수의학에 기반한</p>
                        <p className='nt-title-text font-black text-secondary mb-48'>가장 진보한 알고리즘</p>
                        <p className='nt-sub-text w-3/5 mx-auto text-neutral-500 font-medium'>
                                        모든 반려인들은 매번 고민합니다. 무엇을 먹여야 하지? 
                                        하지만 매번 실패하고, 다시 새로운 상품을 찾으러 
                                        떠납니다.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='lg:w-480'>
                        <img src='img/device01.png' />
                    </div>

                </div>
            </div> 
        </div>
    </section>
  )
}

export default Section03;