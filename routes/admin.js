const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await Admin.create({
      username,
      password,
    });
    res.json({
      msg: "Admin created successfully",
    });
  } catch (e) {
    res.status(500).json({
      msg: "something went wrong",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  try {
    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });
    res.json({
      msg: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (e) {
    res.status(500).json({
      msg: "something went wrong",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const allCourses = await Course.find({});
    res.json({
      courses: allCourses,
    });
  } catch (e) {
    res.status(500).json({
      msg: "something went wrong",
    });
  }
});

module.exports = router;
