import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { sendmail } from "../utils/notification.js";

export const signup = async (req, res, next) => {
  const { firstName, lastName, userName, phone, company, email, password } =
    req.body;
  const hasedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    userName,
    phone,
    company,
    email,
    password: hasedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json("created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hasedPassword = bcryptjs.hashSync(generatePassword, 10);

      const fullName = req.body.name;

      function getFirstAndLastName(fullName) {
        const nameParts = fullName.split(" ");
        const firstname = nameParts[0];
        const lastname = nameParts.slice(1).join(" ");
        return { firstname, lastname };
      }

      const { firstname, lastname } = getFirstAndLastName(fullName);

      const newUser = new User({
        userName:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        firstName: firstname,
        lastName: lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: hasedPassword,
        avatar: req.body.photo,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};

// export const forgotPassword = async (req, res, next) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Generate a reset token
//     const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     user.resetToken = resetToken;
//     await user.save();

//     const html = `
//               <h2>Please click on given link to reset your password</h2>
//               <p>${}/resetpassword/${resetToken}</p>
//           `;
//     await sendmail(email, html);

//     return res.status(200).json({ message: "Password reset link sent" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const resetPassword = async (req, res, next) => {
//   try {
//     const { resetToken, newPassword } = req.body;

//     // Verify and decode the reset token
//     const decoded = jwt.verify(resetToken, process.env.RESET_SECRET);

//     if (!decoded) {
//       return res.status(400).json({ message: "Invalid or expired token" });
//     }

//     // Find the user associated with the provided reset token
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Set and hash the new password
//     const hashedPassword = bcryptjs.hashSync(newPassword, 10);

//     // Update the user's password with the new hashed password
//     user.password = hashedPassword;
//     await user.save();

//     // Clear the reset token from the user document
//     user.resetToken = undefined;
//     await user.save();

//     return res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     next(error);
//   }
// };

// // Existing code...
