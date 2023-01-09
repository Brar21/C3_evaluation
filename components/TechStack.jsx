import React from 'react'

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
        
        {
            List.map((el) => (<div key={el.id}>
                <ul>{el.title}</ul>
            </div>))
        }
        </>
  )
}

export default TechStack