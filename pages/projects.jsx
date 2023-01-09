import React from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/projects.module.css'
import {AiOutlineStar} from "react-icons/ai"
import {TbGitFork} from 'react-icons/tb'
const Projects=({user}) =>
{
   
    const router=useRouter()

  return (
      <div className={styles.main}>
          {user&&user.map((el) => (
              <div key={el.id} onClick={()=>router.push(`https://github.com/Brar21/${user.html_url}`)} className={styles.project}>
                  <h4>{el.name}</h4>
                  <p>{el.description}</p>
                  <div className={styles.mainCount}>
                      <div className={styles.counts}>
                          <p style={{alignContent:'center',display:'flex'}}><AiOutlineStar fontSize={20} color='yellow'/> &nbsp;{el.stargazers_count}</p>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                  <p style={{alignContent:'center',display:'flex'}}><TbGitFork fontSize={20} color='black' fontWeight={500}/> &nbsp;{el.forks_count}</p>
                      </div>  
                  <h5>{el.language}</h5>
                  </div>
              </div>
          ))}
    </div>
  )
}

export default Projects

export async function getStaticProps()
{
    let res=await fetch(`https://api.github.com/search/repositories?q=user:brar21+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=await res.json();
    return {
       props:{user:data.items}
    }
}