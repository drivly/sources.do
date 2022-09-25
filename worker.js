export const api = {
  icon: '🚀',
  name: 'sources.do',
  description: 'Data Source Management & Proxy',
  url: 'https://sources.do/api',
  type: 'https://apis.do/data',
  endpoints: {
    listSources: 'https://sources.do/sources',
    configureSource: 'https://sources.do/:source/set?target=example.com/api',
    listResources: 'https://sources.do/:source',
    getResource: 'https://sources.do/:source/:resource',
  },
  site: 'https://sources.do',
  login: 'https://sources.do/login',
  signup: 'https://sources.do/signup',
  subscribe: 'https://sources.do/subscribe',
  repo: 'https://github.com/drivly/sources.do',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    if (pathname != '/api' && !user.profile) return Response.redirect(origin + '/login')
    let [source, resource] = pathSegments
    const error = source == ':source' ? "Change ':source' in the URL to your desired source name" : undefined
    return new Response(JSON.stringify({ api, source, resource, error, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
