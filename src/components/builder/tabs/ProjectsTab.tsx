// filepath: src/components/builder/tabs/ProjectsTab.tsx
"use client";

import { useState } from "react";
import type { ResumeProject } from "@/types/resume";
import { Plus, Trash2, FolderKanban } from "lucide-react";

interface ProjectsTabProps {
  data: ResumeProject[];
  onUpdate: (data: ResumeProject[]) => void;
}

export default function ProjectsTab({ data, onUpdate }: ProjectsTabProps) {
  const addProject = () => {
    const newProject: ResumeProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      url: "",
      highlights: [],
    };
    onUpdate([...data, newProject]);
  };

  const updateProject = (id: string, field: keyof ResumeProject, value: any) => {
    onUpdate(data.map(proj => 
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  const updateTechnologies = (id: string, value: string) => {
    const techs = value.split(",").map(t => t.trim()).filter(Boolean);
    updateProject(id, "technologies", techs);
  };

  const removeProject = (id: string) => {
    onUpdate(data.filter(proj => proj.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-brand-900">Projects</h3>
          <p className="text-xs text-gray-400">Showcase notable projects and achievements</p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-900 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
        >
          <Plus size={14} />
          Add
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 px-4 border border-dashed border-gray-200 rounded-lg">
          <FolderKanban className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">No projects added yet</p>
          <p className="text-xs text-gray-300 mt-1">Click "Add" to showcase your projects</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((proj, index) => (
            <div key={proj.id} className="p-4 bg-gray-50 rounded-lg border border-black/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400">Project {index + 1}</span>
                <button
                  onClick={() => removeProject(proj.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Project name"
                  value={proj.name}
                  onChange={(e) => updateProject(proj.id, "name", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
                <textarea
                  placeholder="Project description and impact"
                  value={proj.description}
                  onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900 resize-none"
                />
                <input
                  type="text"
                  placeholder="Technologies (comma-separated: React, Node.js, AWS)"
                  value={proj.technologies.join(", ")}
                  onChange={(e) => updateTechnologies(proj.id, e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
                <input
                  type="text"
                  placeholder="Project URL (optional)"
                  value={proj.url || ""}
                  onChange={(e) => updateProject(proj.id, "url", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}