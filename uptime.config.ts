const pageConfig = {
  title: "Uptime",
  links: [
    { link: 'https://github.com/lirtual', label: 'GitHub' },
  ],
  logo: {
    text: 'UptimeFlare',
    link: 'https://uptime.lirtual.cloudns.org',
  },
  footerText: '',
}

const workerConfig = {
  monitors: [
    {
      id: 'openai_api',
      name: 'Openai API',
      method: 'GET',
      target: 'https://openai.lirtual.cloudns.org/favicon.ico',
      expectedCodes: [200,401],
    },
    {
      id: 'lobe_chat',
      name: 'LobeChat',
      method: 'GET',
      target: 'https://lobe.lirtual.cloudns.org/favicon.ico',
      statusPageLink: 'https://lobe.lirtual.cloudns.org/',
    },
    {
      id: 'rsshub',
      name: 'RSSHub',
      method: 'GET',
      target: 'https://rsshub.lirtual.cloudns.org/favicon.ico',
      statusPageLink: 'https://rsshub.lirtual.cloudns.org/',
    },
    {
      id: 'flare_drive',
      name: 'FlareDrive',
      method: 'GET',
      target: 'https://flaredrive.lirtual.cloudns.org/manifest.json',
      statusPageLink: 'https://flaredrive.lirtual.cloudns.org/',
    },
  ],
}

export { pageConfig, workerConfig }
