import React, { useState, useMemo } from 'react';
import SideBar from '../Sidebar';
import { Tweet } from 'react-tweet';

const experiences = [
    {
        title: "Akash Verifiable Compute - Student Researcher",
        date: "12th grade 2024 - Ongoing",
        description: [
            "Researching use of Trusted Execution Environments for GPU verification through trustless benchmarks",
            "Working with Dr. Sriram Vishwanath from University of Texas and Akash Network",
            "Using ARM TrustZone and MbedTLS for cryptography on MCUXpresso LPCXpresso55S69"
        ],
        image: "trust.jpg",
        tags: ["blockchain", "work-experience", "hardware"],
        score: 100
    },
    {
        title: "TxBlockchain Labs - Member",
        date: "11th grade 2023 - Ongoing",
        description: [
            "Only highschooler on University of Texas competitive blockchain hackathon team",
            "Won total of $6,000+ cash and $5,000+ in AWS credits from hackathon winnings",
            "Used Solidity, ReactJS, and Web3.js to build dApps & pitched them"
        ],
        image: "ut.png",
        tags: ["blockchain", "hackathon"],
        score: 90
    },
    {
        title: "CryptoClash - Winner @EthGlobal HackFS",
        date: "11th grade 2024",
        description: [
            "Built a 3D, Multiplayer, Metaverse boxing video game w/NFTs using Unity in 3weeks during hackFS!",
            "Won $5k from MONAVERSE, $750 from ChainSafe, $5k AWS credits + $500 cash for top finalist"
        ],
        video: "https://www.youtube.com/embed/PpnPVjxfugs?si=FpxkMtcxKOhHJnbj",
        links: [
            { text: "Game Link", url: "https://rambamamba.itch.io/cryptoclash" },
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/CryptoClash-HackFS2024" }
        ],
        tags: ["blockchain", "hackathon", "project"],
        score: 95
    },
    {
        title: "High School Blockchain Club - President and Founder",
        date: "9th grade 2021 - Ongoing",
        description: [
            "Founded club for people with interests in crypto and blockchain programming",
            "Became one of the fastest-growing club at high school with over 70 members in the first year",
            "Led meetings teaching blockchain concepts like ZK proofs"
        ],
        image: "blockchainClub.png",
        tags: ["blockchain"],
        score: 95
    },
    {
        title: "FedLearn - DeAI Project",
        date: "11th grade 2023",
        description: [
            "Federated learning is a method of training a machine learning model without sharing data to a central server",
            "Build a demo website to simulate 3 clients pooling data to create a federated model without leaking data to each other or a central server"
        ],
        video: "https://www.youtube.com/embed/aflfj00Rc-w?si=nmmPtBINmHhehitb",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/fedlearning" },
            { text: "Try now!", url: "https://fedlearning.onrender.com/" },
            { text: "Blog Post", url: "https://shreybirmiwal.vercel.app/blog/2" }
        ],
        tags: ["blockchain", "project"],
        score: 85
    },
    {
        title: "CSL Summer Intern - ChainHub Foundation",
        date: "11th grade 2023",
        description: [
            "Crypto Summer Lab (CSL) is a blockchain/AI startup accelerator run by Dr. Sriram Vishwanath from UT Austin",
            "Set up meetings, planned guest speakers, built demo day website using reactJS for 55+ VCs to watch from"
        ],
        tags: ["blockchain", "work-experience"],
        score: 85
    },
    {
        title: "TrainAIToken - DeAI Project",
        date: "11th grade 2024",
        description: [
            "ScaleAI, but on blockchain, creating decentralized data labeling. Enabled cheaper costs & diverse perspectives reducing bias in AI",
            "Anyone can upload a dataset and pay for it to be labeled with $TAT tokens. Anyone can label data and get paid for it with $TAT tokens"
        ],
        image: "TAT.jpeg",
        links: [
            {
                text: "Github Repo", url: "https://github.com/shreybirmiwal/trainAI/"
            }
        ],
        tags: ["blockchain", "project"],
        score: 80
    },
    {
        title: "Movement - Hackathon Project",
        date: "11th grade 2024",
        description: [
            "Built a decentralized farcaster frame that enables 'gofundme' X 'change.org' with cryptocurrency",
            "Made in 24 hours at EthGlobal Frameworks Hackathon, won $100",
            "Enables 1. trackable funds post donation, 2. verifiable petition signations, 3. annoynmous donations, 4. instant payouts to recipients"
        ],
        video: "movement.mp4",
        links: [
            {
                text: "Github Repo", url: "https://github.com/shreybirmiwal/movement"
            }
        ],
        tags: ["blockchain", "hackathon", "project"],
        score: 80

    },
    {
        "title": "Jump Finance - SWE intern",
        "date": "10th grade Summer 2023",
        "description": [
            "Developed software to track loans, deposits, and student applications in ReactJS, NodeJS, and mySQL",
            "Automated JumpFinance student loan management from using WhatsApp to automated webapp"
        ],
        "image": null,
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 8
    },
    {
        "title": "Aspiring Students Directed Research (ASDRP) - Student Researcher",
        "date": "9th grade Summer 2022 - 12th grade 2024",
        "description": [
            "Developed weighted scoring methodology for drug safety with Python",
            "Utilized covariance matrix, z-score, correlation matrix, and other statistical methods to analyze data",
            "Presented the research findings at Southern California Conferences for Undergraduate Research"
        ],
        "image": "asdrp.jpg",
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 9
    },
    {
        "title": "Convergent Forge (Org. at University of Texas) - SWE intern",
        "date": "9th grade Summer 2022",
        "description": [
            "Led a team of UT students to create a website that enables students to sell products in an online mall quickly",
            "Handed project off to Junior Achievement enabling 12 companies launching on site",
            "Presented at the UT Convergent Expo"
        ],
        "image": "convergent.jpg",
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 8
    },
    {
        "title": "Nand2Tetris",
        "date": "12th grade 2024",
        "description": [
            "Built a computer from scratch using solely a NAND gate",
            "Includes a compiler, assembler, VM translator, and OS",
            "Followed nand2tetris.org textbook"
        ],
        "image": "nand2tetris.jpg",
        "video": null,
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/nand2tetris"
            }
        ],
        "tags": ["hardware", "project"],
        "score": 9
    },
    {
        "title": "TrackItNow - The Locker",
        "date": "School 2023",
        "description": [
            "Built an app to automate donation inventory tracking for a nonprofit organization, The Locker",
            "Included analytics like low supply alerts and predicted supply needs",
            "In use by Georgetown and Westwood High School branches - tracking $15,000+ of inventory"
        ],
        "image": null,
        "video": "trackitnow.mp4",
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/trackitnow"
            }
        ],
        "tags": ["project"],
        "score": 9
    },
    {
        "title": "InSight Chrome extension",
        "date": "10th School 2022",
        "description": [
            "Built a chrome extension that uses NLP to analyze text on a webpage and generate/find an image representing it",
            "Aims to help students learn better by providing visual representation of text"
        ],
        "image": null,
        "video": "inSight.mp4",
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/inSight-Chrome-Extension"
            }
        ],
        "tags": ["project"],
        "score": 8
    },
    {
        "title": "Checkpoint.ai",
        "date": "11th grade School 2024",
        "description": [
            "Checkpoint.ai is an edtech AI grading assistant that evaluates the student's work and not just the final answer",
            "Allows teacher to give granular feedback on what steps the student missed in a problem AND have class analytics on common mistakes",
            "Simply upload an image of the correct work and Checkpoint.ai will grade the student's work based on the steps taken to get to the answer"
        ],
        "image": null,
        "video": "checkpointAI.mp4",
        "links": [],
        "tags": ["project"],
        "score": 9
    },
    {
        "title": "Edualize",
        "date": "School 2023",
        "description": [
            "Edualize enables teachers to create interactive, 3d, quiz/homework assignments for students"
        ],
        "image": null,
        "video": "edualize.mp4",
        "links": [],
        "tags": ["project"],
        "score": 8
    },
    {
        "title": "Stockr",
        "date": "School 2023",
        "description": [
            "Stockr is an 'aim trainer' for stock charts",
            "Stockr displays real, historical data and prompts users to make a prediction of what happened next in history by drawing",
            "Users get instant feedback on what actually happened next in historical data"
        ],
        "image": null,
        "video": "stockr.mp4",
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/stockr-game"
            },
            {
                "text": "Try now!",
                "url": "https://stockr-game.onrender.com/"
            }
        ],
        "tags": ["project"],
        "score": 8
    },
    {
        "title": "RateMyJudge.xyz",
        "date": "School 2023",
        "description": [
            "A website that allows students to rate judges in HS debate tournaments",
            "Enables more fair debate judging through shared information pool about judge preferences (useful for judge strikes, etc)"
        ],
        "image": null,
        "video": "ratemyjudge.mp4",
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/ratemyjudge"
            },
            {
                "text": "Try now!",
                "url": "https://www.ratemyjudge.xyz/"
            }
        ],
        "tags": ["project"],
        "score": 7
    },

    {
        "title": "CollegePredictor",
        "date": "11th grade summer 2024",
        "description": [
            "Webscraped r/collegeresults and performed data anlysis on posts to predict college admissions",
            "Performed PCA, correlation matrix, partial dependence plots, t-tests to analyze data",
            "Predicted college admissions with up to 90% accuracy"
        ],
        "image": 'college_predict.png',
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/college-predictor"
            },
            {
                "text": "Twitter Post",
                "url": "https://x.com/shreybirmiwal/status/1819460900346384763"
            }
        ],
        "tags": ["project"],
        "score": 7
    },


    {
        "title": "PaperDex",
        "date": "11th grade summer 2024",
        "description": [
            "Chrome extension to paper trade (simulate) cryptocurreny trading",
        ],
        "image": null,
        "video": "paperdex.mp4",
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/PaperDex"
            }
        ],
        "tags": ["project"],
        "score": 7
    },



];
function Experiences() {
    const [activeTag, setActiveTag] = useState("all");
    const tags = useMemo(() => {
        const allTags = experiences.flatMap(exp => exp.tags);
        return ["all", ...new Set(allTags)];
    }, []);

    const filteredExperiences = useMemo(() => {
        if (activeTag === "all") {
            return experiences;
        }
        return experiences.filter(exp => exp.tags.includes(activeTag));
    }, [activeTag]);

    const sortedExperiences = useMemo(() => {
        return filteredExperiences.sort((a, b) => b.score - a.score);
    }, [filteredExperiences]);

    // Define specific colors for each tag
    const tagColors = {
        blockchain: 'bg-purple-200 text-purple-800',
        'work-experience': 'bg-yellow-200 text-yellow-800',
        hardware: 'bg-green-200 text-green-800',
        project: 'bg-blue-200 text-blue-800',
        hackathon: 'bg-red-200 text-red-800',
    };

    return (
        <div className="flex flex-grow min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Experiences</h1>

                {/* Tags Filter */}
                Filter Results: {activeTag}
                <div className="mb-5">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className={`mr-2 mb-2 px-3 py-1 rounded text-sm transition-colors 
                                ${activeTag === tag
                                    ? `${tagColors[tag] || 'bg-gray-600 text-white'}`
                                    : `${tagColors[tag] || 'bg-gray-300'} hover:bg-opacity-60`}`}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Experience Cards */}
                {sortedExperiences.map((exp, index) => (
                    <div key={index} className='mt-10'>
                        <h2 className='h2 underline'>{exp.title}</h2>
                        <h3 className='h3'>{exp.date}</h3>

                        {/* Experience Details */}
                        {exp.description.map((desc, i) => (
                            <p key={i}>- {desc}</p>
                        ))}

                        {exp.image && <img src={exp.image} alt={exp.title} className='mt-5' width={500} />}

                        {exp.video && (
                            exp.video.includes('youtube.com') || exp.video.includes('youtu.be') ? (
                                // YouTube video
                                <iframe
                                    width="500"
                                    height="330"
                                    src={`${exp.video}?autoplay=0`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className='mt-5'
                                ></iframe>
                            ) : (
                                // Local or direct video file
                                <video
                                    width="500"
                                    height="330"
                                    controls
                                    className="mt-5"
                                >
                                    <source src={exp.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        )}

                        {exp.links && exp.links.map((link, i) => (
                            <a key={i} href={link.url} className='block underline text-blue-500 mt-3'>{link.text}</a>
                        ))}

                        {exp.tweet && <Tweet id={exp.tweet} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;