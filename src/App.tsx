import { useRef } from "react"
import emailImage from "/email.png"

interface Body{
  email: string 
}
function App() {
  const textRef = useRef(null);
  const callApi = async (body: Body) => {
    try{
      const response = await fetch('http://127.0.0.1:8939/', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      if(response.ok && response.body)
      {
        alert(response.body.message ? response.body.message : '')
      }
    }
    catch(error)
    {
      alert(error)
    }
  }
  const handleClick = () => {
    if(!textRef.current?.value)
      alert('Empty value')
    const body: Body = {
      email: textRef.current?.value
    }
    await callApi(body)
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={emailImage} className="size-20 mt-32" />
      
      <div className="w-full max-w-sm min-w-[200px] mt-10 flex flex-col justify-center items-center">
        <input ref={textRef} className="w-[390px] h-[10px] rounded-xl p-5 text-slate-600 " placeholder="name@service.com" />
        <button onClick = {() => handleClick()} className="mt-10 w-[150px] bg-cyan-600 hover:bg-cyan-700 ease-in-out text-white p-2 rounded-2xl">
        Start Queue
      </button>
      </div>
    </div>
  )
}

export default App
