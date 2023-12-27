'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import

export default function AuthCheckPage() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [responseData, setResponseData] = useState(null);

    useEffect(async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/auth/validate-token',
                { withCredentials: true }
            );
            console.log(response);
            setResponseData(response.data);
    
            if (response.data && response.data.valid === true) {
                setAuthenticated(true);
                console.log('Authentication set to true');
            } else {
                setAuthenticated(false);
                console.log('Authentication set to false');
            }
        } catch (error) {
            setAuthenticated(false);
            console.error('Error during authentication:', error);
        } finally {
            setLoading(false);
        }
    }, []);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {authenticated ? (
                <p>Authentication successful</p>
            ) : (
                <p>Authentication failed</p>
            )}
            {responseData && (
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
            )}
        </div>
    );
}
