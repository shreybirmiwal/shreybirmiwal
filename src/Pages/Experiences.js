import React, { useState, useEffect } from 'react';
import SideBar from '../Sidebar';
import experiencesData from '../data/experiences.json'; // Your JSON data

function Experiences() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredExperiences, setFilteredExperiences] = useState(experiencesData);

    // Filter experiences by selected tags
    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredExperiences(experiencesData);
        } else {
            setFilteredExperiences(
                experiencesData.filter(exp =>
                    selectedTags.every(tag => exp.tags.includes(tag))
                )
            );
        }
    }, [selectedTags]);

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="flex flex-grow min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className="h1 mb-5">Experiences</h1>

                {/* Tag Filters */}
                <div className="mb-5">
                    {['Top 5', 'Blockchain', 'EdTech', 'Hardware', 'AI'].map(tag => (
                        <button
                            key={tag}
                            className={`mr-2 mb-2 px-3 py-1 border ${selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-white'}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Render Experiences */}
                <div>
                    {filteredExperiences.map((exp, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="h2 underline">{exp.title}</h2>
                            <h3 className="h3">{exp.dateRange}</h3>
                            <h3 className="h3 mb-5">Tags: {exp.tags.join(', ')}</h3>

                            {exp.bodyText.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}

                            {exp.image && <img src={exp.image} alt={exp.title} className="mt-5" width={500} />}
                            {exp.media && exp.media.map((media, i) => (
                                <video key={i} src={media} controls className="mt-5" width="800" />
                            ))}

                            {exp.link && (
                                <a href={exp.link} className="underline text-blue-500 mt-3">Learn more</a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
