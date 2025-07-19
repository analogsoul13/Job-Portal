import React from 'react'
import PostJob from '../Recruiter/PostJob'

function HeroSectioRecruiter() {
    return (
        <>
            <div className='flex mt-4 flex-col bg-base-100 rounded-lg shadow-xl justify-center mx-4 space-y-3 items-center p-4'>
                <h1 className='text-base-content text-center text-xl'>Dashboard</h1>
                <div className='grid w-full sm:grid-cols-2 gap-4'>
                    {/* Modal */}
                    <PostJob/>
                    {/* ViewJObs */}
                    <div className='flex justify-center bg-base-200 rounded-lg p-4'>
                        <button className='btn btn-accent'><i className="fa-solid fa-list" />View All Jobs Posted</button>
                    </div>
                </div>
                {/* Image */}
                <div className='flex bg-heroCover rounded-lg bg-cover w-full h-full lg:h-80'>
                    <p className='text-center text-sm text-base-content rounded-t-lg p-2 bg-base-300 bg-opacity-70 lg:h-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt illum ab cum dicta vel deserunt reiciendis iusto alias ea perferendis, ratione accusamus repudiandae ut in aliquid ullam sed modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatum asperiores quidem architecto natus ratione amet quia doloremque cupiditate ullam.</p>
                </div>
                {/* Stats */}
                <div className='flex flex-col  items-center bg-base-200 p-3 rounded-lg justify-center w-full'>
                    <h1 className='text-base-content text-xl p-2'>Analytics</h1>
                    <div className="stats w-full shadow">
                        <div className="stat place-items-center">
                            <div className="stat-title">Jobs Posted</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Appicants</div>
                            <div className="stat-value text-accent">4,200</div>
                            <div className="stat-desc text-accent">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Interviews</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSectioRecruiter