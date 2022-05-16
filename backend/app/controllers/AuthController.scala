package controllers

import javax.inject._
import play.api._
import play.api.mvc._

@Singleton
class AuthController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to login.
   */
  def login() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.login())
  }
}
