import React from 'react';

console.log('Hey this is a plugin!!');

export class SomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Yep, y'all can render me!</p>
        );
    }
}
