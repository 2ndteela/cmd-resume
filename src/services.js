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

export const fillSymbol = (symbol) => {
    const width = document.getElementById('terminal-window').clientWidth
    const count = Math.floor(width/7.15)
    const hash = <span>{symbol}</span>
    const arr = []

    for(let i = 0; i < count-2; i++) arr.push(hash)
    const toSend = <div className="row-flex">{arr.map(el => el)}</div> 
    return toSend
} 

export const facultyCards = () => {
    return <div className="print-out">
        {fillSymbol('#')}
        <h2 className="align-center justify-center" >BYU Faculty Scheduler</h2>
        {fillSymbol('#')}
        <br></br>
        <div className="white-color">Summary:</div>
        <div className="align-start pad-bottom">
            This was an app to help scheduling meetings and generate a card for the staff to print and display outside their offices. 
            Designing the custom schedule page was the biggest challege in this page. It adapts the start and end time of multiple employees and filters duplicate events</div>
        <div  className="white-color">Technologies used: 
        </div>
        <div className="pad-bottom">Vue, Entity Framework Core, MySql</div>

        <div className="white-color" >URL:</div>
        <a target="_blank" rel="noopener noreferrer" href="https://lsfacultyschedules.byu.edu/">https://lsfacultyschedules.byu.edu/</a>
    </div>
}

export const lsInterns = () => {
    return <div className="print-out">
        {fillSymbol('#')}
        <h2 className="align-center justify-center" >Life Sciences Internships</h2>
        {fillSymbol('#')}
        <br></br>
        <div className="white-color">Summary:</div>
        <div className="align-start pad-bottom">
            A site made to manage internships for the college of life scineces at BYU. 
        </div>
        <div  className="white-color">Technologies used: </div>
        <div className="pad-bottom">AngularJS, ASP.NET MVC, MicrosoftSQL</div>

        <div className="white-color" >URL:</div>
        <a target="_blank" rel="noopener noreferrer" href="https://lsinterns.byu.edu/">https://lsinterns.byu.edu/</a>
    </div>
}

export const dndCompanion = () => {
    return <div className="print-out">
        {fillSymbol('#')}
        <h2 className="align-center justify-center" >D&D Character Sheet</h2>
        {fillSymbol('#')}
        <br></br>
        <div className="white-color">Summary:</div>
        <div className="align-start pad-bottom">
            This progessive web app is the 4th edition of a side project I've been working on for years.
        </div>
        <div  className="white-color">Technologies used: </div>
        <div className="pad-bottom">React, Google Firebase</div>

        <div className="white-color" >URL:</div>
        <a target="_blank" rel="noopener noreferrer" href="https://dee-and-dee.firebaseapp.com/">https://dee-and-dee.firebaseapp.com/</a>

        <div>Email: test@gmail.com</div>
        <div>Password: test1234</div>
    </div>
}

export const heSaidSheSaid = () => {
    return <div className="print-out">
        {fillSymbol('#')}
        <h2>He Said, She Said</h2>
        {fillSymbol('#')}
        <br></br>
        <div className="white-color">Summary:</div>
        <div className="align-start pad-bottom">
            This game was an interesting idea a friend and I had of converting a pass and play game into an app. There is glitch or two that still need ironing out but 
            we have played it with lots of friends and everyone seems to love it. It was an interesting challenge that ended up using a circularly linked list as it's model.
        </div>
        <div  className="white-color">Technologies used: </div>
        <div className="pad-bottom">React, Google Firebase</div>

        <div className="white-color" >URL:</div>
        <a target="_blank" rel="noopener noreferrer" href="https://he-said-she-said-f275d.firebaseapp.com/">https://he-said-she-said-f275d.firebaseapp.com/</a>
    </div>
}

export const familyMap = () => {
    return <div className="print-out">
        {fillSymbol('#')}
        <h2>Family Map</h2>
        {fillSymbol('#')}
        <br></br>
        <div className="white-color">Summary:</div>
        <div className="align-start pad-bottom">    
            This was an Android app and API for a class that I was assigned to make. Code available upon request.
        </div>
        <div  className="white-color">Technologies used: </div>
        <div className="pad-bottom">Java, Android Studio</div>
    </div>
}

export const allProjects = () => {
    return <div>
        {facultyCards()}
        <br></br>
        {lsInterns()}
        <br></br>
        {dndCompanion()}
        <br></br>
        {heSaidSheSaid()}
        <br></br>
        {familyMap()}
    </div>
}

export const reactSkill = () => {
    return <div className="skill-div">
        {fillSymbol('=')}
        <h2>React</h2>
        {fillSymbol('=')}
        <br></br>
        <div>
            2 years of React expirience including using common packges like react-router-dom, redux, react-rewired and create-react-app. React is my preferred 
            framework to work with.
        </div>
        <br></br>
        <div className="row-flex white-color">Skill level: Expert</div>
    </div>
} 

export const reactNativeSkill = () => {
    return <div className="skill-div">
        {fillSymbol('=')}
        <h2>Native</h2>
        {fillSymbol('=')}
        <br></br>
        <div>
            2 apps made with React Native over the course of 4 months for a class
        </div>
        <br></br>
        <div className="row-flex white-color">Skill level: Moderate</div>
    </div>
}

export const vueSkill = () => {
    return <div className="skill-div">
    {fillSymbol('=')}
    <h2>Vue</h2>
    {fillSymbol('=')}
    <br></br>
    <div>
        1 year of working with Vue at my current job, where I was assigned to write a tutorial on Vue for the rest of my coworkers.
    </div>
    <br></br>
    <div className="row-flex white-color">Skill level: Expert</div>
</div>
}

export const nodeSkill = () => {
    return <div className="skill-div">
        {fillSymbol('=')}
        <h2>Node</h2>
        {fillSymbol('=')}
        <br></br>
        <div>
            2 years of Node expirience including using NPM, Express and Happi. 
        </div>
        <br></br>
        <div className="row-flex white-color">Skill level: Expert</div>
    </div>
}

export const efcoreSkill = () => {
    return <div className="skill-div">
        {fillSymbol('=')}
        <h2>Entity Framework Core</h2>
        {fillSymbol('=')}
        <br></br>
        <div>
            A C# api and server system that we recently switched to at my current job.
        </div>
        <br></br>
        <div className="row-flex white-color">Skill level: Moderate</div>
    </div>
}

export const allSkills = () => {
    return <div>
        {reactSkill()}
        <br></br>
        {reactNativeSkill()}
        <br></br>
        {vueSkill()}
        <br></br>
        {nodeSkill()}
        <br></br>
        {efcoreSkill()}
    </div>
}

export const n26Exp = () => {
    return <div className="skill-div">
        {fillSymbol('/')}
        <h2>N26</h2>
        {fillSymbol('/')}
        <br></br>
        <div>
            N26 is one of the fastest growing banks in Europe based in Berlin, Germany. I worked there as an intern in the Spring of 2017 where I learned React, Node, Git and Ember.js.
            While I was there I helped work on the front end of their internal tools board for customer service. 
        </div>
        <br></br>
        <div>Beginning of May 2017 - End of July 2017</div>
    </div>
}

export const lsitExp = () => {
    return <div className="skill-div">
        {fillSymbol('/')}
        <h2>Life Sciences IT</h2>
        {fillSymbol('/')}
        <br></br>
        <div>
            The college of Life Sciences at BYU has it's own internal IT office where I have worked as a full-stack developer on many projects, two of which are listed
            in the 'projects' directory. I have helped implament both font and back end solutions as well as train and assist other developers.
        </div>
        <br></br>
        <div>Augsut 2017 - Present</div>
    </div>
}

export const allExp = () => {
    return <div>
        {lsitExp()}
        <br></br>
        {n26Exp()}

    </div>
}

export const frisbeeHobby = () => {
    return <div className="print-out">
        {fillSymbol('*')}
        <h2>CHI Ultimate</h2>
        {fillSymbol('*')}
        <br></br>
        <div>
            I've been playing collegiate Ultimate frisbee with BYU the past 2 years and have loved it. The game isn't too big right now, even though almost every
            university has a team. It's a semi-competitive way for me to make good friends, travel and stay fit. To stay in shape for Utlimate we have a daily training
            regiment that includes practices, lifting and running which has helped me build discipline and drive, as well as physical strength.
        </div>
    </div>
}

export const martialArtHobby = () => {
    return <div className="print-out">
        {fillSymbol('*')}
        <h2>Martial Arts</h2>
        {fillSymbol('*')}
        <br></br>
        <div>
            I've been training in various martial arts for the past 6 years. I've studied traditional Budoshin Jiu Jitsu, Brazilian Jiu Jitsu, Krav Maga and 
            a little bit of kick boxing and Shotokan Karate. This has not only helped me learn to defend myself, but also a sense of control and clam in stressful
            situations.
        </div>
    </div>
}

export const bakingHobby = () => {
    return <div className="print-out">
        {fillSymbol('*')}
        <h2>Baking and Cooking</h2>
        {fillSymbol('*')}
        <br></br>
        <div>
            Baking and cooking really havsn't provided me any hard skills, but I've always thought that if eating is going to be essential to my life, might as well
            make food worth eating and sharing.
        </div>
    </div>
}

export const allHobbies = () => {
    return <div>
        {frisbeeHobby()}
        <br></br>
        {martialArtHobby()}
        <br></br>
        {bakingHobby()}
    </div>
}

export const email = () => {
    return <div>2ndteela@gmail.com</div>
}