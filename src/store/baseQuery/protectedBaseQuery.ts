import { baseUrl } from "@/core/constants/endpoints";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getCookie } from "cookies-next";

export const prepareProtectedHeader = (headers: Headers) => {
    const token: string | null | undefined = getCookie("token")
    if (token) {
        headers.set("Authorization", "Bearer " + token);
    }
    return;
}

export const protectedBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: prepareProtectedHeader,
});


