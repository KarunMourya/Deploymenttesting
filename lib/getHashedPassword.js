import bcrypt from "bcrypt";

export const getHashedPassword = async (password) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt); 
    return hash;
  } catch (error) {
    return {
      message: "Hashing unsuccessful"
    }
  }
}
