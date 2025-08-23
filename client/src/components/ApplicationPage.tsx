import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, Download, Shield, AlertCircle } from 'lucide-react';

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
  const [currentStep, setCurrentStep] = useState<number>(1);

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
        alert("Please upload an image file for your photo");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("Photo must be less than 2MB");
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const validateForm = () => {
    // Basic validation
    if (
      !formData.firstName ||
      !formData.familyName ||
      !formData.email ||
      !formData.nationality ||
      !formData.dob ||
      !formData.gender ||
      !formData.passportNumber ||
      !formData.medicalSchool ||
      !formData.yearOfStudy ||
      !formData.graduationLevel ||
      !formData.country ||
      formData.program.length === 0 ||
      !formData.startDateA ||
      !formData.endDateA ||
      !formData.departmentA ||
      !formData.clerkshipType ||
      !formData.accommodation
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    const formDataToSend = new FormData();
    
    // Append all text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'documentFile' && key !== 'photoFile' && key !== 'program') {
        formDataToSend.append(key, value as string);
      }
    });

    // Append program array as comma-separated
    formDataToSend.append('program', formData.program.join(','));

    // Append files
    if (formData.documentFile) {
      formDataToSend.append('documentFile', formData.documentFile);
    }
    if (formData.photoFile) {
      formDataToSend.append('photoFile', formData.photoFile);
    }

    try {
      // Mock API call for demonstration
      // In a real app, you would replace this with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful submission
      setSubmitMessage("Your application has been submitted successfully! We'll be in touch soon.");
      
      // Reset form after successful submission
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
      
    } catch (error) {
      setSubmitMessage("There was an error submitting your application. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const FormSteps = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 w-full">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            1
          </div>
          <div className={`text-sm font-medium ${currentStep >= 1 ? 'text-secondary-900' : 'text-secondary-500'}`}>Personal Info</div>
          <div className={`h-1 flex-grow ${currentStep >= 2 ? 'bg-primary-600' : 'bg-secondary-200'}`}></div>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            2
          </div>
          <div className={`text-sm font-medium ${currentStep >= 2 ? 'text-secondary-900' : 'text-secondary-500'}`}>Program Details</div>
          <div className={`h-1 flex-grow ${currentStep >= 3 ? 'bg-primary-600' : 'bg-secondary-200'}`}></div>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${currentStep >= 3 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            3
          </div>
          <div className={`text-sm font-medium ${currentStep >= 3 ? 'text-secondary-900' : 'text-secondary-500'}`}>Documents</div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="form-label">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="familyName" className="form-label">Family Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="familyName"
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nationality" className="form-label">Nationality <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dob" className="form-label">Date of Birth <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gender" className="form-label">Gender <span className="text-red-500">*</span></label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="passportNumber" className="form-label">Passport Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="medicalSchool" className="form-label">Medical School/University <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="medicalSchool"
                  name="medicalSchool"
                  value={formData.medicalSchool}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="yearOfStudy" className="form-label">Year of Study <span className="text-red-500">*</span></label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                  <option value="6">6th Year</option>
                  <option value="7">7th Year</option>
                  <option value="Graduated">Graduated</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="graduationLevel" className="form-label">Level of Study <span className="text-red-500">*</span></label>
                <select
                  id="graduationLevel"
                  name="graduationLevel"
                  value={formData.graduationLevel}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Resident">Resident</option>
                  <option value="Specialist">Specialist</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="country" className="form-label">Country of University <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="form-label">Program Selection <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                {programs.map((program) => (
                  <div key={program} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`program-${program}`}
                      checked={formData.program.includes(program)}
                      onChange={() => handleProgramCheckboxChange(program)}
                      className="h-4 w-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`program-${program}`}
                      className="ml-2 text-sm text-secondary-700"
                    >
                      {program}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="form-label">Clerkship Type <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {clerkshipTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="radio"
                      id={`type-${type}`}
                      name="clerkshipType"
                      value={type}
                      checked={formData.clerkshipType === type}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="ml-2 text-sm text-secondary-700"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-secondary-200 pt-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">First Rotation <span className="text-red-500">*</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="startDateA" className="form-label">Start Date</label>
                  <input
                    type="date"
                    id="startDateA"
                    name="startDateA"
                    value={formData.startDateA}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="endDateA" className="form-label">End Date</label>
                  <input
                    type="date"
                    id="endDateA"
                    name="endDateA"
                    value={formData.endDateA}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="departmentA" className="form-label">Department</label>
                  <input
                    type="text"
                    id="departmentA"
                    name="departmentA"
                    value={formData.departmentA}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Cardiology"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-secondary-200 pt-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Second Rotation (Optional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="startDateB" className="form-label">Start Date</label>
                  <input
                    type="date"
                    id="startDateB"
                    name="startDateB"
                    value={formData.startDateB}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="endDateB" className="form-label">End Date</label>
                  <input
                    type="date"
                    id="endDateB"
                    name="endDateB"
                    value={formData.endDateB}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="departmentB" className="form-label">Department</label>
                  <input
                    type="text"
                    id="departmentB"
                    name="departmentB"
                    value={formData.departmentB}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Neurology"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="accommodation" className="form-label">Accommodation Preference <span className="text-red-500">*</span></label>
              <select
                id="accommodation"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="">Select Accommodation</option>
                {accommodationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
              <div className="flex items-start mb-4">
                <Shield className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                <p className="text-sm text-secondary-700">
                  Your document uploads are protected and will only be used for application processing.
                  We keep your personal information confidential.
                </p>
              </div>
            </div>
            
            <div>
              <label htmlFor="documentFile" className="form-label">
                CV/Resume <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div className="border border-secondary-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="documentFile"
                      className="w-full flex flex-col items-center px-4 py-6 bg-white text-secondary-500 rounded-lg tracking-wide border border-dashed border-secondary-200 cursor-pointer hover:bg-secondary-50 transition-colors"
                    >
                      <FileText className="h-10 w-10 text-secondary-400" />
                      <span className="mt-2 text-base font-medium text-secondary-700">
                        {formData.documentFile
                          ? formData.documentFile.name
                          : "Click to upload CV/Resume"}
                      </span>
                      <span className="mt-1 text-xs text-secondary-500">
                        PDF, DOC or DOCX up to 4MB
                      </span>
                      <input
                        id="documentFile"
                        name="documentFile"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="photoFile" className="form-label">
                Passport Photo <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div className="border border-secondary-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="photoFile"
                      className="w-full flex flex-col items-center px-4 py-6 bg-white text-secondary-500 rounded-lg tracking-wide border border-dashed border-secondary-200 cursor-pointer hover:bg-secondary-50 transition-colors"
                    >
                      {formData.photoFile ? (
                        <div className="w-32 h-32 border border-secondary-200 rounded-lg overflow-hidden">
                          <img
                            src={URL.createObjectURL(formData.photoFile)}
                            alt="Passport Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <FileText className="h-10 w-10 text-secondary-400" />
                      )}
                      <span className="mt-2 text-base font-medium text-secondary-700">
                        {formData.photoFile
                          ? formData.photoFile.name
                          : "Click to upload passport photo"}
                      </span>
                      <span className="mt-1 text-xs text-secondary-500">
                        JPG, PNG up to 2MB
                      </span>
                      <input
                        id="photoFile"
                        name="photoFile"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {submitMessage.includes('successfully') ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {submitMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="animate-spin h-4 w-4" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold text-secondary-900 mb-4">Apply for Medical Internship</h1>
        <p className="text-secondary-600 max-w-2xl mx-auto">
          Complete the application form below to apply for our medical internship programs in Nepal. 
          We'll review your application and get back to you within 3-5 business days.
        </p>
      </div>
      
      <div className="bg-white shadow-soft border border-secondary-100 rounded-xl p-6 md:p-8">
        <FormSteps />
        
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
        </form>
      </div>
    </div>
  );
};

export default ApplicationPage;
