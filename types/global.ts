type Hospital = {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    year_established: number;
    created_at: string;
    updated_at: string;
};

type Doctor = {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    specialty: string;
    hospital: Hospital;
    created_at: string;
    updated_at: string;
};

type Schedule = {
    id: number;
    doctor: Doctor;
    day_of_week: string;
    start_time: string;
    end_time: string;
    created_at: string;
    updated_at: string;
};