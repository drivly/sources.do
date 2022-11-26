// curl -H "Host: zapier.com" -H "accept: application/json" --compressed "https://zapier.com/api/v4/implementations-meta/public/"

export default {
  'apps': () => fetch('https://zapier.com/api/v4/implementations-meta/public/', { headers: { accept: 'application/json' }})
}
