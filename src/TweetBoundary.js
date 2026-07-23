import React from 'react';

// Wraps an embedded <Tweet> so that a single failing tweet (e.g. a malformed
// API response) degrades to a simple link instead of white-screening the whole app.
class TweetBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <a
                    href={`https://x.com/i/status/${this.props.id}`}
                    className='block underline text-blue-500 mt-2'
                >
                    View tweet on X
                </a>
            );
        }
        return this.props.children;
    }
}

export default TweetBoundary;
