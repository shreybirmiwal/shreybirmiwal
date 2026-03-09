import React from 'react'
function Blog2() {
    return (
        <div>
            <h1 className='h1'>
                [2] Demo federated learning with no external packages
            </h1>
            <h2> 6/3/2024 - Shrey Birmiwal </h2>

            <div className='mt-5'>
                Last week, I attended the AkashAccelerate event during Consensus and got to watch Dr. Vishwanath discuss the possibilities of federated learning and inspired me to further dig into what federated learning was and to create a simple implementation of it myself. <br />
                <br />

                <iframe width="560" height="315" src="https://www.youtube.com/embed/60mmj3bNzB0?si=wtTgk8hye18DyESk&amp;start=24333" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <br /><br />
                Say we have 3 hospitals, each with a dataset of patient data. Obviously, they cannot leak data of each patient to the other hospitals or a server for that manner because it would break HIPPA compliance, however, sharing data would make a much stronger ML model that would end up saving many lives <br />

                <br />
                Usually when training a model, a bunch of data is collected at a central server and the model is fit to the data. However, in federated learning, the data is never sent to the server. Below represents how the process works. <br />

                <img src='/blog2/fig1.png' alt='Federated learning overview diagram' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig2.png' alt='Client-side local training step in federated learning' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig3.png' alt='Server aggregation step for combining client models' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig4.png' alt='Final shared model produced from federated learning rounds' style={{ width: '500px' }} className='border-black border my-5'></img>

                <br />
                This works because while each client does send the model to the server, they never send the private data. The model simply has the weights and biases of the model, which is not enough to reverse engineer the data (in most cases) <br />

                Here is a website I created to demonstrate:

                <br />


                <div className="  text-blue-500 underline cursor-pointer flex flex-col">

                    <a href='https://fedlearning.vercel.app/'>Link to website</a>
                </div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/aflfj00Rc-w?si=nmmPtBINmHhehitb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                <br /> <br />

                You can see how each client uses their own data to create it's own model. Than, the main server aggregates the models to create a final model. <br />
                Soon I will update this blog with more details on the code.

                <br /> <br />
                Let's go! Thanks for reading. <br /> <br />


                Resources I used: <br />
                <div className="  text-blue-500 underline cursor-pointer flex flex-col">
                    <a href='https://www.youtube.com/watch?v=60mmj3bNzB0'>Akash Accelerate Event</a>
                    <a href='https://www.youtube.com/watch?v=nBGQQHPkyNY'>Federated Learning EXPLAINED</a>
                    <a href='https://www.youtube.com/watch?v=zqv1eELa7fs'>Training AI Models with Federated Learning</a>
                </div>

                <br />
                <br />

                Links: <br />
                <div className="  text-blue-500 underline cursor-pointer flex flex-col">
                    <a href='https://fedlearning.vercel.app/'>Website (try it out!)</a>
                    <a href='https://github.com/shreybirmiwal/fedlearning'>Github Code</a>
                    <a href='https://x.com/shreybirmiwal/status/1797842767361757561'>Tweet</a>
                </div>

            </div>


        </div>
    )
}

export default Blog2
