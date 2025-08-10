import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Users, 
  Download, 
  Trash2, 
  Eye, 
  Calendar, 
  Mail, 
  Phone, 
  FileText,
  Image,
  LogOut,
  Search,
  Filter
} from 'lucide-react';

interface Application {
  _id: string;
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
  startDateB?: string;
  endDateB?: string;
  departmentB?: string;
  clerkshipType: string;
  accommodation: string;
  documentFile?: {
    filename: string;
    originalName: string;
    path: string;
    size: number;
  };
  photoFile?: {
    filename: string;
    originalName: string;
    path: string;
    size: number;
  };
  createdAt: string;
  updatedAt: string;
}

interface AdminDashboardPageProps {
  setCurrentPage: (page: string) => void;
  setIsAdminLoggedIn: (status: boolean) => void;
  adminToken: string;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ 
  setCurrentPage, 
  setIsAdminLoggedIn, 
  adminToken 
}) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProgram, setFilterProgram] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [applications, searchTerm, filterProgram]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('/api/applications', {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        }
      });
      setApplications(response.data.applications);
      setError('');
    } catch (error) {
      console.error('Error fetching applications:', error);
      if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
        handleLogout();
      } else {
        setError('Failed to fetch applications');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const filterApplications = () => {
    let filtered = applications;

    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.familyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.medicalSchool.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterProgram) {
      filtered = filtered.filter(app => 
        app.program.includes(filterProgram)
      );
    }

    setFilteredApplications(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
  };

  const handleDownloadFile = async (applicationId: string, fileType: 'document' | 'photo') => {
    try {
      const response = await axios.get(
        `/api/applications/download/${applicationId}/${fileType}`,
        {
          headers: {
            'Authorization': `Bearer ${adminToken}`
          },
          responseType: 'blob'
        }
      );

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      
      // Get filename from response headers or use default
      const contentDisposition = response.headers['content-disposition'];
      let filename = `${fileType}-${applicationId}`;
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
      }
      
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file');
    }
  };

  const handleDeleteApplication = async (applicationId: string) => {
    if (!confirm('Are you sure you want to delete this application? This action cannot be undone.')) {
      return;
    }

    try {
      await axios.delete(`/api/applications/${applicationId}`, {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        }
      });

      // Remove from local state
      setApplications(applications.filter(app => app._id !== applicationId));
      setSelectedApplication(null);
      alert('Application deleted successfully');
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage medical internship applications</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter(app => 
                    new Date(app.createdAt).getMonth() === new Date().getMonth()
                  ).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">With Documents</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter(app => app.documentFile).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">With Photos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter(app => app.photoFile).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Applications
              </label>
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by name, email, or school..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Program
              </label>
              <div className="relative">
                <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <select
                  value={filterProgram}
                  onChange={(e) => setFilterProgram(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Programs</option>
                  <option value="Medical">Medical</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Dental">Dental</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Radiography">Radiography</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterProgram('');
                }}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Applications List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Applications ({filteredApplications.length})
                </h2>
              </div>
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredApplications.map((application) => (
                  <div
                    key={application._id}
                    className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedApplication?._id === application._id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedApplication(application)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {application.firstName} {application.familyName}
                        </h3>
                        <p className="text-sm text-gray-600">{application.email}</p>
                        <p className="text-sm text-gray-500">{application.medicalSchool}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {application.program.map((prog, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {formatDate(application.createdAt)}
                        </p>
                        <div className="mt-2 flex space-x-2">
                          {application.documentFile && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadFile(application._id, 'document');
                              }}
                              className="text-blue-600 hover:text-blue-800"
                              title="Download Document"
                            >
                              <FileText className="h-4 w-4" />
                            </button>
                          )}
                          {application.photoFile && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadFile(application._id, 'photo');
                              }}
                              className="text-green-600 hover:text-green-800"
                              title="Download Photo"
                            >
                              <Image className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteApplication(application._id);
                            }}
                            className="text-red-600 hover:text-red-800"
                            title="Delete Application"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredApplications.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No applications found matching your criteria.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Application Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Application Details</h2>
              </div>
              {selectedApplication ? (
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedApplication.firstName} {selectedApplication.familyName}
                    </p>
                    <p className="text-sm text-gray-600">{selectedApplication.email}</p>
                    <p className="text-sm text-gray-600">{selectedApplication.nationality}</p>
                    <p className="text-sm text-gray-600">DOB: {formatDate(selectedApplication.dob)}</p>
                    <p className="text-sm text-gray-600">Gender: {selectedApplication.gender}</p>
                    <p className="text-sm text-gray-600">Passport: {selectedApplication.passportNumber}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Academic Information</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedApplication.medicalSchool}</p>
                    <p className="text-sm text-gray-600">Year: {selectedApplication.yearOfStudy}</p>
                    <p className="text-sm text-gray-600">Level: {selectedApplication.graduationLevel}</p>
                    <p className="text-sm text-gray-600">Country: {selectedApplication.country}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Program Details</h3>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {selectedApplication.program.map((prog, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                    {selectedApplication.departmentA && (
                      <p className="text-sm text-gray-600 mt-2">
                        Dept A: {selectedApplication.departmentA} 
                        ({formatDate(selectedApplication.startDateA)} - {formatDate(selectedApplication.endDateA)})
                      </p>
                    )}
                    {selectedApplication.departmentB && (
                      <p className="text-sm text-gray-600">
                        Dept B: {selectedApplication.departmentB}
                        ({selectedApplication.startDateB ? formatDate(selectedApplication.startDateB) : 'N/A'} - {selectedApplication.endDateB ? formatDate(selectedApplication.endDateB) : 'N/A'})
                      </p>
                    )}
                    {selectedApplication.clerkshipType && (
                      <p className="text-sm text-gray-600">Type: {selectedApplication.clerkshipType}</p>
                    )}
                    {selectedApplication.accommodation && (
                      <p className="text-sm text-gray-600">Accommodation: {selectedApplication.accommodation}</p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Files</h3>
                    <div className="mt-2 space-y-2">
                      {selectedApplication.documentFile && (
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Document</p>
                            <p className="text-xs text-gray-500">
                              {selectedApplication.documentFile.originalName} 
                              ({formatFileSize(selectedApplication.documentFile.size)})
                            </p>
                          </div>
                          <button
                            onClick={() => handleDownloadFile(selectedApplication._id, 'document')}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      {selectedApplication.photoFile && (
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Photo</p>
                            <p className="text-xs text-gray-500">
                              {selectedApplication.photoFile.originalName}
                              ({formatFileSize(selectedApplication.photoFile.size)})
                            </p>
                          </div>
                          <button
                            onClick={() => handleDownloadFile(selectedApplication._id, 'photo')}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button
                      onClick={() => handleDeleteApplication(selectedApplication._id)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete Application</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  Select an application to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;