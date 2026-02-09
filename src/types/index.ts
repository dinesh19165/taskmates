export interface Service {
    id: string;
    name: string;
    description: string;
    icon?: string;
    image?: string;
}

export interface ContactInquiry {
    id: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    date: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    token?: string;
}
