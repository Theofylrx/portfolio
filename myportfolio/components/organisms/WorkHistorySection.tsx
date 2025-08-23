import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface WorkHistoryItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

interface WorkHistorySectionProps {
  workHistory: WorkHistoryItem[];
}

export const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({ workHistory }) => {
  return (
    <section className="pt-4 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 md:mb-12 animate-slide-in-left">
          Work <span className="text-primary dark:text-green-500">History</span>
        </h2>
        <div className="space-y-8 animate-fade-in">
          {workHistory.map((job, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-primary dark:text-green-500">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">{job.company}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};