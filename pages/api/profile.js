import jwt from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { usertkn, adminToken} = req.cookies;

  if (!usertkn && !adminToken) {
    return res.status(401).json({ error: "Not logged in" });
  }

  if(usertkn || adminToken) {
    const { email,value } = jwt.verify(usertkn, "secret");
    return res.status(200).json({ email, value });
  }
}
