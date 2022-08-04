export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  NONE = 'None',
  OTHER = 'I Prefer not to say'
}

export enum ROLE {
  ADMIN = 'Admin',
  LAWYER = 'Lawyer',
  TEAM = 'Team',
  CLIENT_APPONITMENT = 'Client Appointment', // Clients that are approaching lawyer for cases
  CLIENT_LAWYER = 'Client Lawyer', // Personel Clients

  // USER = 'User',
}

// export enum SPECIALIZATION {
//   CIVIL = 'Civil',
//   CRIMINAL = 'Criminal',
//   FAMILY = 'Family',
// }

// export enum COURT {
//   LOWER = 'Lower Court',
//   HIGH = 'High Court',
//   SUPREME = 'Supreme Court',
// }

// Lawyer Status
export enum STATUS {
  NONE = 'None', // APPONTMENT_CLIENT, LAWYER_CLIENT,
  ACTIVE = 'Active',
  REJECT = 'Reject',
  PENDING = 'Pending', // LAWYER DEFAULT
  BLOCK = 'Block',
}

// Appointment Status
export enum STATUS_APPOINT {
  // Admin
  PENDING = 'Pending',
  DIRECT = 'Direct',
  CANCEL = 'Cancel',
  // Lawyer
  ACCEPT = 'Accept',
  REJECT = 'Reject',
}

// Lawyer Team
export enum STATUS_TASK {
  COMPLETE = 'Complete',
  PENDING = 'Pending',
  PROCESS = 'Process',
  QUEUE = 'Queue', // LAWYER DEFAULT
  BLOCK = 'Block',
}
