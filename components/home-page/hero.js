import Image from 'next/image'
import classes from './hero.module.css'
const hero = () => {
  return (
    <section className={classes.hero}>
    <div className={classes.image}>
        <Image src='/images/subhra-img.jpg' alt="An image showing Subhrajyoti" width={500} height={500}/>
    </div>
    <h1>I am Subhrajyoti Naskar</h1>
    <p>I write blogs about frontend development</p>
    </section>

  )
}

export default hero