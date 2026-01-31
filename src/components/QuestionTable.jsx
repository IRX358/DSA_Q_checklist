import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Check, ChevronDown, Filter, Zap } from 'lucide-react';
import { questions, topics, topicColors } from '../data/questions';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const QuestionTable = ({ userProgress, onToggle }) => {
  const [search, setSearch] = useState('');
  const [topicFilter, setTopicFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const filteredQuestions = useMemo(() => {
    try {
        return questions.filter(q => {
          const matchSearch = q.name.toLowerCase().includes(search.toLowerCase());
          const matchTopic = topicFilter === 'all' || q.topic === topicFilter;
          const matchDifficulty = difficultyFilter === 'all' || q.difficulty === difficultyFilter;
          return matchSearch && matchTopic && matchDifficulty;
        });
    } catch (e) {
        console.error('Filter error:', e);
        return [];
    }
  }, [search, topicFilter, difficultyFilter]);

  const difficulties = ['Easy', 'Medium', 'Hard'];

  try {
      return (
        <div className="space-y-6">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                placeholder="Search questions..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-accent/40 transition-all font-medium text-sm placeholder:text-white/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
    
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative">
                <select 
                    className="appearance-none bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-3 outline-none focus:border-accent/40 text-sm font-medium cursor-pointer transition-all"
                    value={topicFilter}
                    onChange={(e) => setTopicFilter(e.target.value)}
                >
                    <option value="all">All Topics</option>
                    {(topics || []).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
              </div>
    
              <div className="relative">
                <select 
                    className="appearance-none bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-3 outline-none focus:border-accent/40 text-sm font-medium cursor-pointer transition-all"
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                    <option value="all">All Difficulties</option>
                    {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
              </div>
            </div>
          </div>
    
          {/* Table - Matching Reference Site Exactly */}
          <div className="overflow-hidden border border-white/5 bg-transparent rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-white/30 text-center w-20">#</th>
                  <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-white/30 w-32">Topic</th>
                  <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-white/30">Problem Statement</th>
                  <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-white/30 text-center w-32">Tier</th>
                  <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-white/30 text-right w-24">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredQuestions.map((q) => {
                  const isChecked = !!userProgress[q.id];
                  return (
                    <tr 
                      key={q.id} 
                      className={cn(
                        "group transition-all duration-200 hover:bg-white/[0.02]",
                        isChecked && "bg-accent/5 opacity-60"
                      )}
                    >
                      <td className="px-6 py-5 text-center font-mono text-sm text-white/40">
                          {q.id}
                      </td>
                      <td className="px-6 py-5">
                        <span 
                            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/80 uppercase tracking-tighter"
                            style={{ borderColor: `${topicColors[q.topic] || '#888'}33` }}
                        >
                            {q.topic}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <a 
                          href={q.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={cn(
                            "text-sm font-medium text-white/90 hover:text-accent transition-colors block",
                            isChecked && "line-through text-white/40"
                          )}
                        >
                          {q.name}
                        </a>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className={cn(
                          "text-[10px] font-black px-4 py-1 rounded-full border uppercase tracking-widest",
                          q.difficulty === 'Easy' && "border-easy/20 bg-easy/20 text-easy",
                          q.difficulty === 'Medium' && "border-medium/20 bg-medium/20 text-medium",
                          q.difficulty === 'Hard' && "border-hard/20 bg-hard/20 text-hard"
                        )}>
                          {q.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => onToggle(q.id)}
                          className="group/btn relative inline-flex items-center justify-center p-2 cursor-pointer"
                        >
                          <div className={cn(
                              "w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center relative z-10",
                              isChecked 
                                  ? "bg-accent border-accent shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                                  : "border-white/20 group-hover/btn:border-white/40"
                          )}>
                              {isChecked && <Check className="w-4 h-4 text-white stroke-[3px]" />}
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
  } catch (e) {
      console.error('QuestionTable render error:', e);
      return <div className="p-10 text-center text-white/40">Table rendering error</div>;
  }
};

export default QuestionTable;
