emby/jellyfin刮削器metatube链接跳转到javdb搜索番号的代理软件正则重写，效果演示在tg https://t.me/Pleasure_list1/1038
```
^https?:\/\/(?:[a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3})(?::\d+)?\/\?redirect=(?:.*:)?([a-zA-Z]{2,})(?:00|-)(\d+)$ 307 https://javdb.com/search?q=$1-$2
^https?:\/\/www\.avbase\.net/works/(?:[^:]+:)?([^&]+)$ 307 https://javdb.com/search?q=\U$1
^https?:\/\/www\.jav321\.com/video/.*?([a-zA-Z]+)00(\d*)([^&]*)$ 307 https://javdb.com/search?q=$1-$2
```
