export default function validateUserInput(req, res, next) {
  const { email, password } = req.body;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (email && !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (passwordRegex.test(password)) {
    return res
      .status(400)
      .json({ error: "Password does not meet requirements" });
  }
  next();
}
