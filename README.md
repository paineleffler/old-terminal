## About

This is just a fun little website that looks like a hyper terminal. This is the 2nd iteration of this idea, originally it was built in Vue 4ish years ago, a year later (2019) it was rebuilt using React.js and a Node.js server for the Twilio API.

There are some text "files" that you can interact with:

**List out files**
> `ls`
> 
> `about.txt hello.txt portfolio.txt skills.txt  text.js`

**Show Contents of About.txt**
> `cat about.txt`
> 
> `I'm Paine! I'm a frontend developer at Shopify and I have a passion for creating and UI & UX. In my free time I enjoy cooking and making art.`

**Contacting Me**
> `node text.js 1234567890 hi there`
> 
> `Your text message was sent!`


## Future
v3.0 TBD

* I may recreate this in Remix and redeploy onto Netlify. It is currently hosted on an ancient Dokku instance in Digital Ocean 🦈.
*  Another improvement might be standardizing the theme to use Hyper's theme settings so that it will be much easier to add new ones 👔.
*  More keyboard interactions. I think finding a balance between a true terminal and a fun emulation needs to be found. It's very tedious to add these ⌨️.
*  More fun easter eggs 🐣
*  TailwindCSS instead of styled components 💨
*  Vanilla React Context instead of Recoil.js 🍦
*  handle multi-line output 📜
