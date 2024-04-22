import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h1 className='h1'>
              Home
            </h1>

          </div>
        )
      case 'academics':
        return (
          <div>
            <h1 className='h1'>
              Academics
            </h1>

          </div>
        )
      case 'workExperience':
        return (
          <div>
            <h1 className='h1'>
              Work Experience
            </h1>

          </div>
        )
      case 'projects':
        return (
          <div>
            <h1 className='h1'>
              Projects
            </h1>

          </div>
        )
      case 'mlBlog':
        return (
          <div>
            <h1 className='h1 mb-5'>
              Blog
            </h1>

            <div className="text-blue-500 underline cursor-pointer flex flex-col space-y-2">
              <a onClick={() => handleTabClick('blog-0')}> [0] Simplified Quantization Program in Python </a>
            </div>

          </div>
        )

      case 'blog-0':
        return (
          <div>
            <h1 className='h1'>
              [0] Simplified Quantization Program in Python
            </h1>
            <h2> 4/22/2024 - Shrey Birmiwal </h2>

            <div className='mt-5'>
              Hi, this is my first post about learning about LLMs. <br />
              This is how I made an extremely simplified quantization example using python!<br /><br />
              LLM models have an extremely large amount of parameters. For example, GPT3 has 175 billion parameters. This makes tuning the LLM to custom uses very expensive and intensive. One of the large expenses that this causes in fine tuning is gpu memory. <br />


              Why? Here is an example of a matrix from a neural network:


              .000012
              21.20201994
              .394123913
              .3888820
              .999333
              .12234
              .44421
              .0200021
              .00002
              1.529
              .0912
              1.999999


              Each entry in the matrix is a float, usually a float32.
              In memory each float32 is contained like this:


            </div>


          </div>
        )


      default:
        return null;
    }
  };

  return (
    <div className="flex font-mono">



      <div className="w-1/6 h-screen border-r-2 border-r-gray-500 pt-5">
        <div className="flex flex-col justify-center">
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('home')}>Home</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('academics')}>Academics</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('workExperience')}>Work Experience</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('projects')}>Projects</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('mlBlog')}>Blog</h1>
        </div>
      </div>



      <div className="w-5/6 h-screen border-l p-10">
        {renderTabContent()}
      </div>


    </div>
  );

}

export default App;
