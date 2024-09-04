import { updateHoursInterns, getInternsById, getRecordIntern } from "../repositories/internsRepository";

export const updateHours = async(internId: number, hoursEvent: number) => {
    try{
        const {pending_hours, completed_hours} = await getInternById(internId);
        const updateHoursIntern = await updateHoursInterns(internId,pending_hours- hoursEvent, completed_hours+hoursEvent);
        return updateHoursIntern;
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
