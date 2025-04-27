import React, { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';

const Summarizer = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      // In a real app, we would read the file contents here
    }
  };

  const generateSummary = () => {
    if (!text && !uploadedFile) return;

    setLoading(true);
    
    // This is a mock API call. In a real application, you would send the text to your backend
    setTimeout(() => {
      setSummary(
        "This mock summary demonstrates the functionality of the AI summarizer tool. " +
        "In a real application, this would be generated based on the input text or uploaded document. " +
        "The summary would identify key concepts and provide a concise version of the original content, " +
        "highlighting the most important points while maintaining context and meaning."
      );
      setLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setText('');
    setSummary('');
    setUploadedFile(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900 mb-4">AI Summarizer</h2>
      <p className="text-gray-600 mb-6">
        Enter text or upload a document to generate a comprehensive summary.
      </p>

      <div className="mb-6">
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
          Enter text to summarize:
        </label>
        <textarea
          id="text"
          rows={6}
          value={text}
          onChange={handleTextChange}
          placeholder="Paste your text here or upload a document..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or upload a document:
        </label>
        <div className="flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="space-y-2 text-center">
            <Upload className="mx-auto h-10 w-10 text-gray-400" />
            <div className="text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer text-indigo-600 hover:text-indigo-500">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileUpload}
                  accept=".pdf,.docx,.txt"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PDF, DOCX, TXT up to 10MB
            </p>
            {uploadedFile && (
              <p className="text-sm text-indigo-600 font-medium">
                {uploadedFile.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <button
          onClick={resetForm}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset
        </button>
        <button
          onClick={generateSummary}
          disabled={loading || (!text && !uploadedFile)}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
            loading || (!text && !uploadedFile)
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Summary'
          )}
        </button>
      </div>

      {summary && (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Summary</h3>
          <p className="text-gray-600 whitespace-pre-line">{summary}</p>
          <div className="mt-4 flex justify-end">
            <button className="text-sm text-indigo-600 hover:text-indigo-500">
              Copy to clipboard
            </button>
            <button className="ml-4 text-sm text-indigo-600 hover:text-indigo-500">
              Download summary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summarizer;