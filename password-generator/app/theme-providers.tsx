
"use client"; //usa el javascript de client 

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'

// Create a client
const queryClient = new QueryClient()


const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return ( <QueryClientProvider client={queryClient}>
        <Toaster 
         position="bottom-right"
         richColors
        />
      {children}
    </QueryClientProvider>);
}

export default ThemeProvider;
