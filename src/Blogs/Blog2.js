import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred style\


function Blog2() {

    const code1 =
        `m = random.uniform(-10, 10) #slope (weight) (m)
b = random.uniform(-10, 10) #y intercept (bias) (b)`;

    const code2 = `import random

#random data with a negative linear relationship (i just asked gpt to generate these nums)
x = [2.5, 3.1, 3.8, 4.2, 4.7, 5.1, 5.5, 5.9, 6.3, 6.8, 7.2, 7.6, 8.1, 8.5, 9.0, 9.4]
y = [11.5, 10.8, 9.5, 8.3, 7.8, 7.2, 6.9, 6.1, 5.7, 5.1, 4.9, 4.2, 3.8, 3.1, 2.7, 2.1]

def getLoss(m, b):
    overall_loss = 0

    #loop through each data point, determine how far away the predicted y value is from the actual y value and add the loss to overall loss
    for i in range(len(x)):
        x_val = x[i]
        y_val = y[i]
        predicted_y = m * x_val + b
        loss = abs(predicted_y - y_val)
        overall_loss += loss

    
    return overall_loss`

    const code3 = `loss = 999
learning_rate = 0.0001
epoch = 0

while loss > 1:
    loss = getLoss(m, b)
    print("Loss: ", loss, "m: ", m, "b: ", b, "Epoch: ", epoch)

    dm_respect_to_loss = (getLoss(m + 0.01, b) - getLoss(m, b)) / 0.01
    db_respect_to_loss = (getLoss(m, b + 0.01) - getLoss(m, b)) / 0.01

    m -= dm_respect_to_loss * learning_rate
    b -= db_respect_to_loss * learning_rate

    epoch += 1`

    const code4 = `import random

#random data with a negative linear relationship (i just asked gpt to generate these nums)
x = [2.5, 3.1, 3.8, 4.2, 4.7, 5.1, 5.5, 5.9, 6.3, 6.8, 7.2, 7.6, 8.1, 8.5, 9.0, 9.4]
y = [11.5, 10.8, 9.5, 8.3, 7.8, 7.2, 6.9, 6.1, 5.7, 5.1, 4.9, 4.2, 3.8, 3.1, 2.7, 2.1]

def getLoss(m, b):
    overall_loss = 0

    #loop through each data point, determine how far away the predicted y value is from the actual y value and add the loss to overall loss
    for i in range(len(x)):
        x_val = x[i]
        y_val = y[i]
        predicted_y = m * x_val + b
        loss = abs(predicted_y - y_val)
        overall_loss += loss

    
    return overall_loss



m = random.uniform(-10, 10) #slope (weight) (m)
b = random.uniform(-10, 10) #y intercept (bias) (b)

loss = 999
learning_rate = 0.0001
epoch = 0

while loss > 1:
    loss = getLoss(m, b)
    print("Loss: ", loss, "m: ", m, "b: ", b, "Epoch: ", epoch)

    dm_respect_to_loss = (getLoss(m + 0.01, b) - getLoss(m, b)) / 0.01
    db_respect_to_loss = (getLoss(m, b + 0.01) - getLoss(m, b)) / 0.01

    m -= dm_respect_to_loss * learning_rate
    b -= db_respect_to_loss * learning_rate

    epoch += 1
`

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

                <img src='/blog2/fig1.png' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig2.png' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig3.png' style={{ width: '500px' }} className='border-black border my-5'></img>
                <img src='/blog2/fig4.png' style={{ width: '500px' }} className='border-black border my-5'></img>

                <br />
                This works because while each client does send the model to the server, they never send the private data. The model simply has the weights and biases of the model, which is not enough to reverse engineer the data (in most cases) <br />

                Here is a website I created to demonstrate:

                <br />


                <div className="  text-blue-500 underline cursor-pointer flex flex-col">

                    <a href='https://fedlearning.vercel.app/'>Link to website</a>
                </div>

                <video src="/blog2/fig5.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>
                <br /> <br />

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
