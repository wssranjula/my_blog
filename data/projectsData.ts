interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'A  Generative AI Portal',
    description: `A Genrative Application Portal with UI to Code, Code Reviewer, Test Case Genrater and Enterprise GPT4V tools`,
    imgSrc: '/static/images/aibud.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Resume Builder',
    description: `An Application that will Customize and Modify uploaded Resume for given new Job description
    users will be able to add there details and generate new Resume with selected Template. 
    Used Python ,Langchain, OpenAI , Flask 
     `,
    imgSrc: '/static/images/resume.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Whatsapp/Teams/Skype Assistant chatbot',
    description: `Whatsapp Assistant chatbot that will answer to your Questions about your Buisness or Applications,
    It can take orders behlaf of you schedule meetings and much more
    Used Python , OpenAI Assistants, AWS Lambda`,
    imgSrc: '/static/images/wap.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Flowise/Voiceflow/BotPress Automations with Zapier/Make',
    description: `AI Assistant chatbot that will answer to your Questions about your Buisness or Applications,
    It can take orders behlaf of you schedule meetings and much more
    Used Python , OpenAI Assistants, AWS Lambda`,
    imgSrc: '/static/images/flow.png',
    href: 'https://flowiseai.com',
  },

]

export default projectsData
