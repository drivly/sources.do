export const api = {
  icon: '🚀',
  name: 'sources.do',
  description: 'Data Source Management & Proxy',
  url: 'https://sources.do/api',
  type: 'https://apis.do/data',
  endpoints: {
    sources: 'https://sources.do/subscribe',
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
    if (pathname == '/subscribe' && !user.profile) return Response.redirect(origin + '/login')

    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}