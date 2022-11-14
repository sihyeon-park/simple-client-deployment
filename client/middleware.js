export const config = {
    matcher: '/'
}

export function middleware(request) {
    console.log(request)
    const url = new URL(request.url);

    url.pathname = '/bocked.html'

    return Response.redirect(url);
}
