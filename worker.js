export default {
  fetch: (req, env) => env.SOURCES.get(env.SOURCES.idFromName(new URL(req.url).hostname)).fetch(req)
}

export class Countries {
  constructor(state, env) {
    this.state = state
    this.state.blockConcurrencyWhile(async () => {
      const this.config = await this.state.storage.get('config')
    })
  }
  async fetch(req) {
    const { pathname, search, searchParams } = new URL(req.url)
    const options = Object.fromEntries(searchParams)
    const [_, ...args] = pathname.split('/').map(arg => decodeURI(arg))
    const data = args && args[0] ? await this.state.storage.get(args[0]) : 
                                   await this.state.storage.list(options).then(list => Object.fromEntries(list)) 
    return new Response(JSON.stringify({ 
      api: {
        name: 'sources.do',
        icon: '⚡️',
        endpoints: {
          countries: 'https://countries.do.cf/?prefix=name.common',
          borders: 'https://countries.do.cf/?prefix=borders', 
        }
      },
      args,
      options,
      data,
      user: {
        
      }
    }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
