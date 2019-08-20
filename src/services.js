import React from 'react';

export const projectsDir = () => {
    return [
        'byuls-faculty-cards.txt',
        'byuls-internships.txt',
        'dnd-companion.txt',
        'he-said-she-said.txt',
        'family-map-app.txt',
        'all.txt'
    ]
}

export const skillsDir = () => {
    return [
        'react.txt',
        'react-native.txt',
        'vue.txt',
        'node.txt',
        'entity-framework-core.txt',
        'all.txt'
    ]
}

export const expDir = () => {
    return [
        'N26.txt',
        'byu-lsit.txt',
        'all.txt'
    ]
}

export const hobbiesDir = () => {
    return [
        'frisbee.txt',
        'martial-arts.txt',
        'baking.txt',
        'all.txt'
    ]
}

export const contactDir = () => {
    return [
        'email.txt'
    ]
}

export const facultyCards = () => {
    return <div className="print-out">
        <h1>BYU Faculty Scheduler</h1>
        <div>This was an app to help scheduling meetings and generate a card for the staff to print and display outside their offices</div>
        <div>Technologies used: Vue, Entity Framework Core, MySql</div>
    </div>
}