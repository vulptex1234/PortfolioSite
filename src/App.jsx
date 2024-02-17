import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-700'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-mediam text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>Kay</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#About" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#Skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#Blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700' id='home'> 
        <div className='flex container mx-auto my-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-mediam mb-4'>
              Hi!
              <br />
              I'm Kyohei
              <br />
              Computer Science Student 
            </h1>
            <p className='mb-8 leading-relaxed'>
              My name is Kyohei Osawa. I'm a computer science student at Tokyo University of Technology. I'm passionate about cutting edge technologies regardless of field. 
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/4 lg:max-w-lg w-5/6'>
            <img src="./img/icon.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200' id='About'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>Hello there. My name is Kyohei Osawa. I know it's a little bit difficult to pronounce Kyohei, so call me Kay.</p>
            <p>I was born and raised in Hachioji, a suburb of Tokyo that is full of nature and easily accessible to the center of Tokyo. When I was a child, I was good at arts and crafts, English, mathematics and science. But not only them, I was curious about so many things around me. I think these things define my interests and who I am now.
              I have been learning compputer science for 4 years at university, and now I am a student in the final year of my degree. My main major is IoT. But "Computer Science" has a lot of fields. I'm interested in many fields in "Computer Science".
            </p>
          </div>
          {/*カードのdivタグ*/} 
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>IoT</h2>
                </div>
                <div>
                <p>I'm currently doing research about reducing energy consumption in IoT systems for my graduate thethis. 
                I use microPython for ESP32 development, and use Python, flask and MongoDB for server side development.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>see more
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg> 
                </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SRE</h2>
                </div>
                <div>
                <p>I learned SRE in a class. I built a webserver using nginx, then did a scaling test by using kubernetes. I used ELK Stack for monitoring.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>see more
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg> 
                </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat maiores odio quis nam error repudiandae, blanditiis tenetur? Excepturi, reprehenderit.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>see more
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg> 
                </a>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200' id='Skills'>
        <div className='flex flex-wrap container px-5 py-24 mx-auto'>
          {/*left side*/}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" className='rounded'/>
          </div>
          {/*right side*/}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div className='w-full'>
              <h2>HTML</h2>
              <div className='bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:'50%'}}>85%</div>
              </div>
              <h2>CSS</h2>
              <div className='bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:'50%'}}>85%</div>
              </div>
              <h2>Python</h2>
              <div className='bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:'85%'}}>85%</div>
              </div>
              <h2>Java</h2>
              <div className='bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:'70%'}}>85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
