import React, { useState } from 'react';

function ResumeSection({ resumeUrl }) {
  const [showPreview, setShowPreview] = useState(false);

  if (!resumeUrl) {
    return (
      <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg border-2 border-dashed border-base-300">
        <i className="fa-regular fa-file text-base-content/40 text-xl" />
        <span className="text-slate-500 text-sm">Resume not added yet</span>
      </div>
    );
  }

  const resumeName = resumeUrl
  ? resumeUrl.split('/').pop().split('-').slice(1).join('-')  // Remove the prefix timestamp
  : 'No Resume';
  const isPDF = resumeUrl?.toLowerCase().endsWith('.pdf');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-full">
              <i className="fa-solid fa-file-pdf text-accent text-xl" />
            </div>
            <div>
              <h2 className="font-semibold text-base-content text-md">Resume</h2>
              <p className="text-xs text-slate-500">{resumeName}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setShowPreview(true)} className="btn btn-sm btn-outline btn-info" title="Preview">
              <i className="fa-solid fa-eye" />
            </button>
            <button onClick={handleDownload} className="btn btn-sm btn-outline btn-success" title="Download">
              <i className="fa-solid fa-download" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showPreview && (
        <dialog open className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl h-[90vh]">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="font-bold text-lg">Resume Preview</h3>
              <div className="flex items-center gap-2">
                <button className="btn btn-sm btn-accent" onClick={handleDownload}>
                  <i className="fa-solid fa-download me-2" />
                  Download
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => setShowPreview(false)}>
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>
            </div>

            <div className="h-[80%] overflow-auto rounded">
              {isPDF ? (
                <iframe
                  src={resumeUrl}
                  title="Resume Preview"
                  className="w-full h-full rounded"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full text-slate-500">
                  <i className="fa-solid fa-file text-5xl mb-4" />
                  <p className="font-semibold mb-2">Preview not available</p>
                  <p className="text-sm mb-4">This file cannot be previewed inline.</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="btn btn-accent" onClick={handleDownload}>
                      <i className="fa-solid fa-download me-2" />
                      Download File
                    </button>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <i className="fa-solid fa-up-right-from-square me-2" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal backdrop */}
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setShowPreview(false)}>close</button>
          </form>
        </dialog>
      )}
    </>
  );
}

export default ResumeSection;
