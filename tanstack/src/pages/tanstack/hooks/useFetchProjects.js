import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fetchProjectsApi } from "../apis/apis";

/**
 * Custom hook for fetching projects using TanStack Query's useMutation
 *
 * While typically useQuery is used for data fetching and useMutation for data modifications,
 * this implementation gives more control over when the fetch occurs by using useMutation.
 *
 * @returns {Object} Mutation state and control functions
 */
export default function useFetchProjects() {
  // useMutation hook from TanStack Query (React Query)
  // This hook handles asynchronous operations and maintains their state
  const {
    // Core mutation function that triggers the API call
    mutate: fetchProjects,

    // State indicators
    isPending: isFetching, // True while the request is in progress
    isSuccess, // True if the last request completed successfully
    isError, // True if the last request resulted in an error
    error, // Contains error object if isError is true

    // Additional properties available but not used here:
    // data,                // Contains the successful response data
    // reset,               // Function to reset the mutation state
    // mutateAsync,         // Promise-based version of mutate
    // variables,           // The variables that were passed to the most recent mutation
    // status,              // String representation of the current status ("idle", "pending", "success", "error")
  } = useMutation({
    // The function that performs the actual API call
    mutationFn: fetchProjectsApi,

    // Callback when the mutation is successful
    onSuccess: (data) => {
      console.log(data);
      // You could add success handling here
      // toast.success("Projects fetched successfully!");
    },

    // Callback when the mutation encounters an error
    onError: (error) => {
      toast.error(error.message || "Failed to fetch projects");
    },

    // Additional options available but not used here:
    // onSettled: (data, error) => {},     // Called when the mutation is either successful or errors
    // onMutate: (variables) => {},        // Called before the mutation function is fired, useful for optimistic updates
    // retry: 3,                           // Number of times to retry the mutation if it fails
    // retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Delay between retries
    // useErrorBoundary: false,            // Whether to propagate errors to the nearest error boundary
    // meta: {},                           // Additional metadata about the mutation
  });

  // Return the mutation state and control function
  return {
    fetchProjects, // Call this function to fetch projects: fetchProjects(params, { onSuccess: (data) => {} })
    isFetching, // Boolean indicating if the request is currently in progress
    isSuccess, // Boolean indicating if the last request was successful
    isError, // Boolean indicating if the last request resulted in an error
    error, // The error object if there was an error
  };
}
