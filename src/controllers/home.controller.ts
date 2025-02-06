import User from "@entity/User";
import UserService from "@services/user.service";
import {Request, Response} from "express";
class HomeController {
    static async index(req: Request, res: Response) {
        try {
            const users: User[] = await UserService.getAllUsers(); 
            // create cookies
            res.cookie('name', 'John Doe', { maxAge: 900000, httpOnly: false });  // 15 minutes
            // render view
            res.render('index.ejs', {users: users});
        }catch (e) {
            console.error(e);
            res.status(500).send('Server Error');  // server error
        }
    }

    static showFormRegister(req: Request, res: Response) {
        console.log('showFormRegister')
        res.render('auth/register.ejs');
    }

    static showFormLogin(req: Request, res: Response) {
        // get cookies
        const {email, errorLogin} = req.cookies
        res.render('auth/login.ejs', {email: email, errorLogin: errorLogin});
    }

    static async register(req: Request, res: Response) {
        await UserService.createUser(req.body)
        // create cookies
        res.cookie('email', req.body.email, { maxAge: 900000, httpOnly: true });
        res.redirect('/login');
    }

    static async login(req: any, res: Response) {
        const user: any = await UserService.getAccountByEmailPassword(req.body);
        console.log(user);
        if (user) {
            // luu lai session login
            req.session.regenerate(function (err: any) {
                if (err) {
                    console.log(err);
                    return;
                }
            
                // store user information in session, typically a user id
                req.session.userIdLogin = user.id;
                req.session.userLogin = user;
                // save the session before redirection to ensure page
                // load does not happen before session is saved
                req.session.save(function (err: any) {
                  if (err) return;
                  res.redirect('/home')
                })
              })
        } else {
            // tao cookie error
            res.cookie('errorLogin', 'Invalid email or password', { maxAge: 1000, httpOnly: true });
            res.redirect('/login');
        }
    }

    static logout(req: any, res: Response) {
        req.session.userIdLogin = null;
        req.session.save(function (err: any) {
            if (err) return;
        
            // regenerate the session, which is good practice to help
            // guard against forms of session fixation
            req.session.regenerate(function (err: any) {
              if (err) return;
              res.redirect('/login')
            })
          })
    }
}

export default HomeController;