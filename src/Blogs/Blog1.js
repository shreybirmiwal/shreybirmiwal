import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred style\


function Blog1() {

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

    return (
        <div>
            <h1 className='h1'>
                [1] Simplified Back Propagation in native Python
            </h1>
            <h2> 5/21/2024 - Shrey Birmiwal </h2>

            <div className='mt-5'>
                Hi, for the past week I learned about back prop, the underlining algorithm behind machine learning <br />
                This is how I made an extremely simplified back prop example using Python!<br /><br />
                Say we have a dataset that looks something like this:
                <img src='/blog1/fig1.png' style={{ width: '600px' }}></img>

                We as humans can recognize the linear, downward trend in the data   <br />
                However, how would you train a computer to recognize this trend? <br /><br />
                This is exactly the problem that back prop solves. <br /> <br />

                First, recognize that every linear relationship like the one shown above is simply a form of the equation y = mx + b <br />
                We simply need to find the m and b that best fits the data. <br /> <br />
                In more technical terms, the SLOPE or M is called the weight, and the y-intercept, or B is the BIAS <br />

                Usually, real neural networks work on more complex datasets, and thus have things such as hidden layers, activation functions and more to be able to work on more complex data. Since we only use 1 weight and bias, we have only 1 layer, and thus our neual network will only be able to solve for a y = mx + b linear relationship. <br />


                Here is how we will approach this problem:
                <img src='/blog1/fig2.png' style={{ width: '500px' }} className='border-black border my-5'></img>

                The first part: 'Start with random weights and bias' is easy.

                <SyntaxHighlighter language="python" style={darcula}>{code1}</SyntaxHighlighter>
                <br /> <br />
                Next, we need to 'calculate how the random weights and bias did' <br />
                To do this, I will create a simple 'loss function' that determines how the model is doing. <br />

                <SyntaxHighlighter language="python" style={darcula}>{code2}</SyntaxHighlighter>

                Next, we need to determine how/what to change in the weight/bias to make the model better. This is where back prop comes in. <br />
                <br />

                In extremely simple words, we want to see 'if you change the weight +.01, will the loss increase or decrease?' (and same for bias) <br />
                In math terms, we are finding the dirrivite of the loss function with respect to the weight. (and same for bias)<br /> <br />

                This is important because if you KNOW that increasing the weight will decrease the loss, you can simply increase the weight until the loss is close to 0 (perfect model). <br />




                Resources I used: <br />
                <div className="  text-blue-500 underline cursor-pointer flex flex-col">
                    <a href='https://www.youtube.com/watch?v=t509sv5MT0w'>LoRA explained (and a bit about precision and quantization)</a>
                    <a href='https://www.youtube.com/watch?v=TPcXVJ1VSRI'>Understanding 4bit Quantization: QLoRA explained (w/ Colab)</a>
                    <a href='https://medium.com/@techresearchspace/what-is-quantization-in-llm-01ba61968a51#:~:text=Quantization%20is%20a%20compression%20technique,making%20it%20less%20memory%20intensive.'>What is Quantization in LLM</a>
                </div>

            </div>


        </div>
    )
}

export default Blog1
