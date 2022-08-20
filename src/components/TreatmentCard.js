import React from 'react'

const TreatmentCard = () => {
    return (
        <div className='treatment-card-section p-0 m-0 pt-5'>
            <div className=' pt-5 bg-dark'>
                <div className="container pt-5">
                    <h2 className='text-center'>Ready to scheduled your event or treatment</h2>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Replenish # 1</h4>
                                <p className='text-light'>5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401.</p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Contact Details</h4>
                                <p className='text-light'>(832) 770-7975</p>
                                <p className='sub-heading'>Call / Text for a consultation</p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Replenish # 2</h4>
                                <p className='text-light'>1818 Washington Ave Ste 220A, #7 Houston, TX 77007</p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Contact Details</h4>
                                <p className='text-light'>(832) 953-0313</p>
                                <p className='sub-heading'>Call / Text for a consultation</p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Replenish # 3</h4>
                                <p className='text-light'>8555 Westheimer Rd ste 121, Houston, TX 77063</p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className='border-box'>
                                <h4>Contact Details</h4>
                                <p className='text-light'>(832) 953-0313</p>
                                <p className='sub-heading'>Call / Text for a consultation</p>
                            </div>
                        </div>
                       <div className='text-center'>
                       <p className='mt-5 mb-5'>
                            <button className='btn p-2' style={{ backgroundColor: '#DECFB3' }}>LEARN MORE</button>
                        </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TreatmentCard

