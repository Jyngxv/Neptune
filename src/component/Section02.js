import React from 'react';

const Section01 = () => {
    return (
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col mx-auto mb-64'>
                            <video className='sm:w-85% md:w-55% lg:w-45% m-auto' autoPlay loop muted>
                                <source src='video/video01.mp4' type="video/mp4" />
                            </video>
                            {/* <img className='sm:w-85% md:w-55% lg:w-45% m-auto' src='img/img02.png' /> */}
                        </div>
                        <div className='flex flex-col text-center'>
                            <p className='nt-title-text font-black'>커머스를 넘어선</p>
                            <p className='nt-title-text font-black text-primary mb-48'>기술의 결정체</p>
                            <p className='nt-sub-text w-3/5 mx-auto text-neutral-800 font-medium'>
                                모든 반려인들은 매번 고민합니다. 무엇을 먹여야 하지? 
                                하지만 매번 실패하고, 다시 새로운 상품을 찾으러 
                                떠납니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section01;
