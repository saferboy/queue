export interface AuthDto {
  username: string;
  password: string;
  device_id: number;
  device_name: string;
  desciption: string;
}

export interface LoginDto {
  username: string;
  password: string;
}
