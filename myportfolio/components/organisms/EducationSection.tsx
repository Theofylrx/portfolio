import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  period?: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 md:mb-12 animate-slide-in-left">
          <span className="text-primary dark:text-green-500">Education</span>
        </h2>
        <div className="space-y-6 animate-fade-in">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-primary dark:text-green-500">
                    {edu.year || edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.degree}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};