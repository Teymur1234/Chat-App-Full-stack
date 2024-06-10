import User from "../models/user.model.js"
export const getAllUsers = async (request,response) => {
    try {
        const clientId = request.user_id
        const filteredUsers = await User.find({_id:{$ne:clientId}})
        response.status(200).send(filteredUsers)
    } catch (error) {
        console.log(`Error: ${error}`);
        response.status(404).send({message:error.message})
    }
};