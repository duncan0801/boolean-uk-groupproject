"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export default (req: Request, res: Response, next: NextFunction) => {
//   const token = req.cookies.token;
//   let userData = null;
//   if (token) {
//     userData = validateToken(token);
//   }
//   // const userData = token && validateToken(token);
//   if (userData) {
//     req.currentUser = userData;
//     next();
//   } else {
//     res
//       .status(401)
//       .json({ err: "You need to be logged in to access this data" });
//   }
// };
