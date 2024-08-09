export interface Analysis {
    analysisId : number;
    name: string;
    state: number;
    auditCreateDate: Date; 
}
export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roleId: number
}

export interface ApiResponse{
  isSucces: boolean;     
  message: string;      
  data:  Analysis; 
  errors: ErrorDetail[] | null;
}

export interface ErrorDetail {
  PropertyName: string; 
  ErrorMessage: string;  
}

export interface ServerResponse {
  isSucces: boolean;     
  message: string;      
  data:  string; 
  errors: ErrorDetail[] | null; 
}


  export interface LoginResponse {
    isSucces: boolean;
    message: string;
    data: string;
    errors: ErrorDetail[] | null;
  }
  
