function FindProxyForURL(url, host) { 
    if (shExpMatch(host, "www.youtube.com"))
        { return "PROXY 51.68.132.179:30863; DIRECT" }
    if (shExpMatch(host, "youtube.com"))
        { return "PROXY 51.68.132.179:30863; DIRECT" }
}