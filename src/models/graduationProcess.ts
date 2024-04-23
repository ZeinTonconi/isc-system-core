interface GraduationProcess {
  id?: number; // Optional for creation as it's auto-generated
  student_id: number;
  modality_id: number;
  project_name: string;
  seminar_enrollment: boolean;
  date_seminar_enrollment: Date;
  period: string;
  tutor_letter: boolean;
  tutor_id?: number;
  tutor_approval: boolean;
  reviewer_letter: boolean;
  reviewer_id?: number;
  reviewer_approval: boolean;
}

export default GraduationProcess;
