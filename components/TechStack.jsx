import React from 'react'
import styles from '../styles/Home.module.css'

const List=[
    {
        'title': "HTML",
        'id':1,
    },
    {
        'title': "CSS",
        'id':2,
    }, {
        'title': "Javascript",
        'id':3,
    }, {
        'title': "Python",
        'id':4,
    }, {
        'title': "Typescript",
        'id':5,
    }, {
        'title': "Express.js",
        'id':6,
    }, {
        'title': "React.js",
        'id':7,
    }, {
        'title': "MongoDB",
        'id':8,
    },{
        'title': "Chakra-UI",
        'id':9, 
    },{
        'title': "Bootstrap",
        'id':10, 
    }
    
]
const TechStack = () => {
    return (
        <>
        
       <div className={styles.tech}>
                
                
                <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>Typescript</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>MongoDB</li>
            <li>Chakra-UI</li>
            <li>Bootstrap</li></ul>
                </div>
      
        </>
  )
}

export default TechStack