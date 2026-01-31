import React, { useState, useEffect } from 'react';
import { Terminal, Download, Trash2, Github, ShieldCheck, ListChecks, LayoutDashboard, RotateCcw } from 'lucide-react';
import Dashboard from './components/Dashboard';
import QuestionTable from './components/QuestionTable';

const App = () => {
  console.log('App rendering...');
  const [userProgress, setUserProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_progress_v3');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to parse progress:', e);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('dsa_progress_v3', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleToggle = (id) => {
    setUserProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleClearProgress = () => {
    if (confirm('Are you sure you want to clear all progress? This action cannot be undone.')) {
      setUserProgress({});
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(userProgress, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dsa-progress.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-accent/30 selection:text-white pb-20">
      <div className="tech-bg" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 text-accent">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tight text-white">DSA Learning Tracker</h1>
              <p className="text-xs text-secondary/40 font-medium font-mono uppercase tracking-wider">250 Questions for Placement Preparation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
                onClick={handleExportData}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-secondary transition-all"
            >
                <Download className="w-3.5 h-3.5" />
                <span>Export</span>
            </button>
            <button 
                onClick={handleClearProgress}
                className="flex items-center gap-2 px-4 py-2 bg-hard/10 hover:bg-hard/20 border border-hard/20 rounded-lg text-xs font-bold text-hard transition-all"
            >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
            </button>
            <a href="https://github.com/IRX358/DSA_Q_checklist" target="_blank" rel="noreferrer" className="p-2 ml-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
              <Github className="w-4 h-4 text-secondary/60" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-10">
        <div className="max-w-6xl mx-auto space-y-12 mb-10">
          <section className="duration-500">
             <div className="mb-8">
                <h2 className="text-3xl font-black mb-2 tracking-tight">Performance <span className="text-accent underline decoration-accent/20">Metrics</span></h2>
                <p className="text-secondary/60 text-sm font-medium">REAL-TIME_PROGRESS_VISUALIZATION</p>
             </div>
             <Dashboard userProgress={userProgress} />
          </section>

          <section className="duration-700">
             <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                   <h2 className="text-3xl font-black mb-2 tracking-tight">Question <span className="text-accent underline decoration-accent/20">Matrix</span></h2>
                   <p className="text-secondary/60 text-sm font-medium">CURATED_250_DSA_STRUCTURED_LIST</p>
                </div>
             </div>
             <QuestionTable userProgress={userProgress} onToggle={handleToggle} />
          </section>
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <p className="text-secondary text-xs font-semibold tracking-wider">
                Built with CURIOSITY • IRFAN IR 2026
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
