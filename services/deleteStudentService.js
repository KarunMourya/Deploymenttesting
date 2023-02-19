import User from "../models/userModel.js";

export const deleteStudentService = async (request) => {
  const { id } = request.user;
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    if (!deletedUser) {
      return {
        message: "unsuccessfully deleted",
        error:true
      };
    } else {
      return {
        message: "successfully deleted",
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
