// ==UserScript==
// @name         Metatube & AVBase Redirect to JavDB
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Redirects specific links from Metatube and AVBase to their corresponding search pages on JavDB.
// @author       You
// @match        *://metatube.*
// @match        *://www.avbase.net/works/dasu:*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前页面的 URL
    const currentUrl = window.location.href;

    // --- 规则1: 匹配 Metatube 链接 ---
    // 定义 Metatube 的正则表达式，用于从 URL 中提取番号（如 "DASS-587"）
    const metatubeRegex = /^https?:\/\/metatube.*?\/.*?redirect=.*?([a-zA-Z]+)(?:00|-)?(\d{3})$/;
    const metatubeMatch = currentUrl.match(metatubeRegex);

    if (metatubeMatch && metatubeMatch[1] && metatubeMatch[2]) {
        const prefix = metatubeMatch[1];
        const number = metatubeMatch[2];
        const workCode = `${prefix}-${number}`;
        const targetUrl = `https://javdb.com/search?q=${workCode}`;
        // 执行重定向并停止脚本运行
        window.location.replace(targetUrl);
        return;
    }

    // --- 规则2: 匹配 AVBase 链接 ---
    // 定义 AVBase 的正则表达式，用于从 URL 中提取番号
    const avbaseRegex = /dasu:([A-Za-z0-9-]+)/;
    const avbaseMatch = currentUrl.match(avbaseRegex);

    if (avbaseMatch && avbaseMatch[1]) {
        const workCode = avbaseMatch[1];
        const targetUrl = `https://javdb.com/search?q=${workCode}`;
        // 执行重定向
        window.location.replace(targetUrl);
    }
})();
