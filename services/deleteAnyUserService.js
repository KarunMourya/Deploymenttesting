import User from "../models/userModel.js";

export const deleteAnyUserService = async (request) => {
  const { id } = request.params;
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    if (!deletedUser) {
      return {
        message: "unsuccessfully deleted",
      };
    } else {
      return {
        message: "successfully deleted",
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
