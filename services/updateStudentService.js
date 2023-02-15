import User from "../models/userModel.js";

export const updateStudentService = async (request) => {
  const { id } = request.user
  let {name,city,education} = request.body;
  const updateUserDetails = {}

  if(name) {
    updateUserDetails.name = name;
  }
  if(city) {
    updateUserDetails.city = city;
  }
  if(education) {
    updateUserDetails.education = education;
  }  
  try {
    const updatedStudent = await User.update(updateUserDetails, {
      where: {
        id,
      },
    });
    if (!updatedStudent) {
      return {
        message: "unsuccessfully updation",
      };
    } else {
      return {
        message: "successfully updation",
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
