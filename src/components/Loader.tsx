import React from 'react';
import { Code2 } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse">
        <Code2 className="w-16 h-16 text-purple-500" />
      </div>
    </div>
  );
};