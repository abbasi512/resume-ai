// filepath: src/components/builder/tabs/CertificationsTab.tsx
"use client";

import type { ResumeCertification } from "@/types/resume";
import { Plus, Trash2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificationsTabProps {
  data: ResumeCertification[];
  onUpdate: (data: ResumeCertification[]) => void;
}

export default function CertificationsTab({ data, onUpdate }: CertificationsTabProps) {
  const addCertification = () => {
    const newCert: ResumeCertification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      expires: "",
    };
    onUpdate([...data, newCert]);
  };

  const updateCertification = (id: string, field: keyof ResumeCertification, value: string) => {
    onUpdate(data.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const removeCertification = (id: string) => {
    onUpdate(data.filter(cert => cert.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-brand-900">Certifications</h3>
          <p className="text-xs text-gray-400">Add professional certifications and licenses</p>
        </div>
        <button
          onClick={addCertification}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-900 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
        >
          <Plus size={14} />
          Add
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 px-4 border border-dashed border-gray-200 rounded-lg">
          <Award className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">No certifications added yet</p>
          <p className="text-xs text-gray-300 mt-1">Click "Add" to include your certifications</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((cert, index) => (
            <div key={cert.id} className="p-4 bg-gray-50 rounded-lg border border-black/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400">Certification {index + 1}</span>
                <button
                  onClick={() => removeCertification(cert.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="grid gap-3">
                <input
                  type="text"
                  placeholder="Certification name"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
                <input
                  type="text"
                  placeholder="Issuing organization"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Date (e.g., 2023)"
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                  />
                  <input
                    type="text"
                    placeholder="Expires (optional)"
                    value={cert.expires || ""}
                    onChange={(e) => updateCertification(cert.id, "expires", e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}