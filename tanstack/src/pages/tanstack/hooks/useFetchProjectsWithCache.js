import { useQuery } from "@tanstack/react-query";
import { fetchProjectsApi } from "../apis/apis";
import { toast } from "react-toastify";

/**
 * Custom hook for fetching projects with TanStack Query's useQuery, including caching
 * 
 * This hook leverages React Query's powerful caching and auto-refetching capabilities
 * to optimize data fetching and provide a seamless user experience.
 * 
 * @param {Object} options - Optional configuration to override default settings
 * @returns {Object} Query result object containing data and status indicators
 */
export default function useFetchProjectsWithCache(options = {}) {
  return useQuery({
    // Unique identifier for this query in the cache
    queryKey: ["projects"],
    
    // The function that performs the actual API call
    queryFn: fetchProjectsApi,

    // ---------- CACHING OPTIONS ----------
    
    // How long until the data is considered stale (in milliseconds)
    // Default: 0 (immediately stale)
    staleTime: 5 * 60 * 1000, // 5 minutes
    
    // How long to keep the data in cache when unused (in milliseconds)
    // Default: 5 minutes (5 * 60 * 1000)
    gcTime: 10 * 60 * 1000, // 10 minutes
    
    // ---------- REFETCHING OPTIONS ----------
    
    // Whether to refetch when the window regains focus
    // Default: true
    refetchOnWindowFocus: true,
    
    // Whether to refetch when the component mounts if the data is stale
    // Default: true
    refetchOnMount: true,
    
    // Whether to refetch when the network is reconnected
    // Default: true
    refetchOnReconnect: true,
    
    // ---------- INITIAL DATA OPTIONS ----------
    
    // Provide initial data while the query is loading
    // initialData: () => { return [] },
    
    // How long the initialData should be considered fresh (in milliseconds)
    // initialDataUpdatedAt: 0,
    
    // ---------- POLLING OPTIONS ----------
    
    // Refetch at this interval (in milliseconds) - useful for real-time data
    // refetchInterval: false,
    
    // Whether to continue polling when the window is in the background
    // refetchIntervalInBackground: false,
    
    // ---------- ERROR HANDLING OPTIONS ----------
    
    // Number of times to retry on failure
    // Default: 3
    retry: 3,
    
    // Delay between retries (in milliseconds)
    // Can be a function to implement exponential backoff
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    
    // ---------- LIFECYCLE CALLBACKS ----------
    
    // Called when the query successfully completes
    onSuccess: (data) => {
      console.log(data)
      toast.success("Projects fetched successfully (from cache or API)!");
    },
    
    // Called when the query encounters an error
    onError: (error) => {
      toast.error(error.message || "Failed to fetch projects");
    },
    
    // Called when the query settles (either success or error)
    // onSettled: (data, error) => { console.log('Query settled:', { data, error }); },
    
    // ---------- ADVANCED OPTIONS ----------
    
    // Whether the query should run automatically
    // Setting to false lets you trigger the query manually with refetch()
    // Default: true
    enabled: true,
    
    // Select/transform the data before it's cached and returned
    // select: (data) => data.map(project => ({ ...project, displayName: `${project.name} (${project.id})` })),
    
    // Whether to suspend the component until the query is resolved (for React Suspense)
    // suspense: false,
    
    // Use with suspense for error boundaries
    // useErrorBoundary: false,
    
    // Additional metadata about the query
    // meta: {},
    
    // Placeholder data to show while loading (similar to initialData but doesn't affect cache)
    // placeholderData: [],
    
    // ---------- PAGINATION & INFINITE QUERIES ----------
    // Note: For pagination, consider using useInfiniteQuery instead
    
    // Keep previous data when fetching new data
    // Useful for pagination to avoid loading states between page changes
    // keepPreviousData: false,
    
    // Override default behavior with any custom options passed to the hook
    ...options
  });
}