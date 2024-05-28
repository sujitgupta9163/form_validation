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

  const errModel ={
    firstname : null,
    lastname : null,
    email : null,
    password : null,
    username : null,
    mobile : null
  }


  const [form , setForm] = useState(model);
  const [formError , setFormError] = useState(errModel);

  const validator = (key , value)=>{
    if(!value.length){
      setFormError({
        ...formError,
        [key]: `${key}  is required`
      })
    }
    else{
      setFormError({
        ...formError,
        [key]: null
      })
    }
  }

  const getFormValue = (e)=>{
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key] : value
    })
    // validator
    validator(key , value)
  }

  const signup =(e) =>{
    e.preventDefault()
    console.log(form)
  }


  return(
  
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
       {/* <h1>{JSON.stringify(form)}</h1> */}
        <div className="bg-white p-8 w-[450px]  shadow-lg rounded-lg animate__animated animate__zoomIn ">
          <h1 className='text-3xl font-bold mb-4 text-center text-[#671072]'>Signup form</h1>
            
          <form className='flex flex-col justify-center gap-3 pb-3 rounded-xl' onSubmit={signup}>
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Firstname : </label>
                   <input
                    name='firstname'
                    type='text'
                    placeholder='Enter first name here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'

                    onChange={getFormValue}
                    
                   />
                    {
                      formError.firstname &&  <small className='text-rose-600 font-semibold text-sm'>{formError.firstname}</small>
                    }
                 
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Lastname : </label>
                   <input
                    name='lastname'
                    type='text'
                    placeholder='Enter Last name here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'
                    
                    onChange={getFormValue}

                   />
                    {
                      formError.lastname &&  <small className='text-rose-600 font-semibold text-sm'>{formError.lastname}</small>
                    }   
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Email : </label>
                   <input
                    name='email'
                    type='email'
                    placeholder='Enter Email here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'

                    onChange={getFormValue}
                    
                   />
                    {
                      formError.email &&  <small className='text-rose-600 font-semibold text-sm'>{formError.email}</small>
                    }

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
              </div>

              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Password : </label>
                   <input
                    name='password'
                    type='password'
                    placeholder='Enter Password here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'

                    onChange={getFormValue}
                    
                   />

                  {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small>{ */}
                    {
                      formError.password &&  <small className='text-rose-600 font-semibold text-sm'>{formError.password}</small>
                    }
              </div>


              
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Username : </label>
                   <input
                    name='username'
                    type='text'
                    placeholder='Enter Username here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'

                    onChange={getFormValue}
                    
                   />

                    {
                      formError.username &&  <small className='text-rose-600 font-semibold text-sm'>{formError.username}</small>
                    }

              </div>


              
              <div>
                <label className='flex flex-col gap-8 text-lg font-semibold '>Mobile : </label>
                   <input
                    name='mobile'
                    type='number'
                    placeholder='Enter Mobile Number here'
                    className='border p-2 rounded border-gray-300 w-full  text-gray-700'

                    onChange={getFormValue}
                    
                   />

                    {
                      formError.mobile &&  <small className='text-rose-600 font-semibold text-sm'>{formError.mobile}</small>
                    }
              </div>

              <button className='mt-2 border-0 bg-[#671072] p-2 text-white font-semibold rounded-lg'>Submit</button>


          </form>

        </div>
    </div>
  )
}
export default App;