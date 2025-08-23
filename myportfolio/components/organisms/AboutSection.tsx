import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AboutSectionProps {
  about: {
    fullBio: string;
    skills: string[];
    gallery?: string[];
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8 animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About <span className="text-primary dark:text-green-500">Me</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {about.fullBio}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Skills & <span className="text-primary dark:text-green-500">Expertise</span></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};