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

type Patient = {
    id: string;
    full_name: string;
    id_number: string;
    phone_number: string;
    address: string;
    date_of_birth: string;
    gender: string;
    height: number;
    weight: number;
    blood_type: string;
    allergies: string;
    medical_record_number: string;
    hospital: Hospital;
    created_at: string;
    updated_at: string;
};

type Appointment = {
    id: string;
    doctor: Doctor;
    patient: Patient;
    appointment_date: string;
    start_time: string;
    end_time: string;
    status: string;
    type: string;
    created_at: string;
    updated_at: string;
};

type User = {
    id: string;
    email: string;
    full_name: string;
    role: string;
    hospital: Hospital;
    created_at: string;
    updated_at: string;
};

type NotificationEvent = {
    id: string;
    title: string;
    body: string;
    type: string;
    is_read: boolean;
    created_at: string;
};

type Mitra = {
    id: string;
    from_hospital: Hospital & {
        type: string;
        status: string;
    };
    to_hospital: Hospital & {
        type: string;
        status: string;
    };
    partner_type: string;
    status: string;
    created_at: string;
    updated_at: string;
};
