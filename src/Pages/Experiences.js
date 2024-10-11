import React, { useState, useEffect } from 'react';

const experiences = [/* Your JSON data */];

function ExperiencesPage() {
    const [allTags, setAllTags] = useState([]);

    // Collect unique tags from experiences
    useEffect(() => {
        const uniqueTags = new Set();
        experiences.forEach(exp => {
            exp.tags.forEach(tag => uniqueTags.add(tag));
        });
        setAllTags([...uniqueTags]);
    }, [experiences]);

    return (
        <div>
            <h1>Experiences</h1>

            {/* List all tags */}
            <div>
                <h3>Filter by Tags:</h3>
                {allTags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                ))}
            </div>

            {/* Render the experiences */}
            <div>
                {experiences.map((exp, idx) => (
                    <div key={idx}>
                        <h2>{exp.title}</h2>
                        <h3>{exp.date_start} - {exp.date_end || "Present"}</h3>
                        <p>{exp.body_text}</p>

                        {exp.image && <img src={exp.image} alt={exp.title} />}
                        {exp.media && <video src={exp.media} controls></video>}
                        {exp.link && <a href={exp.link}>More Info</a>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperiencesPage;
