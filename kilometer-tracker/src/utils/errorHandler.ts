import { NextApiResponse } from "next";

export function handleApiError(error: any, res: NextApiResponse): void {
    // Email already exists
    if (error.message?.includes("user_pkey") ||
        error.message?.includes("duplicate key") ||
        error.message?.includes("unique constraint")) {
        return res.status(409).json({
            message: "Email already in use",
            error: "An account with this email address already exists"
        });
    }

    // Invalid email
    if (error.message?.includes("Invalid email format")) {
        return res.status(400).json({
            message: "Invalid email format",
            error: "Please enter a valid email address"
        });
    }

    // Weak password
    if (error.message?.includes("Password must be at least")) {
        return res.status(400).json({
            message: "Invalid password",
            error: "Password must be at least 6 characters long"
        });
    }

    // Incorrect credentials
    if (error.message?.includes("Invalid password") ||
        error.message?.includes("Incorrect credentials") ||
        error.message?.includes("Authentication failed")) {
        return res.status(401).json({
            message: "Invalid credentials",
            error: "The email or password you entered is incorrect"
        });
    }

    // Missing fields
    if (error.message?.includes("Missing required fields")) {
        return res.status(400).json({
            message: "Missing required fields",
            error: error.message
        });
    }

    // GraphQL errors
    if (error.message?.includes("GraphQL Error")) {
        return res.status(400).json({
            message: "Database error",
            error: "Unable to create user account. Please try again."
        });
    }

    // Network errors
    if (error.message?.includes("HTTP Error") || error.message?.includes("fetch")) {
        return res.status(503).json({
            message: "Service unavailable",
            error: "Unable to connect to database. Please try again later."
        });
    }

    // Default error
    return res.status(500).json({
        message: "Internal server error",
        error: "An unexpected error occurred. Please try again."
    });
}
