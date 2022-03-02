// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import connect from "../../database/connection";
import users from "../../models/user"
export default class AuthController {

  async register({request,response}){ 

    console.log(connect(users))
   
    

    response.send('ok')
   
  }


  login(req, res){

    const email = req.input('email')
    const password = req.input('password')


    res.render('quale')
  }
}