import React, { useMemo } from 'react';
import SideBar from '../Sidebar';
import { Tweet } from 'react-tweet';


const experiences = [
    {
        title: "Coinbase - Software Engineering Intern",
        date: "Summer 2025",
        description: [
            "Architected and implemented end-to-end content moderation system using Go, GraphQL, and MongoDB handling race conditions and escalation workflows for 300+ cases, reducing 150,000+ illegal content impressions",
            "Built data labeling platform for classifying social media posts (spam, high quality, etc) and ML data pipeline",
            "Built dynamic website for Base.app using JavaScript to serve content to waitlisted users, enabling seamless post sharing from mobile app beta users to potentially new users",
            "Developed Lin2PR Claude Code devtool with TypeScript, implementing OTEL telemetry tracking and systematic eval testbench using LLM judges for performance regression analysis",
            "Completed 3 fully-scoped internship projects in one summer while being youngest SWE intern in company history"
        ],
        tags: ["work-experience"],
        score: 0.5
    },
    {
        title: "djeet - Live DJ Mixing for Everyone",
        date: "October 2025",
        description: [
            "🏆 Won $225 first place at 2025 TVG Vibeathon at UT Austin!",
            "Built in just 5 hours - drag and drop DJ mixing platform for everyone",
            "Pick your songs and drag them onto the canvas, connect them with seamless transitions",
            "Live DJ mixing tool that makes music creation accessible to all skill levels",
            "Team project with Avi Agarwal, Rishik Kolpekwar, and Arjan Suri"
        ],
        video: "https://www.youtube.com/embed/Yv_T6-TViBY",
        links: [
            { text: "Live Demo", url: "https://djeet.vercel.app/" },
            { text: "Github Repo", url: "https://github.com/notaviagrawal/hackathon-dj" }
        ],
        tags: ["project"],
        score: 0.8
    },
    {
        title: "hashMind - Energy Market Prediction with Human Simulation",
        date: "2025",
        description: [
            "Real-time energy pricing visualization tool combining Texas ERCOT grid data with AI-powered scenario analysis",
            "Interactive map visualizing energy prices across Texas with color-coded points and heatmaps",
            "AI scenarios: Ask 'what if' questions (e.g., 'What happens if a hurricane hits Houston?') and see energy price reactions",
            "People simulation: 100 simulated Texans with unique personalities react to events and move around the map",
            "Live energy pricing from Texas grid via GridStatus API with realistic scenario modeling"
        ],
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/mara-hack" }
        ],
        tags: ["project", "ai"],
        score: 1.2
    },
    {
        title: "GameTok - TikTok for AI-Generated Games",
        date: "August 2025",
        description: [
            "Created TikTok-style infinite scroll platform for AI-generated video games",
            "Implemented prefetching and caching optimizations, utilized Morph LLM for real-time code generation",
            "Built full-stack application with built-in game generation from natural language prompts",
            "Built in 5 hours for YCombinator Hackathon 2025, showcasing rapid prototyping and innovative game delivery"
        ],
        video: "https://www.youtube.com/embed/oThf0wOOKQE",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/GameTok" }
        ],
        tags: ["project"],
        score: 1.5
    },
    {
        title: "WASP - $700 Winner @UT Austin Hackathon",
        date: "2024",
        description: [
            "Built tool to simulate thousands of UX research interviews using AI agents",
            "Won $700 at UT Austin hackathon — 1st place overall and AI category",
            "Enables instant A/B testing with browser agents for rapid UX iteration"
        ],
        video: "https://www.youtube.com/embed/wmsZRCeKpsU",
        tags: ["project"],
        score: 2
    },
    {
        title: "Jest - Marriage Pact for Jester West Dorm",
        date: "2024",
        description: [
            "Created marriage pact app specifically for Jester West dorm at UT Austin",
            "Achieved 300+ downloads among dorm residents",
            "Built social matching platform for college students"
        ],
        tweet: "1965289382631600231",
        tags: ["project"],
        score: 2.5
    },
    {
        title: "GoonBase - Patreon Built on Base",
        date: "2024",
        description: [
            "Built Patreon-style platform on Base blockchain for the baseapp community",
            "Implemented crypto-native creator economy features",
            "Enabled decentralized content monetization"
        ],
        tags: ["blockchain"],
        score: 3.5
    },
    {
        title: "GoonLock - MacOS Distraction Blocker",
        date: "2024",
        description: [
            "Built MacOS app that texts your ex if you're distracted",
            "Uses YOLOv8 computer vision to detect phone usage and automatically sends custom messages",
            "Integrated with macOS Messages app for automated notifications",
            "Features configurable recipients and custom message templates"
        ],
        video: "goonlock.mp4",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/goonlock" }
        ],
        tags: ["project"],
        score: 4.5
    },
    {
        title: "Ramba_Mamba Game Dev - YouTube Channel",
        date: "Age 13",
        description: [
            "Created educational content teaching 3D game development using Unity and C# since age 13",
            "Reached 250 subscribers, 20,000+ views, and built a Discord community of 2,000+ members",
            "Produced tutorials and guides for aspiring game developers",
            "Built engaged community around game development education"
        ],
        video: "https://www.youtube.com/embed/rD4c3j8jWJI",
        caption: "Sample tutorial from Ramba_Mamba YouTube channel",
        links: [
            { text: "YouTube Channel", url: "https://www.youtube.com/@Ramba_Mamba" }
        ],
        tags: ["project"],
        score: 5
    },
    {
        title: "Unagi - $16,000 in Prizes @ETHDenver",
        date: "12th Grade 2025",
        description: [
            "Built Unagi, a dePin network of autonomously verified security cameras",
            "Won $16,000 in prizes at ETHDenver 2025 with TxBlockchain",
            "EigenGames: Top 6 Finalist - $5k AWS credits; Autonome most innovate - $1.5k; Othentic - 'Most Loved'",
            "ManifoldLabs: First Place - $4k (10 $TAO); StoryProtocol: $3k; u2u_xyz: $3k"
        ],
        image: "unagi.png",

        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/unagi" },
            { text: "Tweet", url: "https://x.com/shreybirmiwal/status/1898750815159898375" }
        ],
        tags: ["project, blockchain"],
        score: 1
    },
    {
        title: "SOS - $3,500 Winner @OMI Hacks",
        date: "12th Grade 2024",
        description: [
            "Built an OMI (an ai necklace) app that detects when you are in danger and automatically contacts emergency services",
            "First Place: Won $1,500 cash (3k split amongst 2 winners) and $2,000 to visit San Fransisco in the OMI Hackathon in December 2024"
        ],
        video: "omiv2.mp4",
        caption: "Demo Video (went viral on Twitter)",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/sos" },
            { text: "Tweet", url: "https://x.com/shreybirmiwal/status/1857880411767967761" }
        ],
        tags: ["project"],
        score: 3
    },
    {
        title: "Loop - $3,000 Winner @EthSF",
        date: "12th Grade 2024",
        description: [
            "Built a decentralized RLHF (Reinforcement Learning with Human Feedback) platform on blockchain",
            "Enables crowdsourced AI fine-tuning through token-based incentives",
            "Won $3,000 in prizes from Hedera and AirDAO at ETHSF 2024 with Sree Duggirala from UT TxLabs"
        ],
        image: "loop.png",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/Loop-ethSF2024" },
            { text: "Tweet", url: "https://x.com/shreybirmiwal/status/1848496795820699768" }
        ],
        tags: ["blockchain"],
        score: 4
    },
    {
        title: "Akash Verifiable Compute - Student Researcher",
        date: "12th Grade 2024 - Ongoing",
        description: [
            "Researching use of Trusted Execution Environments for GPU verification through trustless benchmarks",
            "Working with Dr. Sriram Vishwanath from University of Texas and Akash Network",
            "Using ARM TrustZone and MbedTLS for cryptography on MCUXpresso LPCXpresso55S69"
        ],
        image: "trust.jpg",
        caption: "Experimenting with the ARM TrustZone",
        links: [
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/nand2tetris/" },
            { text: "Tweet", url: "https://x.com/shreybirmiwal/status/1832816031355580427" }

        ],
        tags: ["blockchain", "hardware"],
        score: 5
    },
    {
        title: "TxBlockchain Labs - Member",
        date: "11th Grade 2023 - Ongoing",
        description: [
            "Only highschooler on University of Texas competitive blockchain hackathon team",
            "Won total of $9,000+ cash and $5,000+ in AWS credits from hackathon winnings",
            "Used Solidity, ReactJS, and Web3.js to build dApps & pitched them"
        ],
        image: "ut.png",
        tags: ["blockchain"],
        score: 8
    },
    {
        title: "CryptoClash - $11,000 Winner @EthGlobal HackFS",
        date: "11th Grade 2024",
        description: [
            "Built a 3D, Multiplayer, Metaverse boxing video game w/NFTs using Unity in 3weeks during hackFS!",
            "Won $5k from MONAVERSE, $750 from ChainSafe, $5k AWS credits + $500 cash for top finalist"
        ],
        video: "https://www.youtube.com/embed/PpnPVjxfugs?si=FpxkMtcxKOhHJnbj",
        caption: "CryptoClash Video Game Trailer - Winner of EthGlobal HackFS",
        links: [
            { text: "Game Link", url: "https://rambamamba.itch.io/cryptoclash" },
            { text: "Github Repo", url: "https://github.com/shreybirmiwal/CryptoClash-HackFS2024" }
        ],
        tags: ["blockchain"],
        score: 4
    },
    {
        title: "High School Blockchain Club - President and Founder",
        date: "9th Grade 2021 - Ongoing",
        description: [
            "Founded club for people with interests in crypto and blockchain programming",
            "Became one of the fastest-growing club at high school with over 70 members in the first year",
            "Led meetings teaching blockchain concepts like ZK proofs"
        ],
        caption: "One of the first blockchain club meetings at the HS - success!",
        image: "blockchainClub.png",
        tags: ["blockchain"],
        score: 7
    },
    {
        title: "FedLearn - DeAI Project",
        date: "11th Grade 2023",
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
        tags: ["blockchain"],
        score: 10
    },
    {
        title: "CSL Summer Intern - ChainHub Foundation",
        date: "11th Grade 2023",
        description: [
            "Crypto Summer Lab (CSL) is a blockchain/AI startup accelerator run by Dr. Sriram Vishwanath from UT Austin",
            "Set up meetings, planned guest speakers, built demo day website using reactJS for 55+ VCs to watch from"
        ],
        tags: ["blockchain", "work-experience"],
        score: 15
    },
    {
        title: "TrainAIToken - DeAI Project",
        date: "11th Grade 2024",
        description: [
            "ScaleAI, but on blockchain, creating decentralized data labeling. Enabled cheaper costs & diverse perspectives reducing bias in AI",
            "Anyone can upload a dataset and pay for it to be labeled with $TAT tokens. Anyone can label data and get paid for it with $TAT tokens"
        ],
        image: "TAT.jpeg",
        caption: "Screenshot of trainAiToken dashboard - label to earn tokens!",
        links: [
            {
                text: "Github Repo", url: "https://github.com/shreybirmiwal/trainAI/"
            }
        ],
        tags: ["blockchain"],
        score: 14
    },
    {
        title: "Movement - $100 Winner @EthGlobal Frameworks",
        date: "11th Grade 2024",
        description: [
            "Built a decentralized farcaster frame that enables 'gofundme' X 'change.org' with cryptocurrency",
            "Made in 24 hours at EthGlobal Frameworks Hackathon, won $100 with the TxLabs team (Sree Duggirala)",
            "Enables 1. trackable funds post donation, 2. verifiable petition signations, 3. annoynmous donations, 4. instant payouts to recipients"
        ],
        video: "movement.mp4",
        links: [
            {
                text: "Github Repo", url: "https://github.com/shreybirmiwal/movement"
            }
        ],
        tags: ["blockchain"],
        score: 16

    },
    {
        "title": "Jump Finance - SWE intern",
        "date": "10th Grade Summer 2023",
        "description": [
            "Developed software to track loans, deposits, and student applications in ReactJS, NodeJS, and mySQL",
            "Automated JumpFinance student loan management from using WhatsApp to automated webapp"
        ],
        "image": null,
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 9
    },
    {
        "title": "Aspiring Students Directed Research (ASDRP) - Student Researcher",
        "date": "9th Grade Summer 2022 - 12th Grade 2024",
        "description": [
            "Developed weighted scoring methodology for drug safety with Python",
            "Utilized covariance matrix, z-score, correlation matrix, and other statistical methods to analyze data",
        ],
        "caption": "Presenting at the Southern California Conferences for Undergraduate Research!",
        "image": "asdrp.jpg",
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 11
    },
    {
        "title": "Convergent Forge (Org. at University of Texas) - SWE intern",
        "date": "9th Grade Summer 2022",
        "description": [
            "Led a team of UT students to create a website that enables students to sell products in an online mall quickly",
            "Handed project off to Junior Achievement enabling 12 companies launching on site",
        ],
        "caption": "Presenting at the University of Texas Convergent Expo day!",
        "image": "convergent.jpg",
        "video": null,
        "links": [],
        "tags": ["work-experience"],
        "score": 18
    },
    {
        "title": "Nand2Tetris",
        "date": "12th Grade 2024",
        "description": [
            "Built a computer from scratch using solely a NAND gate",
            "Includes a compiler, assembler, VM translator, and OS",
            "Followed nand2tetris.org textbook"
        ],
        "caption": "Notes constructing the CPU using parts developed earlier (starting from NAND gate)",
        "image": "nand2tetris.jpg",
        "video": null,
        "links": [
            {
                "text": "Github Repo",
                "url": "https://github.com/shreybirmiwal/nand2tetris"
            }
        ],
        "tags": ["hardware"],
        "score": 4
    },
    {
        "title": "TrackItNow - The Locker",
        "date": "10th Grade 2023",
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
        "score": 8.5
    },
    {
        "title": "InSight Chrome extension",
        "date": "10th Grade 2022",
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
        "score": 18
    },
    {
        "title": "Checkpoint.ai",
        "date": "11th Grade 2024",
        "description": [
            "Checkpoint.ai is an edtech AI grading assistant that evaluates the student's work and not just the final answer",
            "Allows teacher to give granular feedback on what steps the student missed in a problem AND have class analytics on common mistakes",
            "Simply upload an image of the correct work and Checkpoint.ai will grade the student's work based on the steps taken to get to the answer"
        ],
        "image": null,
        "video": "checkpointAI.mp4",
        "links": [],
        "tags": ["project"],
        "score": 11
    },
    {
        "title": "Edualize",
        "date": "10th Grade - 2023",
        "description": [
            "Edualize enables teachers to create interactive, 3d, quiz/homework assignments for students"
        ],
        "caption": "A quick demo showing a student solving a quiz on insects in Edualize",
        "image": null,
        "video": "edualize.mp4",
        "links": [],
        "tags": ["project"],
        "score": 16
    },
    {
        "title": "Stockr",
        "date": "10th Grade 2022",
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
        "score": 816
    },
    {
        "title": "RateMyJudge.xyz",
        "date": "10th grade 2022",
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
        "score": 17
    },

    {
        "title": "CollegePredictor",
        "date": "11th Grade 2024",
        "description": [
            "Webscraped r/collegeresults and performed data anlysis on posts to predict college admissions",
            "Performed PCA, correlation matrix, partial dependence plots, t-tests to analyze data",
            "Predicted college admissions with up to 90% accuracy"
        ],
        "caption": "A cool PCA plot from the CollegePredictor project!",
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
        "score": 8
    },


    {
        "title": "PaperDex",
        "date": "11th Grade 2024",
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
        "tags": ["blockchain"],
        "score": 20
    },



];
function Experiences() {
    const sortedExperiences = useMemo(() => {
        return experiences.sort((a, b) => a.score - b.score);
    }, []);


    return (
        <div className="flex flex-grow min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>interests</h1>


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

                        {exp.caption && <span className='italic'>{exp.caption}</span>}

                        {exp.links && exp.links.map((link, i) => (
                            <a key={i} href={link.url} className='block underline text-blue-500'>{link.text}</a>
                        ))}

                        {exp.tweet && <Tweet id={exp.tweet} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;
