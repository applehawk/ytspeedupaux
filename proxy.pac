function FindProxyForURL(url, host) { 

    if (shExpMatch(host, "*.youtube.com") || shExpMatch(host, "www.youtube.com"))
        { return "PROXY 51.68.132.179:30863" }

    return "DIRECT"
}