
import { useNavigate } from "react-router-dom";
import config from "../config";
import {House} from "../types/house";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import Problem from "../types/problem";


// this is a custom hook
const useFetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses`)
                .then((resp) => resp.data)
    });
}

    const useFetchHouse = (id:number) => {
        return useQuery<House, AxiosError>({
            queryKey: ["houses", id],
            queryFn: () =>
                axios.get(`${config.baseApiUrl}/house/${id}`)
                    .then((resp) => resp.data)
        })
    }
    
    const useAddHouse = () => {
        const queryClient = useQueryClient();
        const nav = useNavigate();
        
        return useMutation<AxiosResponse, AxiosError<Problem>, House>({
          mutationFn: (h) => axios.post(`${config.baseApiUrl}/houses`, h),
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["houses"] });
            nav("/");
          },
        });
      };

    const useUpdateHouse = () => {
        const nav = useNavigate();
        const queryClient = useQueryClient(); 
        return useMutation<AxiosResponse, AxiosError<Problem>, House>({
            mutationFn: (h) => axios.put(`${config.baseApiUrl}/houses`, h),
            onSuccess: (_,house) => {
                queryClient.invalidateQueries({
                    queryKey: ["houses"]
                });
                nav(`/house/${house.id}`)
            },
        });
    };

    const useDeleteHouse = () => {
        const nav = useNavigate();
        const queryClient = useQueryClient(); 
        return useMutation<AxiosResponse, AxiosError, House>({
            mutationFn: (h) => axios.delete(`${config.baseApiUrl}/houses/${h.id}`),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["houses"]
                });
                nav("/")
            },
        });
    };
    


export default useFetchHouses;
export {useFetchHouse, useAddHouse, useUpdateHouse, useDeleteHouse };