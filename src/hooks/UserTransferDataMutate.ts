import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { UserData } from "../interface/UserData";

const API_URL = "http://localhost:8080";

const postData = async (data: UserData): AxiosPromise<unknown> => {
  const response = axios.post(API_URL + "/users", data);
  return response;
};

export function UserTransferDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,

    onSuccess: () => {
      queryClient.invalidateQueries(["user-data"]);
    },
  });

  return mutate
}
