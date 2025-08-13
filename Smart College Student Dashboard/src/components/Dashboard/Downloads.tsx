import React from 'react';
import { Download, FileText, File, BookOpen, Calendar } from 'lucide-react';
import { mockDownloads } from '../../data/mockData';

export const Downloads: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'syllabus':
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'notes':
        return <FileText className="h-5 w-5 text-green-500" />;
      case 'papers':
        return <File className="h-5 w-5 text-purple-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'syllabus':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'notes':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'papers':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const categories = ['All', 'Syllabus', 'Notes', 'Papers'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredDownloads = activeCategory === 'All' 
    ? mockDownloads 
    : mockDownloads.filter(item => item.category === activeCategory.toLowerCase());

  const downloadCounts = {
    syllabus: mockDownloads.filter(item => item.category === 'syllabus').length,
    notes: mockDownloads.filter(item => item.category === 'notes').length,
    papers: mockDownloads.filter(item => item.category === 'papers').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <Download className="h-8 w-8" />
          Academic Resources
        </h2>
        <p className="text-green-100">Download syllabus, lecture notes, and previous year question papers</p>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{downloadCounts.syllabus}</p>
              <p className="text-sm text-gray-600">Syllabus Files</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{downloadCounts.notes}</p>
              <p className="text-sm text-gray-600">Study Notes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <File className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{downloadCounts.papers}</p>
              <p className="text-sm text-gray-600">Question Papers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse Files</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-8">
              <Download className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No files available in this category</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredDownloads.map(item => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg border ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(item.category)}`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(item.uploadDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => {
                      // In a real app, this would trigger the download
                      alert(`Downloading: ${item.title}`);
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};