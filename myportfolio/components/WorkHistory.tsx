'use client';

import React from 'react';

interface WorkHistoryItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

interface WorkHistoryProps {
  workHistory: WorkHistoryItem[];
}

const WorkHistory: React.FC<WorkHistoryProps> = ({ workHistory }) => {
  return (
    <section className="py-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Work History</h2>
      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-400">{job.company} | {job.period}</p>
            <h4 className="font-semibold mt-2">Responsibilities:</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Key Achievements:</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;