import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
const SignIn = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // dispatch(login('A23h-234hjk-234', 'Mars'))
    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="row container">
                    <div className="col-lg-4">
                        <form action="" onSubmit={handleSubmit}>
                            <div className='card shadow-lg p-5 rounded-pill'>
                                {/* <h3 className="">Sign In</h3> */}
                                <label htmlFor="" className='text-primary text-bold'>Email</label>
                                <input type="text" className='form-control' />
                                <button type='submit' className='btn btn-success btn-sm my-3'>LOGIN</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-8">

                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'fixed', bottom: 0, zIndex: -10 }}>
                <path fill="#0099ff" fill-opacity="1" d="M0,256L13.3,240C26.7,224,53,192,80,197.3C106.7,203,133,245,160,224C186.7,203,213,117,240,117.3C266.7,117,293,203,320,245.3C346.7,288,373,288,400,277.3C426.7,267,453,245,480,202.7C506.7,160,533,96,560,69.3C586.7,43,613,53,640,85.3C666.7,117,693,171,720,186.7C746.7,203,773,181,800,181.3C826.7,181,853,203,880,202.7C906.7,203,933,181,960,176C986.7,171,1013,181,1040,170.7C1066.7,160,1093,128,1120,101.3C1146.7,75,1173,53,1200,80C1226.7,107,1253,181,1280,186.7C1306.7,192,1333,128,1360,96C1386.7,64,1413,64,1427,64L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
            </svg>
        </>
    )
}

export default SignIn