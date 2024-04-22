import React, { useState } from 'react';

import Blog0 from './Blogs/Blog0';


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
          <Blog0 />
        )

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <div className="w-1/6 border-r-2 border-r-gray-500 pt-5">
        <div className="flex flex-col justify-start h-full"> {/* Change justify-center to justify-start */}
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('home')}>Home</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('academics')}>Academics</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('workExperience')}>Work Experience</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('projects')}>Projects</h1>
          <h1 className="p-5 ml-10" onClick={() => handleTabClick('mlBlog')}>Blog</h1>
        </div>
      </div>

      <div className="w-5/6 p-10">
        {renderTabContent()}
      </div>
    </div>

  );

}

export default App;
