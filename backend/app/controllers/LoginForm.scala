package controllers

/** @see
  *   https://github.com/playframework/play-samples/blob/2.8.x/play-scala-forms-example/app/controllers/WidgetForm.scala
  */
object LoginForm {
  import play.api.data.Forms._
  import play.api.data.Form

  case class Data(email: String, password: String)

  val form = Form(
    mapping(
      "email" -> nonEmptyText,
      "password" -> nonEmptyText
    )(Data.apply)(Data.unapply)
  )
}
