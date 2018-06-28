package com.duwamish.introv

import org.querki.jquery._
import scala.scalajs.js.Dynamic.{global => g}

object IntroV {

  private val indexPage: String =
    """
      <h1>welcome to IntroV</h1>
    """.stripMargin

  def main(args: Array[String]): Unit = {

    $(() => {
      g.console.log("welcome to IntroV v1")

      $("#headerText").text("welcome all the introvs")
    })
  }

}
