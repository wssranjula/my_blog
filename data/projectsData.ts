interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Outbound calling AI Agent with GPT4',
    description: `An AI agent that can make outbound calls and and gather information. IN the scenario we created AI agent to call and get confirmation for the Appointement`,
    imgSrc: '/static/images/1.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Inbound  call answering AI Agent with GPT4',
    description: `An AI agent that can answer incoming  calls and and gather information. Agent will analyse the intent and transfer the call to a human agent if required`,
    imgSrc: '/static/images/3.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Email Automation System with GPT4',
    description: `A system that will monitor incodming emails , tag it classify the email based on its urgency and genrate email response based on company bes practices and save it to drafts`,
    imgSrc: '/static/images/5.jpeg',
    href: 'https://www.google.com',
  },
  {
    title: 'Flowise/Voiceflow/BotPress Automations with Zapier/Make',
    description: `AI Assistant chatbot that will answer to your Questions about your Buisness or Applications,
    It can take orders behlaf of you schedule meetings and much more
    Used Python , OpenAI Assistants, AWS Lambda`,
    imgSrc: 'https://github.com/wssranjula/my_blog/blob/main/public/static/images/flow.PNG?raw=true',
    href: 'https://flowiseai.com',
  },
  {
    title: 'Resume Builder',
    description: `An Application that will Customize and Modify uploaded Resume for given new Job description
    users will be able to add there details and generate new Resume with selected Template. 
    Used Python ,Langchain, OpenAI , Flask 
     `,
    imgSrc: 'https://github.com/wssranjula/my_blog/blob/main/public/static/images/resume.PNG?raw=true',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Whatsapp/Teams/Skype Assistant chatbot',
    description: `Whatsapp Assistant chatbot that will answer to your Questions about your Buisness or Applications,
    It can take orders behlaf of you schedule meetings and much more
    Used Python , OpenAI Assistants, AWS Lambda`,
    imgSrc: 'https://github.com/wssranjula/my_blog/blob/main/public/static/images/wap.PNG?raw=true',
    href: 'https://www.google.com',
  },
  

]

export default projectsData
