import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, Download } from 'lucide-react';

interface FormData {
  familyName: string;
  firstName: string;
  email: string;
  nationality: string;
  dob: string;
  gender: string;
  passportNumber: string;
  medicalSchool: string;
  yearOfStudy: string;
  graduationLevel: string;
  country: string;
  program: string[];
  startDateA: string;
  endDateA: string;
  departmentA: string;
  startDateB: string;
  endDateB: string;
  departmentB: string;
  clerkshipType: string;
  accommodation: string;
  documentFile: File | null;
  photoFile: File | null;
}

const ApplicationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    familyName: '',
    firstName: '',
    email: '',
    nationality: '',
    dob: '',
    gender: '',
    passportNumber: '',
    medicalSchool: '',
    yearOfStudy: '',
    graduationLevel: '',
    country: '',
    program: [],
    startDateA: '',
    endDateA: '',
    departmentA: '',
    startDateB: '',
    endDateB: '',
    departmentB: '',
    clerkshipType: '',
    accommodation: '',
    documentFile: null,
    photoFile: null
  });

  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const programs = ["Medical", "Nursing", "Radiology", "Radiography", "Pharmacy", "Dental", "Physiotherapy"];
  const accommodationOptions = [
    "Medical Intern House (Shared)",
    "Host Family Stay",
    "Private Apartment",
    "Hotel Partnership"
  ];

  const clerkshipTypes = [
    "Pre-clinical Clerkship",
    "Clinical Clerkship"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgramCheckboxChange = (program: string) => {
    setFormData((prev) => {
      const exists = prev.program.includes(program);
      const updatedPrograms = exists
        ? prev.program.filter((p) => p !== program)
        : [...prev.program, program];
      return { ...prev, program: updatedPrograms };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;

    const file = files[0];

    if (name === 'documentFile' && file.size > 4 * 1024 * 1024) {
      alert("Document must be less than 4MB");
      return;
    }

    if (name === 'photoFile') {
      if (!file.type.startsWith('image/')) {
        alert("Photo must be an image file");
        return;
      }
      if (file.size > 1 * 1024 * 1024) {
        alert("Photo must be less than 1MB");
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: file }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage(null);
    
      try {
        const payload = new FormData();
    
        // Append all non-file fields
        Object.entries(formData).forEach(([key, value]) => {
          if (key === "documentFile" || key === "photoFile") return; // skip files here
          if (Array.isArray(value)) {
            value.forEach((item) => payload.append(key, item));
          } else {
            payload.append(key, value as string);
          }
        });
    
        // Append files
        if (formData.documentFile) {
          payload.append("documentFile", formData.documentFile);
        }
        if (formData.photoFile) {
          payload.append("photoFile", formData.photoFile);
        }
    
        const res = await fetch("http://localhost:5000/api/applications/submit", {
          method: "POST",
          body: payload
        });
    
        const data = await res.json();
    
        if (!res.ok) {
          throw new Error(data.message || "Failed to submit application");
        }
    
        setSubmitMessage("Application submitted successfully!");
        setFormData({
          familyName: '',
          firstName: '',
          email: '',
          nationality: '',
          dob: '',
          gender: '',
          passportNumber: '',
          medicalSchool: '',
          yearOfStudy: '',
          graduationLevel: '',
          country: '',
          program: [],
          startDateA: '',
          endDateA: '',
          departmentA: '',
          startDateB: '',
          endDateB: '',
          departmentB: '',
          clerkshipType: '',
          accommodation: '',
          documentFile: null,
          photoFile: null
        });
      } catch (err: any) {
        console.error("Submission error:", err);
        setSubmitMessage(`Error: ${err.message}`);
      } finally {
        setIsSubmitting(false);
      }
    };
    
    // console.log('Form Data:', formData);
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   setSubmitMessage('Application submitted successfully!');
    // }, 2000); // Simulate submission delay
    // console.log('Form Data:', formData);


  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Online Application Form</h2>
          <p className="text-xl text-gray-600">Please complete all required fields to submit your application.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 bg-gray-50 p-8 rounded-lg shadow-lg">
          <Section title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField name="familyName" label="Family Name *" value={formData.familyName} onChange={handleInputChange} required />
              <InputField name="firstName" label="First Name *" value={formData.firstName} onChange={handleInputChange} required />
              <InputField name="email" label="Email *" type="email" value={formData.email} onChange={handleInputChange} required />
              <InputField name="nationality" label="Nationality *" value={formData.nationality} onChange={handleInputChange} required />
              <InputField name="dob" label="Date of Birth *" type="date" value={formData.dob} onChange={handleInputChange} required />
              <SelectField name="gender" label="Gender *" value={formData.gender} onChange={handleInputChange} required options={["Male", "Female", "Other"]} />
              <InputField name="passportNumber" label="Passport Number *" value={formData.passportNumber} onChange={handleInputChange} required />
            </div>
          </Section>

          <Section title="Academic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField name="medicalSchool" label="Medical School *" value={formData.medicalSchool} onChange={handleInputChange} required />
              <SelectField name="yearOfStudy" label="Year of Study *" value={formData.yearOfStudy} onChange={handleInputChange} required options={["3rd Year", "4th Year", "5th Year", "6th Year", "Graduate"]} />
              <InputField name="graduationLevel" label="Graduation Level *" value={formData.graduationLevel} onChange={handleInputChange} required />
              <InputField name="country" label="Country *" value={formData.country} onChange={handleInputChange} required />
            </div>
          </Section>

          <Section title="Program Selection">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium text-gray-700 mb-2">Preferred Programs *</legend>
              {programs.map((program) => (
                <label key={program} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.program.includes(program)}
                    onChange={() => handleProgramCheckboxChange(program)}
                    className="text-teal-600"
                  />
                  <span className="text-gray-700">{program}</span>
                </label>
              ))}
            </fieldset>
            <p>*Preferred Departments (You should stay in one department for at least two weeks)*</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <InputField name="departmentA" label="Department" value={formData.departmentA} onChange={handleInputChange} />
              <InputField name="startDateA" label="Start Date" type="date" value={formData.startDateA} onChange={handleInputChange} required />
              <InputField name="endDateA" label="End Date" type="date" value={formData.endDateA} onChange={handleInputChange} required />

              <InputField name="departmentB" label="Department" value={formData.departmentB} onChange={handleInputChange} />
              <InputField name="startDateB" label="Start Date" type="date" value={formData.startDateB} onChange={handleInputChange} />
              <InputField name="endDateB" label="End Date" type="date" value={formData.endDateB} onChange={handleInputChange} />
            </div>
            <SelectField name="clerkshipType" label="Desired Type of Clerkship" value={formData.clerkshipType} onChange={handleInputChange} options={clerkshipTypes} />
            <SelectField name="accommodation" label="Accommodation Preference" value={formData.accommodation} onChange={handleInputChange} options={accommodationOptions} />
          </Section>



          <Section title="Uploads">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Upload Documents</h3>
              <div className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Required Documents (PDF, max 4MB) *
                  </label>
                  <input
                    type="file"
                    name="documentFile"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg file:bg-teal-600 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Passport-size Photo (JPEG/PNG, max 1MB) *
                  </label>
                  <input
                    type="file"
                    name="photoFile"
                    accept="image/jpeg,image/png"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg file:bg-teal-600 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer"
                  />
                </div>

              </div>
            </div>

          </Section>

          <div className="text-center">
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('Error') 
                  ? 'bg-red-100 text-red-700 border border-red-300' 
                  : 'bg-green-100 text-green-700 border border-green-300'
              }`}>
                {submitMessage}
              </div>
            )}
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Reusable UI Components

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const InputField = ({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required = false
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} className="w-full px-4 py-2 border rounded-lg" />
  </div>
);

const SelectField = ({
  name,
  label,
  value,
  onChange,
  options,
  required = false
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select id={name} name={name} value={value} onChange={onChange} required={required} className="w-full px-4 py-2 border rounded-lg">
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({
  name,
  label,
  value,
  onChange,
  required = false
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea id={name} name={name} value={value} onChange={onChange} rows={4} required={required} className="w-full px-4 py-2 border rounded-lg" />
  </div>
);

const FileInputField = ({
  name,
  label,
  onChange
}: {
  name: keyof FormData;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type="file" name={name} id={name} onChange={onChange} className="w-full" />
  </div>
);

export default ApplicationPage;
