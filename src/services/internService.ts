import { updateHoursInterns, getInternsById, getRecordIntern, getInformationIntern } from "../repositories/internsRepository";

export const updateHours = async(internId: number, type: string, duration_hours: number) => {
    try{
        if(type === "accepted"){
            const {total_hours, pending_hours, completed_hours} = await getInternById(internId);
            var newPendingHours = pending_hours- duration_hours;
            if(newPendingHours<0)
                newPendingHours = 0
            const updateHoursIntern = await updateHoursInterns(internId,newPendingHours, total_hours - newPendingHours);
            return updateHoursIntern;
        }
       
    } catch(error){
        console.error('Error in InternsService.updateHours',error);
        throw new Error('Error fetching Update Hours Intern');
    }
}

export const getInternById = async(internId: number) => {
    try {
        const event = await getInternsById(internId);
        return event;
      } catch (error) {
        console.error('Error in InternsService.getInternById:', error);
        throw new Error('Error fetching Interns');
      }
    
}

export const getRecordInterns = async(internId: number) => {
    try{
        const events = await getRecordIntern(internId);

        const acceptedEvents = events.filter(event => event.type === 'accepted');
        const rejectedEvents = events.filter(event => event.type === 'rejected');
        
        return {
            accepted: acceptedEvents,
            rejected: rejectedEvents
        };
    }catch(error){
        console.error('Error in InternsService.getRecordInterns:', error);
        throw new Error('Error fetching Interns');
    }
}

export const getInformationsIntern = async (internId: number) => {
    try{
        const infoIntern = await getInformationIntern(internId);
        return infoIntern;
    }catch(error){
        console.error('Error in InternsService.getRecordInterns:', error);
        throw new Error('Error fetching Interns');
    }
}