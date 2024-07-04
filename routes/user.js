const { Router } = require("express");
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");

const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.create({
      username,
      password,
    });
    res.status(201).json({
      msg: "User Created Successfully",
      userId: user._id,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({
      courses,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const { username, password } = req.headers;

  try {
    const updatedUser = await User.updateOne(
      {
        username,
      },
      {
        $push: { purchasedCourses: courseId },
      }
    );
    res.status(200).json({
      msg: "purchage complete",
    });
  } catch (e) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

router.get("/purchased-courses", userMiddleware, async (req, res) => {
  const { username, password } = req.headers;

  try {
    const user = await User.findOne({
      username,
    });

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    res.status(200).json({
      courses,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

module.exports = router;
