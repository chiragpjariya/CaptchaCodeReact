import { useState } from 'react'
import './App.css'
import Alert from './component/Alert'

function App() {
  //All Variables
  let [Code, SetCode] = useState("")
  let [YourCode, SetYourCode] = useState("")
  // let [CheckFlag, SetCheckFlage] = useState(false)
  let [types, SetTypes] = useState()
  let [Coolers, SetCoolers] = useState()


  //Clear Color and type of Alert-component
  function Clear() {
    setTimeout(() => {
      SetTypes("");
      SetCoolers("")
    }, 8000);
  }

  //Button Functions
  //Check btn
  let handel = (e) => {
    e.preventDefault();

    //Check Input field is Empty.
    if (Code == "") {
      SetTypes("Please first click on Generate Button");
      SetCoolers("p-4 mb-4 text-sm rounded-lg text-white bg-green-400  text-[21px] font-medium");
      Clear();
    }

    //Check Input Value match Generated Code.
    if (Code == YourCode) {
      SetTypes("Code Matched");
      SetCoolers("p-4 mb-4 text-sm rounded-lg text-white bg-green-400  text-[21px] font-medium");
      Clear();
    }

    //Check Input Value not match Generated Code.
    if (Code !== YourCode) {
      SetTypes("Code Not Matched");
      SetCoolers("p-4 mb-4 text-sm rounded-lg text-white bg-red-500  text-[21px] font-medium");
      Clear();
    }


  }

  //Code Generator
  let CodeGenerator = () => {
    let str = 'asdfghm2365!@#$%0';
    let code = '';
    for (let i = 0; i < 10; i++) {
      code += str[Math.floor(Math.random() * str.length)]
    }
    if (code.includes('undefined')) {
      CodeGenerator()
    } else {
      SetYourCode(code);
      setTimeout(() => {
        SetYourCode("")
        SetCode("");
        document.querySelectorAll('input').value = "";
      }, 15000);
    }

  }

  return (
    <>
      <div className=" flex justify-center items-center h-screen w-screen p-6  border-gray-200  shadow sm:p-6 md:p-8  bg-gray-800">
        <form className="space-y-6 w-[500px] h-auto rounded-xl bg-white/20 shadow-lg ring-1 ring-black/9 p-5 border-blue-500 border-[3px]" action="#">
          {/* {start input box} */}
          <div>
            <label
              htmlFor="Code"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Captcha Code
            </label>
            <input
              type="text"
              name="Code"
              id="Code"
              className="border  text-sm rounded-lg  block w-full p-2.5   bg-gray-600  text-white"
              placeholder="asdef@12302#$%^"
              required
              value={Code}
              onChange={(e) => SetCode(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="YourCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Code
            </label>
            <input
              type="text"
              name="YourCode"
              id="YourCode"
              placeholder="asdef@12302#$%^"
              className=" border  text-sm rounded-lg  block w-full p-2.5   bg-gray-600  text-white"
              value={YourCode}
              readOnly
            />
          </div>
          <div className="btns flex justify-around">
            <div className='w-[100px]'>
              <button
                type="button"
                className="w-[100%] focus:outline-none text-white bg-green-500 hover:bg-green-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                onClick={CodeGenerator}
              >
                Generate
              </button>
            </div>
            <div className=' w-[100px]'>
              <button
                onClick={handel}
                type="button"
                className="w-[100%] focus:outline-none text-white bg-red-500 hover:bg-red-800  focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                Check
              </button>
            </div>
          </div>
          <div className="alerts" id='alerts'>
            <Alert
              type={types}
              colors={Coolers}
            />

            {/* <Alert
              type={"Code Matched"}
              colors="p-4 mb-4 text-sm rounded-lg text-white bg-green-400  text-[20px]"
            />
            <Alert
              type={"Code Not Match ! Try Again"}
              colors="p-4 mb-4 text-sm rounded-lg text-white bg-red-400  text-[20px]"
            /> 
             <Alert
        type={"Please first click on Generate Button"}
        colors="p-4 mb-4 text-sm rounded-lg text-white bg-red-400  text-[20px]"
      />
*/}
          </div>
        </form>
      </div>
    </>
  )
}

export default App
