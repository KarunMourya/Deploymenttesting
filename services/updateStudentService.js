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
        error:true
      };
    } else {
      return {
        message: "successfully updation",
        error:false
      };
    }
  } catch (error) {
    return {
      message: error.message,
      error:true
    };
  }
};
