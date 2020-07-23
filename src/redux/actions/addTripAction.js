import {renewSession, createData} from './utils';
import {toast} from 'react-toastify'

export const addTrip = async (trip) => {
    try{
        const data = await createData('/trip/create', trip);
        toast(data.data.message);
        return true
    } catch(error) {
        const result = await renewSession(error);
        if(result.status !== 200) {
            toast.error(result.message);
            return false
        } else {
            const data = await createData('/trip/create', trip);
            toast(data.data.message);
            return true
        }
    }
   }
   