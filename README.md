scalajs on nodejs
-----------------

```
## install sjs
npm install

## transpile scalajs to js, using a task defined in package.js
npm run sbtInit ## it sets up sbt in node_modules/sbt 
npm run sbtBuild ## NOTE: needs JRE installed
```

```
$ npm run sjs
[info] Loading settings from idea.sbt ...
[info] Loading global plugins from /Users/prayagupd/.sbt/1.0/plugins
[info] Loading settings from plugins.sbt ...
[info] Loading project definition from /Users/prayagupd/sc212/scalajs-on-nodejs/project
[info] Loading settings from build.sbt ...
[info] Set current project to scalajs-on-nodejs (in build file:/Users/prayagupd/sc212/scalajs-on-nodejs/)
[info] Fast optimizing /Users/prayagupd/scalajs-on-nodejs/target/scala-2.12/scalajs-on-nodejs-fastopt.js
[info] Running com.duwamish.introv.IntroV
welcome to IntroV
[success] Total time: 3 s, completed Jun 27, 2018 8:04:28 PM
```

```
$ node target/scala-2.12/scalajs-on-nodejs-fastopt.js
welcome to IntroV
```

run on nodejs
-------------

```
npm start
```

go to http://localhost:8080/
