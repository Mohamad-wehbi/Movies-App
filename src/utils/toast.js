import { toast } from 'sonner';

export const success = (data) => {toast.success(data.message)};
export const error = (err) => {toast.error(err.response.data.message)};