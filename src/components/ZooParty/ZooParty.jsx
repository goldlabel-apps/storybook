import React from 'react';

export default function ZooParty(props) {
    const c = {
        title: `Default title`,
        backgroundColor: `#ccc`,
    }
    const { storybook } = props;
    if (storybook){
        if (storybook.title) c.title = storybook.title;
        if (storybook.backgroundColor) c.backgroundColor = storybook.backgroundColor;
    }
    return (
        <div>
            <h1>
                {c.title}
            </h1>
        </div>
    );
}



/*
    style={{
        // border: '1px solid red',
        color: 'white',
    }}
*/