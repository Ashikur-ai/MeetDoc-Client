import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from "@tanstack/react-query";


const useDoctor = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: isDoctor, isPending: isDoctorLoading } = useQuery({
        queryKey: [user?.email, 'isDoctor'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/doctor/${user.email}`);
            console.log(res);
            return res.data?.doctor;
        }
    });
    return [isDoctor, isDoctorLoading];
    
};

export default useDoctor;