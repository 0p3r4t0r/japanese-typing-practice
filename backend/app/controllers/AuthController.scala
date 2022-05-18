package controllers

import javax.inject.Inject
import play.api.data._
import play.api.i18n._
import play.api.mvc._

import scala.collection._

/** @see
  *   https://github.com/playframework/play-samples/blob/2.8.x/play-scala-forms-example/app/controllers/WidgetController.scala
  */
class AuthController @Inject() (cc: MessagesControllerComponents)
    extends MessagesAbstractController(cc) {

  import LoginForm._

  private val postUrl = routes.AuthController.login()

  def index = Action { implicit request: MessagesRequest[AnyContent] =>
    Ok(views.html.login(form, postUrl))
  }

  def login = Action { implicit request: MessagesRequest[AnyContent] =>
    val errorFunction = { formWithErrors: Form[Data] =>
      BadRequest(views.html.login(formWithErrors, postUrl))
    }

    val successFunction = { data: Data => Ok(views.html.login(form, postUrl)) }

    val formValidationResult = form.bindFromRequest()
    formValidationResult.fold(errorFunction, successFunction)
  }

}
