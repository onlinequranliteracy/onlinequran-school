export interface Student {
  id: string;
  email: string;
  student_name: string;
  age: number;
  gender: string;
  hifz_group: 'A' | 'B' | 'C';
  time_zone: string;
  subscription_status: 'active' | 'inactive' | 'suspended';
  meet_link?: string;
}