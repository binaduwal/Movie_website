import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axiosClient";
import type { MovieDetail } from "../types/movie";

export function useMovieDetail(id:number,type:'movie' | 'tv'){
    return useQuery<MovieDetail,Error>({
        queryKey:[type,id],
        queryFn:async()=>{
                  const { data } = await api.get<MovieDetail>(`3/${type}/${id}`, {
                    params: {
                      append_to_response: "videos",
                    },
                  });
                  return data;
        },  
         staleTime: 1000 * 60 * 10,
    retry: 1,
    })
  
}