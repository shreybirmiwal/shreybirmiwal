import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred style\


function Blog0() {

    const codeString =
        `import numpy as np

def calc_memory(matrix):
    return matrix.nbytes * 8

def quantize_matrix(matrix):
    return np.round(matrix * 127).astype(np.int8)

ogMatrix = np.array([[.002123, .88533, .12055], [.94944, .1345, .913], [.0002, .0023, .0024]])
print("Matrix:")
print(ogMatrix)
print("Memory of matrix : " + str(calc_memory(ogMatrix)))

qMatrix = quantize_matrix(ogMatrix)
print("Quantized Matrix:")
print(qMatrix)
print("Memory of quantized matrix : " + str(calc_memory(qMatrix)))
`;


    return (
        <div>
            <h1 className='h1'>
                [0] Simplified Quantization Program in Python
            </h1>
            <h2> 4/22/2024 - Shrey Birmiwal </h2>

            <div className='mt-5'>
                Hi, this is my first post about learning about LLMs. <br />
                This is how I made an extremely simplified quantization example using Python!<br /><br />
                LLM models have an extremely large amount of parameters. For example, GPT3 has 175 billion parameters. This makes tuning the LLM to custom uses very expensive and intensive. One of the large expenses that this causes in fine tuning is gpu memory. <br /><br />


                Why? Here is an example of a matrix from a neural network: <br />
            </div>

            <SyntaxHighlighter language="python" style={darcula}>
                [[.002123, .88533, .12055], [.94944, .1345, .913], [.0002, .0023, .0024]]
            </SyntaxHighlighter>

            <div>
                <br />
                Each entry in the matrix is a float, usually a float32.
                In memory each float32 is contained like this:
            </div>


            <img src="blog0.png" alt="Matrix Memory" className='my-5' style={{ width: '800px' }} />


            <div>
                <br />
                You can see that it requires 32 bits because 1 bit is allocated to determine the sign of the float, 8 bits to the exponent, and 23 bits to the fraction.
                This means that in order to store a large matrix with a lot of float32, we need a lot of memory. This makes it very hard to fine tune / edit these LLM’s on local machines w/relatively weak GPUs. <br /><br />

                If we can decrease the amount of bits required per matrix, we can decrease the amount of memory required significantly. Thus, one solution is to use quantization to abstract each entry from a float32 to something like a int8. We can do this though basic math (in this just simplified to multiplication, while the real quantization is much more complicated). Note that quantimation leads to lossy data because we loose precision as a tradeoff for performace.

                <br /> <br />
                Here’s the full code:
            </div>


            <SyntaxHighlighter language="python" style={darcula}>
                {codeString}
            </SyntaxHighlighter>

            <div className='my-5'>
                The code above creates a matrix, prints the memory required to store the matrix, quantizes the matrix, prints the quantized matrix, and prints the memory required to store the quantized matrix. <br />
                The output is: <br />
            </div>

            <SyntaxHighlighter language="python" style={darcula}>
                {
                    `
                Matrix:
                [[2.1230e-03 8.8533e-01 1.2055e-01]
                [9.4944e-01 1.3450e-01 9.1300e-01]
                [2.0000e-04 2.3000e-03 2.4000e-03]]
                Memory of matrix : 576

                Quantized Matrix:
                [[  0 112  15]
                [121  17 116]
                [  0   0   0]]
                Memory of quantized matrix : 72
                `
                }
            </SyntaxHighlighter>

            <div>
                <br />
                As you can see, it reduces the amount of ‘memory units’ from 576 to 72
                <br />


                This is <span className="font-extrabold text-red-600 underline">8X decrease in memory usage</span>  (and this has no extra optimization)

                <br /> <br />
                Resources I used: <br />
                <div className="text-blue-500 underline cursor-pointer flex flex-col">
                    <a href='https://www.youtube.com/watch?v=t509sv5MT0w'>LoRA explained (and a bit about precision and quantization)</a>
                    <a href='https://www.youtube.com/watch?v=TPcXVJ1VSRI'>Understanding 4bit Quantization: QLoRA explained (w/ Colab)</a>
                    <a href='https://medium.com/@techresearchspace/what-is-quantization-in-llm-01ba61968a51#:~:text=Quantization%20is%20a%20compression%20technique,making%20it%20less%20memory%20intensive.'>What is Quantization in LLM</a>
                </div>

            </div>


        </div>
    )
}

export default Blog0
