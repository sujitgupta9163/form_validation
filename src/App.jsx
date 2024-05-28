import 'animate.css';
import { useState } from 'react';

const App = ()=>{

  const model ={
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    username : '',
    mobile : ''
  }


  const [form , setForm] = useState(model);

  const getFormValue = (e)=>{
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key] : value
    })
  }

  const signup =(e) =>{
    e.preventDefault()
    console.log(form)
  }


  return(
  
    <div className="bg-gray-100 h-screen flex justify-center items-center">
       {/* <h1>{JSON.stringify(form)}</h1> */}
        <div className="bg-white p-8 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn ">
          <h1 className='text-3xl font-bold mb-4 text-center text-[#671072]'>Signup form</h1>
            
          <form className='flex flex-col justify-center' onSubmit={signup}>
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-2'>Firstname : </label>
                   <input
                    name='firstname'
                    type='text'
                    placeholder='Enter first name here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-2'>Lastname : </label>
                   <input
                    name='lastname'
                    type='text'
                    placeholder='Enter Last name here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'
                    
                    onChange={getFormValue}

                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-3'>Email : </label>
                   <input
                    name='email'
                    type='email'
                    placeholder='Enter Email here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-3'>Password : </label>
                   <input
                    name='password'
                    type='password'
                    placeholder='Enter Password here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>


              
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-3'>Username : </label>
                   <input
                    name='username'
                    type='text'
                    placeholder='Enter Username here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>


              
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold mt-3'>Mobile : </label>
                   <input
                    name='mobile'
                    type='number'
                    placeholder='Enter Mobile Number here'
                    className='border p-2 rounded border-gray-300 w-full mt-3 text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>

              <button className='mt-4 border-0 bg-[#671072] p-2 text-white font-semibold rounded-lg'>Submit</button>


          </form>

        </div>
    </div>
  )
}
export default App;