import resume from "./Resume-Zebulun-McNeill.pdf"
import gif from "./giphy.gif"

function Contact() {
  return (
    <div className="contact">
      <h2>how to reach me</h2>
      <p>
        <a href="https://wa.me/+14692897017">WhatsApp</a>
        <a href="https://www.patreon.com/psyclapped" target="_blank">Patreon</a>
        <a href="https://medium.com/@psyclapped" target="_blank">Medium</a>
        <br/>
        <a href="https://www.linkedin.com/in/zebulun-mcneill/" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/psyclapped" target="_blank">Twitter</a>
        <a
          href="mailto:zeb.mcn@gmail.com?subject=I want to hire you&body=I'll pay you lots and lots of money. You're literally a unicorn developer with full-stack engineering skills and a decent sense of humor, and I think you'd make an excellent addition to my team. Let's do an $80,000/yr base salary plus benefits with a 100% remote position. Can you start next Monday?">Email</a>
        <br />
        <a href={resume} target="_blank">Resume</a>
        <a href="https://github.com/Psyclapped" target="_blank">GitHub</a>
        <a href={gif} id="of">OnlyFans</a>
      </p>
      <p>idk, i'm not perfect but i am me - and that's what's important, right?</p>
    </div>
  )
}


export default Contact;
