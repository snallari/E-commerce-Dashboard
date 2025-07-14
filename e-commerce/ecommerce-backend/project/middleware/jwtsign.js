
import jwt from 'jsonwebtoken';
   // Replace with your actual secret key
   const secretKey = 'a-string-secret-at-least-256-bits-long'; 

   const authenticateJWT = (req, res, next) => {
     const token = req.headers.authorization
      console.log("req", req.headers)
     if (token) {
       jwt.verify(token, secretKey, (err, user) => {
         if (err) {
           return res.sendStatus(403);
         }
         console.log("user", user)
         req.user = user;
         next();
       });
     } else {
       res.sendStatus(401);
     }
   };

export default authenticateJWT;

