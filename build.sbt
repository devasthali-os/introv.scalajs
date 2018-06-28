name := "scalajs-on-nodejs"

enablePlugins(ScalaJSPlugin)

version := "0.1"

scalaVersion := "2.12.6"

scalaJSUseMainModuleInitializer := true

//libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.5"

libraryDependencies += "org.querki" %%% "jquery-facade" % "1.2"

artifactPath in (Compile, fastOptJS) :=
  ((resourceDirectory in (Compile, fastOptJS)).value / ((moduleName in fastOptJS).value + "-opt.js"))