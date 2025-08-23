import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Likho Bomvana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};