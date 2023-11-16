import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                //bgGradient: "linear(to-b, gray.800, gray.700)",
                bg: "cyan.500",
                color: "gray.50"
            }
        }
    }
})