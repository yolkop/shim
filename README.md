<div align='center'>
    <h1>shim</h1>
    <h3>by yolkbot</h3>
</div>

<br><br>

## about
shim is a copy of shell shockers that proxies all requests and allows for userscript injection. it works on any device, even chromebooks with locked-down extensions and devtools disabled.

shim functions as a copy of normal shell shockers, but when you visit the `/inject` page, you can inject userscripts that will run on the main game page. shim supports all tampermonkey userscripts to the best of its ability.

shim succeeds [crackedshell](https://github.com/VillainsRule/CrackedShell) with the notable design difference being silence - shim silently injects all scripts and does not disclose that scripts are injected via the URL. the only way to know that a website is shim and not normal shell is the presence of the `/inject` page. it also allows for scripts to be fetched from any URL, which is a nice perk following unsavory takedowns.

<br>

## setup
1. install [bun](https://bun.sh/) (node also supported)
2. clone this repo
3. run `bun install`
4. run `bun .`
5. play at http://localhost:6602

<br><br>
<h5 align='center'>made with ❤️</h5>