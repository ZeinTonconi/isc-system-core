import genericUser from "../models/genericUser"
import { createUserService } from "../services/adminUserService";

export const createUserInteractor = async (userData: genericUser) =>{
    try {
        const newUser = await createUserService(userData);
    
        if (!newUser) {
          throw new Error('Error creating the User');
        }
        return newUser;
      } catch (error) {
        console.error('Error in createUser interactor:', error);
        throw new Error('Error creating the user');
      }

}