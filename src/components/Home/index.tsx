import React, { Component } from 'react';

interface HomeProps {
    name: string,
    add(x: number, y: number): number
};

class Home extends Component<HomeProps, {}> {

    render() {
        return (
            <div>
                This is Home Page
            </div>
        )
    }
}

export default Home;