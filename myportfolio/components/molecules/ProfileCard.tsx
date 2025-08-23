import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  image,
  className = ''
}) => {
  return (
    <Card className={`text-center ${className}`}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={`/${image}`} alt={name} />
            <AvatarFallback className="text-2xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-xl text-muted-foreground">{title}</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};